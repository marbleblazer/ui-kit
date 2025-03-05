import {
    area,
    curveLinear,
    curveBasis,
    curveCardinal,
    curveCatmullRom,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3-shape';
import { FC } from 'react';
import { ComputedDatum, CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';

const curveMap = {
    basis: curveBasis,
    cardinal: curveCardinal,
    catmullRom: curveCatmullRom,
    linear: curveLinear,
    monotoneX: curveMonotoneX,
    monotoneY: curveMonotoneY,
    natural: curveNatural,
    step: curveStep,
    stepAfter: curveStepAfter,
    stepBefore: curveStepBefore,
};

interface IAreaLayerProps extends Pick<CustomLayerProps, 'series' | 'innerHeight' | 'curve' | 'colors'> {
    xScale: Scale<number, number>;
    yScale: Scale<number, number>;
    colors: string[];
}

export const AreaLayer: FC<IAreaLayerProps> = ({ series, xScale, yScale, innerHeight, curve, colors }) => {
    const areaGenerator = area<ComputedDatum>()
        .x((d) => xScale(d.data.x as number) as number)
        .y0((d) => {
            const value = typeof d.data.y === 'number' ? d.data.y : 0;

            return Math.min(innerHeight, yScale(value) as number);
        })
        .y1((d) => {
            const value = typeof d.data.y === 'number' ? d.data.y : 0;

            return Math.max(innerHeight, yScale(value) as number);
        })
        .curve(curveMap[curve as keyof typeof curveMap]);

    return (
        <>
            {series.map(({ id, data }) => (
                <g key={id}>
                    <path d={areaGenerator(data) ?? undefined} fill={`url(#flat-area-gradient-${colors[0]})`} />
                    <path
                        d={areaGenerator(data) ?? undefined}
                        fill={`url(#flat-lines-pattern-${colors[0]})`}
                        fillOpacity={0.4}
                    />
                    <path d={areaGenerator(data) ?? undefined} fill={`url(#flat-area-gradient-shadow)`} />
                </g>
            ))}
        </>
    );
};
