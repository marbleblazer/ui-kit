// components/charts/ZoomBarChart.tsx

import { CSSProperties, FC, useRef } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, DataZoomComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { useTheme } from '@mui/material';
import { EChartsOption } from 'echarts';
import { TopLevelFormatterParams } from 'echarts/types/dist/shared';

echarts.use([BarChart, GridComponent, TooltipComponent, DataZoomComponent, LegendComponent, CanvasRenderer]);

type TSeriesData = number[][];

export interface IZoomBarChartProps {
    categories: string[];
    seriesData: TSeriesData;
    legendItems: {
        id: number;
        label: string;
        color: string;
    }[];
    style?: CSSProperties;
    tooltipFormatter?: (params: TopLevelFormatterParams | TopLevelFormatterParams[]) => string;
}

const ZoomBarChart: FC<IZoomBarChartProps> = ({ categories, seriesData, legendItems, tooltipFormatter, style }) => {
    const theme = useTheme();

    const chartRef = useRef<ReactEChartsCore>(null);

    const textStyle = {
        fontSize: theme.typography.overline.fontSize,
        fontFamily: theme.typography.overline.fontFamily,
        fontWeight: theme.typography.overline.fontWeight as number,
        color: theme.palette.text.text8,
    };

    const option: EChartsOption = {
        tooltip: {
            trigger: 'item',
            axisPointer: { type: 'none' },
            formatter: tooltipFormatter,
            renderMode: 'html',
            padding: 12,
            borderColor: 'transparent',
            backgroundColor: theme.palette.background.background14,
            shadowBlur: 8,
            borderRadius: 4,
        },
        xAxis: {
            type: 'category',
            data: categories,
            axisLabel: { ...textStyle },
            axisLine: { show: false },
            axisTick: { show: false },
        },
        yAxis: {
            type: 'value',
            axisLabel: { ...textStyle },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
        },
        dataZoom: [
            { type: 'slider', start: 0, end: 100 },
            { type: 'inside', start: 0, end: 100 },
        ],
        grid: {
            left: 10,
            right: 10,
            top: 16,
            bottom: 60,
            containLabel: true,
        },
        series: legendItems.map((item, index) => ({
            name: item.label,
            type: 'bar',
            data: seriesData[index],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: item.color,
                    },
                    {
                        offset: 1,
                        color: `${item.color}00`,
                    },
                ]),
                borderRadius: [4, 4, 0, 0],
                decal: {
                    symbol: 'line',
                    symbolSize: 7,
                    dashGap: 0,
                    color: theme.palette.background.background7,
                    rotation: -45,
                },
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: item.color,
                        },
                        {
                            offset: 1,
                            color: `${item.color}00`,
                        },
                    ]),
                    borderRadius: [4, 4, 0, 0],
                    decal: {
                        symbol: 'line',
                        symbolSize: 4,
                        dashGap: 1,
                        color: theme.palette.background.background7,
                        rotation: -Math.PI / 3,
                    },
                },
            },
        })),
    };

    return (
        <ReactEChartsCore
            ref={chartRef}
            echarts={echarts}
            option={option}
            style={style || { height: '400px', width: '100%' }}
            lazyUpdate
            notMerge
        />
    );
};

export default ZoomBarChart;
