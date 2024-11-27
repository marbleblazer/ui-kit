import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart as EChartsLineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, memo } from 'react';
import { useTheme } from '@mui/material';
import { EChartsOption } from 'echarts';
import { TopLevelFormatterParams } from 'echarts/types/dist/shared';

echarts.use([TitleComponent, TooltipComponent, GridComponent, EChartsLineChart, CanvasRenderer]);

type DataType = (string | number)[];

export interface ILineChartProps {
    data: DataType[];
    xAxisName: string;
    yAxisName: string;
    style?: CSSProperties;
    resolvedTooltipTitle: (data: DataType) => string;
    resolvedTooltipSubtitle: (data: DataType) => string;
}

const LineChart: FC<ILineChartProps> = memo(
    ({ data, resolvedTooltipTitle, resolvedTooltipSubtitle, xAxisName, yAxisName, style }) => {
        const theme = useTheme();

        const option: EChartsOption = {
            backgroundColor: 'transparent',
            textStyle: {
                color: theme.palette.text.tertiary,
                fontFamily: 'Alliance No.2',
                fontSize: 10,
                fontWeight: 400,
            },
            xAxis: {
                type: 'category',
                name: xAxisName,
                nameLocation: 'start',
                axisLabel: {
                    show: true,
                },
                nameTextStyle: {
                    align: 'right',
                    padding: [-35, -35],
                    verticalAlign: 'bottom',
                    color: theme.palette.text.secondary,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: theme.palette.text.tertiary,
                        type: 'solid',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: theme.palette.border.secondary,
                    },
                },
            },

            yAxis: {
                type: 'value',
                name: yAxisName,
                nameLocation: 'end',
                axisLabel: {
                    show: true,
                },
                nameTextStyle: {
                    color: theme.palette.text.secondary,
                    align: 'right',
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: theme.palette.text.tertiary,
                        type: 'solid',
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: theme.palette.text.tertiary,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: theme.palette.border.secondary,
                    },
                },
            },
            series: [
                {
                    type: 'line',
                    data,
                    itemStyle: {
                        borderColor: theme.palette.base.color6,
                        color: '#fff',
                    },
                    lineStyle: {
                        width: 0.5,
                        color: theme.palette.base.color6,
                    },
                    symbol: 'circle',
                    showAllSymbol: true,
                    symbolKeepAspect: true,
                    symbolSize: 4,
                    showSymbol: true,
                    emphasis: {
                        itemStyle: {
                            color: theme.palette.base.color6,
                        },
                    },
                },
            ],
            tooltip: {
                trigger: 'axis',
                formatter: (params: TopLevelFormatterParams) => {
                    if (!Array.isArray(params) || params.length === 0) {
                        return 'No data';
                    }

                    const firstParam = params[0];
                    const data = firstParam.data as DataType;

                    return ` <div style="text-align: left;">
                            <span>${resolvedTooltipTitle(data)}</span>
                            </br>
                            <span style="color: ${theme.palette.text.tertiary}">${resolvedTooltipSubtitle(data)}</span>
                        </div>`;
                },
                backgroundColor: theme.palette.background.secondary,
                borderWidth: 0,
                padding: [4, 6],
                textStyle: {
                    color: theme.palette.text.primary,
                    fontFamily: 'Alliance No.2',
                    fontSize: 10,
                    fontWeight: 400,
                },
            },
        };

        return (
            <>
                <ReactEChartsCore notMerge lazyUpdate={true} echarts={echarts} option={option} style={style} />
            </>
        );
    },
);

export default LineChart;
