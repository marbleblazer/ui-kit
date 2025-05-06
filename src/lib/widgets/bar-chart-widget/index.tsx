import { useCallback } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import * as S from './style';
import { Typography, ZoomBarChart } from '@chirp/ui/lib';
import { Stack, SxProps, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CallbackDataParams, TopLevelFormatterParams } from 'echarts/types/dist/shared';

type TOptionType = {
    id: number;
    label: string;
    color: string;
};

interface IBarChartWidgetProps extends IBaseWidgetProps {
    legendItems: TOptionType[];
    data: {
        categories: string[];
        series: number[][];
    };
    legendContainerSx?: SxProps;
    emptyFallbackMsg: string;
}

export interface ITooltipParams {
    seriesName: string;
    value: number;
    name: string;
    color: string;
}

export const BarChartWidget: React.FC<IBarChartWidgetProps> = (props) => {
    const { legendItems, data, legendContainerSx, emptyFallbackMsg, ...baseWidgetProps } = props;

    const theme = useTheme();

    const { t, i18n } = useTranslation('uiKit', { keyPrefix: 'widgets' });

    const customTooltipFormatter = useCallback(
        (params: TopLevelFormatterParams | TopLevelFormatterParams[]) => {
            const { seriesName, value, name, color } = params as CallbackDataParams;

            const safeColor =
                typeof color === 'object' && 'colorStops' in color ? color.colorStops?.[0]?.color : (color as string);

            const titleStyle = `font-size: ${String(theme.typography.caption12.fontSize)}px; font-weight: ${String(theme.typography.caption12.fontWeight)}; color: ${theme.palette.text.textInput80};`;
            const descriptionTextStyle = `font-size: ${String(theme.typography.overline.fontSize)}px; font-weight: ${String(theme.typography.overline.fontWeight)}; color: ${theme.palette.text.text1};`;

            return `
                <div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                        <span style="color: ${safeColor}; margin-right: 5px;">●</span>
                        <span style="${titleStyle}">${seriesName}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; ${descriptionTextStyle}">
                        <span>${t('Fuel')}:</span>
                        <span>${Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 })} ${t('L')}</span>
                    </div>
                    <div style="${descriptionTextStyle}">
                        ${(() => {
                            const dateObj = new Date(name);

                            return `${dateObj.getDate()} ${dateObj.toLocaleString(i18n.language, { month: 'long' })} ${dateObj.getFullYear()}`;
                        })()}
                    </div>
                </div>
            `;
        },
        [i18n.language, t, theme],
    );

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderSubHeader={
                data.categories.length &&
                data.series.length && (
                    <S.LegendContainer sx={{ ...legendContainerSx }}>
                        {legendItems.map((item) => (
                            <S.LabelAndDotWrapper key={item.id}>
                                <S.Dot bgcolor={item.color} />
                                <S.Label variant="caption12">{item.label}</S.Label>
                            </S.LabelAndDotWrapper>
                        ))}
                    </S.LegendContainer>
                )
            }
            renderMainContent={
                data.categories.length && data.series.length ? (
                    <ZoomBarChart
                        categories={data.categories}
                        seriesData={data.series}
                        legendItems={legendItems}
                        tooltipFormatter={customTooltipFormatter}
                    />
                ) : (
                    <Stack width="100%" height="100%" justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" color={theme.palette.text.text8}>
                            {emptyFallbackMsg}
                        </Typography>
                    </Stack>
                )
            }
        />
    );
};
