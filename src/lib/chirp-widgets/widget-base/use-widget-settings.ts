import { useEffect, useState } from 'react';

import { AttributeConfig, AttributeSettings, Settings, ValueBoundaries } from '../types';
import { widgetAttributeNameConfig } from '../widget-attribute-name-config';
import { getObjectFromStorage, setObjectIntoStorage } from './helpers';

export const useWidgetSettings = (
    id: string,
    attr: string,
    config: AttributeConfig,
    onSettingsChange?: (settings: Settings) => void,
) => {
    const [showGraph, setShowGraph] = useState(true);
    const [showAlert, setShowAlert] = useState(true);
    const [unitsOfMeasurement, setUnitsOfMeasurement] = useState(config?.units);
    const [isBoundariesLoading, setIsBoundariesLoading] = useState(false);

    const settings: Settings | null = getObjectFromStorage('widgetsSettings');

    const onlyGraphView = widgetAttributeNameConfig[attr]?.onlyGraphView;

    const setAttributeSettings = (key: keyof AttributeSettings, value: AttributeSettings[keyof AttributeSettings]) => {
        const currentSettings = settings || {};
        const deviceSettings = currentSettings[id] || {};
        const attrSettings = deviceSettings[attr] || {};

        let updatedAttrSettings;

        if (key === 'valueBoundaries' && typeof value === 'object') {
            updatedAttrSettings = { ...attrSettings, ...value };
        } else {
            updatedAttrSettings = { ...attrSettings, [key]: value };
        }

        const newDeviceSettings = { ...deviceSettings, [attr]: updatedAttrSettings };

        // Передача настроек виджета во внешнюю функцию
        onSettingsChange && onSettingsChange({ ...currentSettings, [id]: newDeviceSettings });

        setObjectIntoStorage('widgetsSettings', { ...currentSettings, [id]: newDeviceSettings });
    };

    const toggleGraphVisibility = () => {
        setShowGraph((state) => {
            setAttributeSettings('showGraph', !state);

            return !state;
        });
    };

    const toggleAlertVisibility = () => {
        setShowAlert((state) => {
            setAttributeSettings('showAlert', !state);

            return !state;
        });
    };

    const updateUnits = (units: string) => {
        setUnitsOfMeasurement(() => {
            setAttributeSettings('units', units);

            return units;
        });
    };

    const setValueBoundaries = async ({ from, to }: ValueBoundaries) => {
        setIsBoundariesLoading(true);

        try {
            setAttributeSettings('valueBoundaries', { valueFrom: from ?? undefined, valueTo: to ?? undefined });
        } catch (error) {
            console.error('Failed to set value boundaries:', error);
        } finally {
            setIsBoundariesLoading(false);
        }
    };

    useEffect(() => {
        if (!settings) return;

        const deviceSettings = settings[id];
        const attrSettings = deviceSettings && deviceSettings[attr];

        if (attrSettings) {
            setShowGraph(onlyGraphView ?? attrSettings.showGraph ?? true);
            setUnitsOfMeasurement(attrSettings.units || config.units);
            setShowAlert(attrSettings.showAlert ?? true);
        }
    }, [attr, id, settings, config, onlyGraphView]);

    return {
        showGraph,
        showAlert,
        unitsOfMeasurement,
        toggleAlertVisibility,
        toggleGraphVisibility: onlyGraphView ? undefined : toggleGraphVisibility,
        setUnitsOfMeasurement: updateUnits,
        setValueBoundaries,
        isBoundariesLoading,
    };
};
