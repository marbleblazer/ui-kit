import { Serie } from '@nivo/line';
import { useEffect, useState, FC } from 'react';

import { getTimeString, getChartData, getValueString } from '../helpers/index';
import { WidgetProps } from '../types';
import { WidgetBase } from '../widget-base';
import { converter } from './converter';
import { graphEmptyStateValue } from '@chirp/ui/lib/chirp-widgets/helpers/emptyStateValue';

export const GraphicWidget: FC<WidgetProps> = ({
    config,
    lastSeen,
    graphValues,
    currentValue,
    attributeName,
    deviceId,
    isLoading,
    isError,
    timequant,
    period,
    switchView,
}) => {
    const [chartData, setChartData] = useState<Serie[] | null>(null);
    const [lastValue, setLastValue] = useState<string | number | boolean>();
    const [time, setTime] = useState<string | null>(null);
    const [shouldBeConverted, setShouldBeConverted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const unitsConverter = converter[config.units];

    const postfix =
        config.units && config.units !== 'none'
            ? shouldBeConverted
                ? unitsConverter.alternativeUnits
                : config.units
            : '';

    useEffect(() => {
        if (!graphValues) return;
        const metrics = Object.keys(graphValues);

        if (metrics.length > 0) {
            setChartData(
                getChartData({
                    attribute: attributeName,
                    config: config,
                    metrics: graphValues,
                    shouldBeConverted,
                    unitsConverter,
                }),
            );
        } else {
            setChartData(graphEmptyStateValue);
        }
    }, [graphValues, attributeName, config, shouldBeConverted, unitsConverter]);

    useEffect(() => {
        setTime(lastSeen ? getTimeString(lastSeen) : '');
    }, [lastSeen]);

    useEffect(() => {
        setLastValue(getValueString({ value: currentValue, config, unitsConverter, shouldBeConverted }));
    }, [config, currentValue, shouldBeConverted, unitsConverter]);

    useEffect(() => {
        if (time !== null) {
            setIsSuccess(true);
        }
    }, [time]);

    return (
        <WidgetBase
            id={deviceId}
            attributeName={attributeName}
            chartData={chartData}
            timequant={timequant}
            postfix={postfix}
            date={time ?? ''}
            isLoading={isLoading || !isSuccess}
            isError={isError}
            isInteractive={lastValue !== undefined}
            config={config}
            onUnitsChange={setShouldBeConverted}
            value={lastValue}
            period={period}
            switchView={switchView}
        />
    );
};
