import { Serie } from '@nivo/line';
import { useEffect, useState } from 'react';

import { getTimeString, getValueString } from '../helpers/index';
import { WidgetProps } from '../types';
import { WidgetBase } from '../widget-base';
import { graphEmptyStateValue } from '@chirp/ui/lib/chirp-widgets/helpers/empty-state-value';

export const StaticWidget: React.FC<WidgetProps> = ({
    deviceId,
    config,
    lastSeen,
    attributeName,
    currentValue,
    isLoading,
    isError,
    timequant,
    switchView,
}) => {
    const [chartData, setChartData] = useState<Serie[] | null>(null);
    const [lastValue, setLastValue] = useState<string | number | boolean>();
    const [time, setTime] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const postfix = config.units && config.units !== 'none' ? config.units : '';

    useEffect(() => {
        if (isLoading) return;
        setChartData(graphEmptyStateValue);
    }, [isLoading]);

    useEffect(() => {
        setLastValue(getValueString({ value: currentValue, config, shouldBeConverted: false }));
    }, [config, currentValue]);

    useEffect(() => {
        setTime(getTimeString(lastSeen || 0));
    }, [lastSeen]);

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
            isInteractive={false}
            config={config}
            value={lastValue}
            switchView={switchView}
        />
    );
};
