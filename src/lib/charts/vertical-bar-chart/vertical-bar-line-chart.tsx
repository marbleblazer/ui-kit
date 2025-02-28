import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart as EChartsBarChart } from 'echarts/charts';
import { GridComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, memo, useMemo } from 'react';
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

    const paddedData = useMemo(() => {
        const copyOfArray = [...data];

        copyOfArray.slice(0, 10);

        if (copyOfArray.length < 10) {
            const newArray = new Array(10 - copyOfArray.length).fill('') as string[];

            return [...copyOfArray, ...newArray];
        }

        return copyOfArray;
    }, [data]);

    const option = {
        textStyle: {
            color: theme.palette.text.text8,
        },
        yAxis: {
            axisTick: {
                show: false,
            },
            type: 'category',
            data: paddedData,
            boundaryGap: true, // Убираем распределение space-around
            inverse: true, // Сверху вниз
            axisLabel: {
                fontSize: 8,
                color: theme.palette.text.text8,
                formatter: (value: unknown) => (value || value === 0 ? `${value} ${unit}` : ''), // Показываем только реальные значения
            },
            axisLine: {
                show: false,
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
            top: 16,
            right: 30,
            bottom: 54,
            containLabel: true, // Чтобы учесть отступы между барами
        },
        series: [
            {
                type: 'bar',
                data: paddedData,
                barWidth: 12,
                align: 'left',
                barGap: '4px',
                barCategoryGap: '0%',
                itemStyle: {
                    color,
                },
            },
        ],
    };

    return <ReactEChartsCore lazyUpdate={true} echarts={echarts} option={option} style={style} />;
});

export default VerticalBarChart;
