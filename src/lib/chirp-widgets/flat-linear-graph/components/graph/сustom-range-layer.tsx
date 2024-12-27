import { useTheme } from '@mui/material';
import { CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';
import * as React from 'react';

type Props = Pick<CustomLayerProps, 'innerWidth' | 'innerHeight' | 'lineGenerator' | 'points' | 'series'> & {
    chartData: CustomLayerProps['data'];
    xScale: Scale<unknown, number>;
    yScale: Scale<unknown, number>;
    maxY: number | null;
    minY: number | null;
    avgY: number | null;
};

export const CustomRangeLayer: React.FC<Props> = ({
    chartData,
    innerWidth,
    innerHeight,
    lineGenerator,
    points,
    series,
    xScale,
    yScale,
    avgY,
    minY,
    maxY,
}) => {
    const { palette } = useTheme();
    const rangeColor = palette.additionalColors.mutedGreen;
    const avgColor = palette.additionalColors.air;

    const yMin = (yScale as Scale<number, number>)(Number(minY)) || 0;
    const yMax = (yScale as Scale<number, number>)(Number(maxY)) || 0;
    const yAvg = (yScale as Scale<number, number>)(Number(avgY)) || 0;

    const yPoints = React.useMemo(() => points.map((point) => point.y), [points]);

    const graphValues = React.useMemo(() => chartData?.[0]?.data?.map((d) => Number(d.y)) ?? [], [chartData]);
    const minGraphValue = React.useMemo(() => Math.min(...graphValues), [graphValues]);
    const maxGraphValue = React.useMemo(() => Math.max(...graphValues), [graphValues]);

    const rectCoords = (() => {
        const topY = Math.min(yMin, yMax);
        const height = Math.abs(yMin - yMax);

        if (isNaN(height) || isNaN(topY) || minY === maxY || (minY !== null && minY > maxGraphValue)) {
            return null;
        }

        if (minGraphValue === maxGraphValue) {
            const graphValue = minGraphValue;

            if (minY === graphValue) {
                return { y: 0, height: yMin };
            }

            if (maxY === graphValue) {
                return { y: topY, height: innerHeight - topY };
            }

            if ((minY === null || minY < graphValue) && (maxY === null || maxY > graphValue)) {
                return { y: 0, height: innerHeight };
            }
        }

        if (minY !== null && maxY === null) {
            return { y: 0, height: yMin };
        }

        return { y: topY, height };
    })();

    const lines = React.useMemo(
        () =>
            series.map(({ id, data }) => {
                const line = lineGenerator(
                    data.map((d) => ({
                        x: (xScale as Scale<number, number>)(Number(d.data.x)),
                        y: (yScale as Scale<number, number>)(Number(d.data.y)),
                    })) as Array<{ x: number; y: number }>,
                );

                return { id, line };
            }),
        [series, lineGenerator, xScale, yScale],
    );

    return (
        <>
            {maxY !== null && (minGraphValue !== maxGraphValue || maxY === minGraphValue) && (
                <line x1={0} x2={innerWidth} y1={yMax} y2={yMax} stroke={rangeColor} strokeWidth={2} />
            )}
            {rectCoords !== null && (
                <rect
                    x={0}
                    y={rectCoords.y}
                    width={innerWidth}
                    height={Math.min(rectCoords.height, innerHeight - rectCoords.y)}
                    fill="url(#flat-lines-pattern-range)"
                />
            )}
            {minY !== null && (minGraphValue !== maxGraphValue || minY === minGraphValue) && (
                <line x1={0} x2={innerWidth} y1={yMin} y2={yMin} stroke={rangeColor} strokeWidth={2} />
            )}
            {avgY !== null && !isNaN(yAvg) && (
                <line
                    x1={0}
                    x2={innerWidth}
                    y1={yAvg}
                    y2={yAvg}
                    stroke={avgColor}
                    strokeWidth={0.5}
                    strokeDasharray="3 3"
                />
            )}
            {minY !== null &&
                Math.max(...yPoints) > yMin &&
                lines.map(({ id, line }) => (
                    <React.Fragment key={`${id}-min`}>
                        <path
                            d={line ?? undefined}
                            fill="url(#flat-lines-pattern-min)"
                            fillOpacity={0.2}
                            stroke={palette.widgets.values.min}
                            style={{ strokeWidth: 1 }}
                            clipPath={`url(#cut-off-bottom-${id})`}
                        />
                        <defs>
                            <clipPath id={`cut-off-bottom-${id}`}>
                                <rect x={0} y={yMin} width={innerWidth} height={innerHeight - yMin} />
                            </clipPath>
                        </defs>
                    </React.Fragment>
                ))}
            {maxY !== null &&
                Math.min(...yPoints) < yMax &&
                lines.map(({ id, line }) => (
                    <React.Fragment key={`${id}-max`}>
                        <path
                            d={line ?? undefined}
                            fill="url(#flat-lines-pattern-max)"
                            fillOpacity={0.2}
                            stroke={palette.widgets.values.max}
                            style={{ strokeWidth: 1 }}
                            clipPath={`url(#cut-off-top-${id})`}
                        />
                        <defs>
                            <clipPath id={`cut-off-top-${id}`}>
                                <rect x={0} y={0} width={innerWidth} height={yMax} />
                            </clipPath>
                        </defs>
                    </React.Fragment>
                ))}
        </>
    );
};
