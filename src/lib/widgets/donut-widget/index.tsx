import { PropsWithChildren } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { DonutChart } from '@chirp/ui/lib';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { DonutWidgetListItem } from './list-item';
import { DonutChartDataType } from '../../charts/donut-chart/donut-chart';

export interface IDonutWidgetProps extends IBaseWidgetProps {
    data: DonutChartDataType[];
    colors: string[];
    centerText?: string;
}

export const DonutWidget = (props: PropsWithChildren<IDonutWidgetProps>) => {
    const { data, colors, centerText, ...baseWidgetProps } = props;

    return (
        <BaseWidget {...baseWidgetProps}>
            <Box py={5}>
                <Stack direction="row" gap={4} alignItems="center">
                    <DonutChart centerText={centerText} colors={colors} data={data} />
                    <Stack gap={1} width="100%">
                        {data?.map((item, idx) => (
                            <DonutWidgetListItem
                                key={item.name}
                                name={item.name}
                                value={item.value}
                                color={colors[idx % colors.length]}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </BaseWidget>
    );
};
