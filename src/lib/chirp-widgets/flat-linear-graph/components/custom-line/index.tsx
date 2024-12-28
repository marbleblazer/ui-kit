import { useTheme } from '@mui/material';
import { CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';
import React from 'react';

type Range = {
    start: Date;
    end: Date;
};

type Props = Pick<CustomLayerProps, 'series' | 'lineGenerator'> & {
    chartData: CustomLayerProps['data'];
    minY: number | null;
    maxY: number | null;
    xScale: Scale<unknown, number>;
    yScale: Scale<unknown, number>;
};

export const CustomLine: React.FC<Props> = ({
    chartData: chartDataArr,
    series,
    lineGenerator,
    minY,
    maxY,
    xScale,
    yScale,
}) => {
    const { palette } = useTheme();
    const chartData = chartDataArr?.[0]?.data;

    const findRanges = (indices: number[], otherIndices: number[]) => {
        const ranges: Range[] = [];

        for (let i = 0; i < indices.length; i++) {
            const startDateValue = chartData[indices[i]]?.x;
            const start = startDateValue && new Date(startDateValue);

            const endDateValue = chartData[indices[i + 1]]?.x;
            const end =
                i < indices.length - 1 && indices[i] + 1 === indices[i + 1] && endDateValue
                    ? new Date(endDateValue)
                    : start;

            const overlap = otherIndices.some((index) => index >= indices[i] && index <= indices[i + 1]);

            if (!overlap && start && end) {
                ranges.push({ start, end });
            }
        }

        return ranges;
    };

    const minYIndices = chartData.map((d, index) => (d.y === minY ? index : -1)).filter((i) => i !== -1);
    const maxYIndices = chartData.map((d, index) => (d.y === maxY ? index : -1)).filter((i) => i !== -1);

    const minYRanges = findRanges(minYIndices, maxYIndices);
    const maxYRanges = findRanges(maxYIndices, minYIndices);

    const renderBorder = (range: Range, type: 'min' | 'max') => {
        const value = type === 'min' ? yScale(Number(minY)) : yScale(Number(maxY));
        const color = type === 'min' ? palette.additionalColors.blue : palette.alerts.alert;

        return range.start.getTime() === range.end.getTime() ? (
            <circle
                key={`${type}Y-${range.start}`}
                cx={xScale(range.start)}
                cy={value}
                r={4}
                fill={color}
                style={{ pointerEvents: 'none' }}
            />
        ) : (
            <line
                key={`${type}Y-${range.start}`}
                x1={xScale(range.start)}
                x2={xScale(range.end)}
                y1={value}
                y2={value}
                stroke={color}
                strokeWidth={2}
                style={{ pointerEvents: 'none' }}
            />
        );
    };

    return (
        <>
            {minYRanges.map((range) => renderBorder(range, 'min'))}
            {maxYRanges.map((range) => renderBorder(range, 'max'))}
            {series.map(({ id, data, color }) => (
                <path
                    key={id}
                    d={
                        lineGenerator(
                            data.map((d) => ({
                                x: xScale(Number(d.data.x)),
                                y: yScale(Number(d.data.y)),
                            })) as Iterable<{ x: number; y: number }>,
                        ) ?? undefined
                    }
                    fill="none"
                    stroke={color}
                    style={{ strokeWidth: 1 }}
                />
            ))}
        </>
    );
};
