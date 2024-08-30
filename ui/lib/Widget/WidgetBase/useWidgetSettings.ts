import { useEffect, useState } from 'react';

import { AttributeConfig, AttributeSettings, Settings } from '../types';
import { widgetAttributeNameConfig } from '../widgetAttributeNameConfig';
import { getObjectFromStorage, setObjectIntoStorage } from './helpers';

export const useWidgetSettings = (id: string, attr: string, config: AttributeConfig) => {
  const [showGraph, setShowGraph] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const [unitsOfMeasurement, setUnitsOfMeasurement] = useState(config?.units);

  const settings: Settings | null = getObjectFromStorage('widgetsSettings');

  const onlyGraphView = widgetAttributeNameConfig[attr]?.onlyGraphView;

  const setAttributeSettings = (key: keyof AttributeSettings, value: AttributeSettings[keyof AttributeSettings]) => {
    const currentSettings = settings || {};
    const deviceSettings = currentSettings[id] || {};
    const attrSettings = deviceSettings && deviceSettings[attr];

    const newAttrSettings = { ...attrSettings, [key]: value };
    const newDeviceSettings = { ...deviceSettings, [attr]: newAttrSettings };

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
  };
};
