/* eslint-disable @typescript-eslint/ban-ts-comment */

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

export const AreaLayer = ({ series, xScale, yScale, innerHeight, curve, colors }: any) => {
  const areaGenerator = area()
    //@ts-ignore
    .x((d) => xScale(d.data.x))
    .y0((d) => {
      //@ts-ignore
      const value = typeof d.data.y === 'number' ? d.data.y : 0;

      return Math.min(innerHeight, yScale(value));
    })
    .y1((d) => {
      //@ts-ignore
      const value = typeof d.data.y === 'number' ? d.data.y : 0;

      return Math.max(innerHeight, yScale(value));
    })
    .curve(curveMap[curve as keyof typeof curveMap]);

  return (
    <>
      {series.map(({ id, data }: any) => (
        <g key={id}>
          <path
            // @ts-ignore
            d={areaGenerator(data)}
            fill={`url(#flat-area-gradient-${colors[0]})`}
          />
          <path
            // @ts-ignore
            d={areaGenerator(data)}
            fill={`url(#flat-lines-pattern-${colors[0]})`}
            fillOpacity={0.4}
          />
          <path
            // @ts-ignore
            d={areaGenerator(data)}
            fill={`url(#flat-area-gradient-shadow)`}
          />
        </g>
      ))}
    </>
  );
};
