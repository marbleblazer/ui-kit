import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart as EChartsBarChart } from 'echarts/charts';
import { GridComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, memo } from 'react';
import { useTheme } from '@mui/material';

echarts.use([TitleComponent, GridComponent, EChartsBarChart, CanvasRenderer]);

export type VerticalBarsChartDataType = string | number;

export interface IVerticalBarsChartProps {
    data: VerticalBarsChartDataType[];
    style?: CSSProperties;
    color?: string; // Цвет баров
    unit?: string; // Единица измерения
}

const VerticalBarChart: FC<IVerticalBarsChartProps> = memo(({ data, style, color, unit = '' }) => {
    const theme = useTheme();

    const option = {
        textStyle: {
            color: theme.palette.text.text8,
        },
        yAxis: {
            axisTick: {
                show: false,
            },
            type: 'category',
            data: data,
            inverse: true,
            axisLabel: {
                fontSize: 8,
                color: theme.palette.text.text8,
                formatter: `{value} ${unit}`,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: theme.palette.border.border3,
                    type: 'solid',
                },
            },
        },
        xAxis: {
            type: 'value',
            position: 'bottom',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: theme.palette.border.border3,
                },
            },
            axisLabel: {
                fontSize: 8,
                color: theme.palette.text.text8,
                formatter: `{value} ${unit}`,
            },
        },
        grid: {
            left: 80,
            top: 0,
            right: 30,
            bottom: 40,
        },
        series: [
            {
                type: 'bar',
                data,
                barWidth: 12,
                itemStyle: {
                    color,
                },
            },
        ],
    };

    return <ReactEChartsCore lazyUpdate={true} echarts={echarts} option={option} style={style} />;
});

export default VerticalBarChart;
