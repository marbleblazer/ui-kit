import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { StackedChart, Typography } from '@chirp/ui/lib';
import * as S from './style';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';

type TOptionType = {
    id: number;
    label: string;
    color: string;
};

interface ILineChartWidgetProps extends IBaseWidgetProps {
    chartData: StackedLineChartDataType[];
    selectedItems: TOptionType[];
    colors: string[];
    chartStyles?: React.CSSProperties;
    emptyFallbackMsg: string;
}

export const LineChartWidget: React.FC<React.PropsWithChildren<ILineChartWidgetProps>> = (props) => {
    const theme = useTheme();

    const { chartData, selectedItems, colors, chartStyles, emptyFallbackMsg, ...baseWidgetProps } = props;

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderSubHeader={
                chartData.length && (
                    <S.LegendContainer>
                        {selectedItems.map((item, index) => (
                            <S.LabelAndDotWrapper key={item.label}>
                                <S.Dot bgcolor={colors[index % colors.length]} />
                                <S.Label variant="caption12">{item.label}</S.Label>
                            </S.LabelAndDotWrapper>
                        ))}
                    </S.LegendContainer>
                )
            }
            renderMainContent={
                chartData.length ? (
                    <StackedChart
                        colors={colors}
                        style={{ width: '100%', height: '100%', ...chartStyles }}
                        data={chartData}
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
