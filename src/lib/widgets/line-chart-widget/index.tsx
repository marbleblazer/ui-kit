import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { StackedChart } from '@chirp/ui/lib';
import * as S from './style';

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
}

export const LineChartWidget: React.FC<React.PropsWithChildren<ILineChartWidgetProps>> = (props) => {
    const { chartData, selectedItems, colors, chartStyles, ...baseWidgetProps } = props;

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderSubHeader={
                <S.LegendContainer>
                    {selectedItems.map((item, index) => (
                        <S.LabelAndDotWrapper key={item.label}>
                            <S.Dot bgcolor={colors[index % colors.length]} />
                            <S.Label variant="caption12">{item.label}</S.Label>
                        </S.LabelAndDotWrapper>
                    ))}
                </S.LegendContainer>
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
