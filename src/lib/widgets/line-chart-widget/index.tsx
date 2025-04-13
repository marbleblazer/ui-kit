import { Box, Stack, useTheme } from '@mui/material';
import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { StackedChart, Typography } from '@chirp/ui/lib';

type TOptionType = {
    label: string;
    color: string;
};

interface ILineChartWidgetProps extends IBaseWidgetProps {
    chartData: StackedLineChartDataType[];
    legendItems: TOptionType[];
    colors: string[];
    chartStyles?: React.CSSProperties;
}

export const LineChartWidget: React.FC<React.PropsWithChildren<ILineChartWidgetProps>> = (props) => {
    const { chartData, legendItems, colors, chartStyles, ...baseWidgetProps } = props;

    const theme = useTheme();

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderSubHeader={
                <Stack direction="row" gap="16px" width="359px" flexWrap="wrap">
                    {legendItems.map((item, index) => (
                        <Box key={item.label} display="flex" alignItems="center" gap="8px" whiteSpace="nowrap">
                            <Box width="4px" height="4px" borderRadius="50%" bgcolor={colors[index % colors.length]} />
                            <Typography variant="caption12" color={theme.palette.text.textInput80}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            }
            renderMainContent={
                <StackedChart
                    colors={colors}
                    style={{ width: '100%', height: '100%', ...chartStyles }}
                    data={chartData}
                />
            }
        />
    );
};
