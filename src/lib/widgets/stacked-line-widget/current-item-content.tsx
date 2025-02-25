import { PropsWithChildren } from 'react';
import { StackedChart } from '@chirp/ui/lib';
import { Stack, Box } from '@mui/material';
import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
import { ColorListItem } from '../common/color-list-item/list-item';

export interface ICurrentItemContentProps {
    itemName: string;
    chartStyles?: React.CSSProperties;
    data: StackedLineChartDataType[];
    color: string;
}

export const CurrentItemContent = (props: PropsWithChildren<ICurrentItemContentProps>) => {
    const { itemName, data, color, chartStyles } = props;

    return (
        <Box>
            <Stack direction="row" gap={4} alignItems="center">
                <StackedChart
                    handleClick={(data) => console.log(data)}
                    colors={[color]}
                    style={{ width: '100%', height: '100%', ...chartStyles }}
                    data={data}
                />
                <Stack>
                    <Stack gap={1} mt={3} width="220px">
                        <ColorListItem key={itemName} name={itemName} value={null} color={color} />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
