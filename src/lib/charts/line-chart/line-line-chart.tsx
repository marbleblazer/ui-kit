import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart as EChartsLineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, DataZoomComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, memo } from 'react';
import { alpha, useTheme } from '@mui/material';
import { EChartsOption } from 'echarts';
import { TopLevelFormatterParams } from 'echarts/types/dist/shared';

echarts.use([TitleComponent, TooltipComponent, GridComponent, EChartsLineChart, CanvasRenderer, DataZoomComponent]);

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
                color: theme.palette.text.text8,
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
                    padding: [-20, 15],
                    verticalAlign: 'bottom',
                    color: theme.palette.text.text4,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: theme.palette.text.text8,
                        type: 'solid',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: theme.palette.border.border3,
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
                    align: 'right',
                    padding: [-5, 12],
                    color: theme.palette.text.text4,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: theme.palette.text.text8,
                        type: 'solid',
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: theme.palette.text.text8,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: theme.palette.border.border3,
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
            dataZoom: [
                {
                    start: 30,
                    end: 70,
                    type: 'slider', // Ползунок
                    show: true,
                    brushStyle: {
                        borderColor: theme.palette.border.border3,
                        color: theme.palette.base.color63,
                    },
                    emphasis: {
                        moveHandleStyle: {
                            color: theme.palette.base.color6,
                        },
                        handleLabel: {},
                        handleStyle: {
                            color: theme.palette.base.hover,
                        },
                    },
                    backgroundColor: 'transparent',
                    fillerColor: 'transparent',
                    borderColor: theme.palette.border.border3,
                    handleStyle: {
                        borderColor: theme.palette.border.border3,
                        color: theme.palette.base.color6,
                    },
                    moveHandleStyle: {
                        borderColor: theme.palette.border.border3,
                        color: theme.palette.base.color6,
                    },
                    dataBackground: {
                        lineStyle: {
                            color: alpha(theme.palette.base.color6, 0.3), // Цвет линии данных
                            width: 1,
                        },
                        areaStyle: {
                            color: 'transaprent', // Цвеsт фона данных
                        },
                    },
                    selectedDataBackground: {
                        lineStyle: {
                            color: theme.palette.base.hover, // Цвет выделенных данных
                            width: 1,
                        },
                        areaStyle: {
                            color: 'transparent', // Заливка выделенной области
                        },
                    },
                    handleSize: '100%',
                    textStyle: {
                        color: theme.palette.text.text8,
                        fontFamily: 'Alliance No.2',
                        fontSize: 10,
                        fontWeight: 400,
                    },
                },
                {
                    type: 'inside', // Масштабирование колесиком
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

                    return `<div style="text-align: left; display: flex; flex-direction: column; gap: 4px">
                                <span>${resolvedTooltipTitle(data)}</span>
                                <span style="color: ${theme.palette.text.text1}; fontFamily: ${theme.typography.mono10.fontFamily}; fontSize: ${theme.typography.mono10.fontSize}; fontWeight: ${theme.typography.mono10.fontWeight}">
                                    ${resolvedTooltipSubtitle(data)}
                                </span>
                            </div>`;
                },
                backgroundColor: theme.palette.background.background15,
                borderWidth: 1,
                borderColor: alpha(theme.palette.border.border3, 0.1),
                padding: 8,
                textStyle: {
                    color: theme.palette.text.text4,
                    fontFamily: theme.typography.paragraphSecondary.fontFamily,
                    fontSize: theme.typography.paragraphSecondary.fontSize,
                    fontWeight: theme.typography.paragraphSecondary.fontWeight as number,
                },
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 4,
                shadowColor: alpha('#5C5C5C', 0.14),
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
