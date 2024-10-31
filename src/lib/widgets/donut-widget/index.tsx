import { PropsWithChildren, useState } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { DonutChart } from '@chirp/ui/lib';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { ColorListItem } from '../common/color-list-item/list-item';
import { DonutChartDataType } from '../../charts/donut-chart/donut-chart';
import { BaseWidgetCustomHeader } from '../base-widget/base-widget-custom-header';

export interface IDonutWidgetProps extends IBaseWidgetProps {
    data: DonutChartDataType[];
    colors: string[];
    centerText?: string;
    renderSelectedContent: (item: DonutChartDataType) => JSX.Element;
}

export const DonutWidget = (props: PropsWithChildren<IDonutWidgetProps>) => {
    const { data, colors, centerText, title, renderSelectedContent, ...baseWidgetProps } = props;
    const [selectedItem, setSelectedItem] = useState<DonutChartDataType | null>(null);

    return (
        <BaseWidget
            {...baseWidgetProps}
            title={title}
            customHeader={
                selectedItem !== null ? (
                    <BaseWidgetCustomHeader
                        typeText={title}
                        title={selectedItem.name}
                        onBackClick={() => setSelectedItem(null)}
                    />
                ) : undefined
            }
        >
            {selectedItem ? (
                renderSelectedContent(selectedItem)
            ) : (
                <Box py={5}>
                    <Stack direction="row" gap={4} alignItems="center">
                        <DonutChart centerText={centerText} colors={colors} data={data} />
                        <Stack gap={1} width="100%">
                            {data?.map((item, idx) => (
                                <ColorListItem
                                    key={item.name}
                                    name={item.name}
                                    onClick={() => setSelectedItem(item)}
                                    value={item.value}
                                    color={colors[idx % colors.length]}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            )}
        </BaseWidget>
    );
};
