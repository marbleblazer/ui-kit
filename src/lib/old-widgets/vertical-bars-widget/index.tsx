import { PropsWithChildren, useEffect, useState } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { Typography, VerticalBarChart } from '@chirp/ui/lib';
import { Stack, useTheme, Box } from '@mui/material';

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
        const sortedCollection = collection.sort((elem1, elem2) => Number(elem2[valueKey]) - Number(elem1[valueKey]));
        sortedCollection.forEach((elem) => {
            preparedData.push(elem[valueKey] as VerticalBarsChartDataType);
            preparedList.push(elem[nameKey] as string);
        });

        setChartData(preparedData);
        setListData(preparedList);
    }, [collection, nameKey, valueKey]);

    return (
        <BaseWidget {...baseWidgetProps}>
            <Box>
                <Stack direction="row" gap={4} justifyContent="space-between">
                    <Stack gap={1}>
                        <Typography color="text.text8" variant="overline">
                            {listLabel}
                        </Typography>
                        {listData.map((elem) => (
                            <Typography color="text.text1" key={elem} variant="caption12">
                                {elem}
                            </Typography>
                        ))}
                    </Stack>
                    <Box
                        sx={{
                            ...chartStyles,
                            width: 'auto',
                            aspectRatio: '2/1',
                        }}
                    >
                        <VerticalBarChart
                            unit={unit}
                            color={theme.palette.base.color6}
                            style={chartStyles}
                            data={chartData}
                        />
                    </Box>
                </Stack>
            </Box>
        </BaseWidget>
    );
};
