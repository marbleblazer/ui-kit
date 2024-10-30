import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { PieChart as EChartsPieChart } from 'echarts/charts';
import { TitleComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { FC, memo } from 'react';
import { Box, useTheme } from '@mui/material';
import { EChartsOption } from 'echarts';
import { default as CenterSubstract } from './center-substract.svg?react';
import * as S from './style';

echarts.use([TitleComponent, EChartsPieChart, SVGRenderer]);

const DONUT_CHART_DIAMETER = '88px';

export type DonutChartDataType = {
    name: string;
    value: number;
};

export interface IDonutChartProps {
    data: DonutChartDataType[];
    colors: string[];
    centerText?: React.ReactNode;
}

const DonutChart: FC<IDonutChartProps> = memo(({ colors, centerText, data }) => {
    const theme = useTheme();
    const option: EChartsOption = {
        series: [
            {
                type: 'pie',
                radius: ['0%', '100%'],
                avoidLabelOverlap: false,
                cursor: 'default',
                color: colors,
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false,
                },
                emphasis: { focus: 'none', scale: false },
                data,
            },
        ],
    };

    return (
        <Box position="relative" sx={{ width: DONUT_CHART_DIAMETER, height: DONUT_CHART_DIAMETER }}>
            <S.Text
                variant="subtitle1"
                sx={{
                    color: colors?.length ? colors[0] : 'text.primary',
                }}
            >
                {centerText}
            </S.Text>
            <CenterSubstract
                style={{
                    color: theme.palette.background.secondary,
                    position: 'absolute',
                    zIndex: 3,
                    top: '-3px',
                    left: '-3px',
                }}
            />
            <ReactEChartsCore
                lazyUpdate={true}
                echarts={echarts}
                option={option}
                style={{ width: DONUT_CHART_DIAMETER, height: DONUT_CHART_DIAMETER }}
            />
        </Box>
    );
});

export default DonutChart;
