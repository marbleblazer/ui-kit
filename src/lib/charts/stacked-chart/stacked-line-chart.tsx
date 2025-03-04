import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart as EChartsLineChart } from 'echarts/charts';
import { GridComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, memo, useRef } from 'react';
import { useTheme } from '@mui/material';
import { EChartsOption } from 'echarts';

echarts.use([TitleComponent, GridComponent, EChartsLineChart, CanvasRenderer]);

export type StackedLineChartDataType = Record<string, number>;

export interface IStackedChartProps {
    data: StackedLineChartDataType[];
    xAxisData?: string[];
    colors: string[];
    style: CSSProperties;
}

const StackedChart: FC<IStackedChartProps> = memo(({ data = [], xAxisData, style, colors }) => {
    const theme = useTheme();
    const chartRef = useRef<ReactEChartsCore>(null);
    const seriesKeys = data?.length ? Object.keys(data?.[0]) : [];

    const seriesData: EChartsOption['series'] = data.map((elem, idx) => ({
        type: 'line',
        data: Object.keys(elem).map((key) => elem[key]),
        lineStyle: {
            width: 2,
            color: colors ? colors[idx % colors.length] : theme.palette.base.color6,
        },
        showSymbol: false,
    }));

    const option: EChartsOption = {
        backgroundColor: 'transparent',
        textStyle: {
            color: theme.palette.text.text8,
            fontFamily: 'Alliance No.2',
            fontSize: 8,
            fontWeight: 500,
        },
        xAxis: {
            type: 'category',
            nameLocation: 'start',
            axisLabel: {
                show: true,
                fontSize: 8,
                fontFamily: 'Alliance No.2',
                fontWeight: 500,
                color: theme.palette.text.text8,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: theme.palette.border.border3,
                    type: 'solid',
                },
            },
            data: xAxisData ?? seriesKeys, // используем кастомные значения или значения по умолчанию
        },
        grid: {
            left: 0,
            right: 10,
            top: 20,
            bottom: 0,
            containLabel: true, // гарантирует, что метки осей остаются видимыми
        },
        yAxis: {
            type: 'value',
            nameLocation: 'end',
            axisLabel: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: seriesData,
    };

    return <ReactEChartsCore ref={chartRef} lazyUpdate notMerge echarts={echarts} option={option} style={style} />;
});

export default StackedChart;
