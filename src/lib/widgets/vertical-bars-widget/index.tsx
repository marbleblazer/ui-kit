import { PropsWithChildren, useEffect, useState } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { Typography, VerticalBarChart } from '@chirp/ui/lib';
import { Box } from '@mui/system';
import { Stack, useTheme } from '@mui/material';

import { VerticalBarsChartDataType } from '../../charts/vertical-bar-chart/vertical-bar-line-chart';

export interface IVerticalBarsChartWidgetProps<T> extends IBaseWidgetProps {
    collection: T[];
    valueKey: keyof T;
    nameKey: keyof T;
    unit?: string;
    listLabel?: string;
    chartStyles?: React.CSSProperties;
    maxItems?: number;
}

export const VerticalBarsChartWidget = <T,>(props: PropsWithChildren<IVerticalBarsChartWidgetProps<T>>) => {
    const theme = useTheme();
    const { collection, valueKey, maxItems = 10, chartStyles, nameKey, unit, listLabel, ...baseWidgetProps } = props;
    const [chartData, setChartData] = useState<VerticalBarsChartDataType[]>([]);
    const [listData, setListData] = useState<string[]>([]);

    useEffect(() => {
        if (!collection?.length) return;
        const preparedData: VerticalBarsChartDataType[] = [];
        const preparedList: string[] = [];

        collection.forEach((elem) => {
            preparedData.push(elem[valueKey] as VerticalBarsChartDataType);
            preparedList.push(elem[nameKey] as string);
        });

        setChartData(preparedData);
        setListData(preparedList);
    }, [collection]);

    return (
        <BaseWidget {...baseWidgetProps}>
            <Box>
                <Stack direction="row" gap={4} justifyContent="space-between">
                    <Stack gap={2}>
                        <Typography sx={{ color: 'text.tertiary', lineHeight: '16px' }} variant="overline">
                            {listLabel}
                        </Typography>
                        {listData.map((elem) => (
                            <Typography
                                sx={{ color: 'text.primary', lineHeight: '12px' }}
                                key={elem}
                                variant="overline"
                            >
                                {elem}
                            </Typography>
                        ))}
                    </Stack>
                    <VerticalBarChart
                        unit={unit}
                        color={theme.palette.accent.accent}
                        style={chartStyles}
                        data={chartData}
                    />
                </Stack>
            </Box>
        </BaseWidget>
    );
};
