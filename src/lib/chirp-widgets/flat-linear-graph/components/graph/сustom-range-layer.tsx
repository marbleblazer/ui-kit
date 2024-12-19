import { useTheme } from '@mui/material';
import { CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';
import React, { useMemo } from 'react';

type Props = Pick<CustomLayerProps, 'innerWidth' | 'innerHeight' | 'lineGenerator' | 'points' | 'series'> & {
    xScale: Scale<number, number>;
    yScale: Scale<number, number>;
    maxY: number | null;
    minY: number | null;
    avgY: number | null;
};

// TODO - add light theme
export const CustomRangeLayer: React.FC<Props> = ({
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
    const rangeColor = palette.base.color9;
    const avgColor = palette.base.color11;
    // const rangeColor = palette.additionalColors.mutedGreen;
    // const avgColor = palette.additionalColors.air;

    const yMin = yScale(Number(minY)) || 0;
    const yMax = yScale(Number(maxY)) || 0;
    const yAvg = yScale(Number(avgY));

    const topY = Math.min(yMin, yMax);
    const height = Math.abs(yMin - yMax);

    const yPoints = useMemo(() => points.map((point) => point.y), [points]);

    const lines = useMemo(
        () =>
            series.map(({ id, data }) => {
                const line = lineGenerator(
                    data.map((d) => ({
                        x: xScale(Number(d.data.x)),
                        y: yScale(Number(d.data.y)),
                    })) as Iterable<{ x: number; y: number }[]>,
                );

                return { id, line };
            }),
        [series, lineGenerator, xScale, yScale],
    );

    return (
        <>
            <line x1={0} x2={innerWidth} y1={yMax} y2={yMax} stroke={rangeColor} strokeWidth={2} />
            {!isNaN(height) && !isNaN(topY) && topY >= 0 && (
                <rect x={0} y={topY} width={innerWidth} height={height} fill="url(#flat-lines-pattern-range)" />
            )}
            <line x1={0} x2={innerWidth} y1={yMin} y2={yMin} stroke={rangeColor} strokeWidth={2} />
            {yAvg !== undefined && !isNaN(yAvg) && (
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
                            // stroke={palette.additionalColors.blue}
                            stroke={palette.base.color12}
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
                            stroke={palette.base.color7}
                            //   stroke={palette.alerts.alert}
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
