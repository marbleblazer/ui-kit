import { rgbToHex, useTheme } from '@mui/material';
import { LineSvgProps, ResponsiveLine, Serie } from '@nivo/line';
import { Scale } from '@nivo/scales';
import { useMemo } from 'react';

import { AttributeConfig, CalculatedValues, Timequant, Timequants } from '@chirp/ui/lib/chirp-widgets/types';
import { AreaLayer } from '../custom-area';
import { CustomLine } from '../custom-line';
import { Skeleton } from '../skeleton/Skeleton';
import { Tooltip } from '../Tooltip';
import { DEFAULT_COLORS, DEFAULT_DEFS, createFlatChartTheme } from './chart-theme';
import { CustomRangeLayer } from './сustom-range-layer';
import { getFlatChartDefs } from './helpers';
import * as S from './style';

type GraphProps = {
    chartData: Array<Serie> | null;
    calculatedValues: CalculatedValues;
    color: string;
    withAxisBottom?: boolean;
    isInteractive?: boolean;
    timeFormat?: string;
    config?: AttributeConfig;
    postfix?: string;
    timequant?: Timequant;
} & Pick<LineSvgProps, 'curve'>;

const getTickValues = (timequant: Timequant | undefined, dataLength?: number): number | string => {
    if (dataLength && dataLength > 16) {
        return 8;
    }

    if (dataLength && dataLength > 28) {
        return 6;
    }

    switch (timequant) {
        case Timequants.hour:
            return 12;
        case Timequants.day:
            return 'every day';
        case Timequants.week:
            return 'every week';
        case Timequants.month:
            return 'every month';
        default:
            return 6;
    }
};

const Graph: React.FC<GraphProps> = ({
    chartData,
    calculatedValues,
    curve = 'linear',
    color,
    config,
    withAxisBottom,
    isInteractive,
    timeFormat,
    timequant,
    postfix,
}) => {
    const theme = useTheme();

    const minValue = useMemo(() => {
        const { min, max } = calculatedValues;

        // min value should be in the middle of the graph height
        return max !== null && min !== null ? min - (max - min) : 'auto';
    }, [calculatedValues]);

    // const defs = getFlatChartDefs(rgbToHex(color), '#656565');
    const defs = getFlatChartDefs(rgbToHex(color), rgbToHex(theme.palette.background.background4));

    const tickValues = getTickValues(timequant, chartData?.[0]?.data?.length);

    const { min: minY, max: maxY, avg: avgY } = calculatedValues;

    return !chartData ? (
        <Skeleton />
    ) : (
        <S.Wrapper>
            <ResponsiveLine
                margin={{ top: 4 }}
                isInteractive={isInteractive}
                areaOpacity={1}
                axisBottom={
                    withAxisBottom && isInteractive
                        ? {
                              tickSize: 0,
                              tickPadding: -20,
                              tickValues,
                              format: timeFormat,
                          }
                        : null
                }
                axisLeft={null}
                colors={color ? [rgbToHex(color)] : DEFAULT_COLORS}
                fill={[{ match: '*', id: `transparent` }]}
                data={chartData}
                defs={[...defs, ...DEFAULT_DEFS]}
                enableArea
                enableSlices="x"
                curve={curve}
                yScale={{ type: 'linear', min: minValue }}
                layers={[
                    'areas',
                    AreaLayer,
                    ({ data, series, lineGenerator, xScale, yScale }) => (
                        <CustomLine
                            chartData={data}
                            lineGenerator={lineGenerator}
                            series={series}
                            maxY={maxY}
                            minY={minY}
                            xScale={xScale as Scale<unknown, number>}
                            yScale={yScale as Scale<unknown, number>}
                        />
                    ),
                    ({ innerWidth, innerHeight, lineGenerator, points, series, xScale, yScale }) => (
                        <CustomRangeLayer
                            innerWidth={innerWidth}
                            innerHeight={innerHeight}
                            lineGenerator={lineGenerator}
                            points={points}
                            series={series}
                            xScale={xScale as Scale<unknown, number>}
                            yScale={yScale as Scale<unknown, number>}
                            minY={config?.valueFrom ?? null}
                            maxY={config?.valueTo ?? null}
                            avgY={avgY}
                        />
                    ),
                    'crosshair',
                    'axes',
                    'slices',
                ]}
                sliceTooltip={(props) => (
                    <Tooltip {...props} config={config} postfix={postfix} minY={minY} maxY={maxY} />
                )}
                theme={createFlatChartTheme(theme)}
                xScale={{ type: 'time' }}
            />
        </S.Wrapper>
    );
};

export default Graph;
