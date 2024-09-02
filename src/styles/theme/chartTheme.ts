import { Theme as MuiTheme } from '@mui/material';
import { Theme as ChartTheme } from '@nivo/core';
import { LegendProps } from '@nivo/legends';

import { RgbaColor } from '@/entities/common';
import { replaceRgbaOpacity } from '@/helpers/replaceRgbaOpacity';

export const DEFAULT_COLORS = ['#FF4D1499', '#5014FF99'];

export const DEFAULT_COLORS_HOVERED: { [key: string]: string[] } = {
  Received: ['#5014FF', '#FF4D1499'],
  Transmitted: ['#5014FF99', '#FF4D14'],
};

export const DEFAULT_DEFS = [
  {
    id: 'fillGradient',
    type: 'linearGradient',
    colors: [
      { offset: 0, color: 'inherit', opacity: 0.1 },
      { offset: 100, color: 'inherit', opacity: 0 },
    ],
  },
  {
    id: 'transparent',
    type: 'linearGradient',
    colors: [
      { offset: 0, color: 'inherit', opacity: 0 },
      { offset: 100, color: 'inherit', opacity: 0 },
    ],
  },
  {
    id: 'lines-pattern',
    type: 'patternLines',
    spacing: 5,
    rotation: 100,
    lineWidth: 1,
    background: 'transparent',
    color: '#FF4D1426',
  },
];

export const CHART_DEFS = [
  {
    id: 'fillGradient',
    type: 'linearGradient',
    colors: [
      { offset: 0, color: 'inherit', opacity: 0.6 },
      { offset: 100, color: 'inherit', opacity: 0 },
    ],
  },
  {
    id: 'hoverGradient',
    type: 'linearGradient',
    colors: [
      { offset: 0, color: 'inherit', opacity: 1 },
      { offset: 100, color: 'inherit', opacity: 0 },
    ],
  },
];

export const EMPTY_STATE_DEFS = [
  {
    id: 'empty-state-pattern',
    type: 'patternLines',
    spacing: 5,
    rotation: 108,
    lineWidth: 2,
    background: 'transparent',
    color: '#32353833',
  },
];

export const LEGENDS: LegendProps[] = [
  {
    anchor: 'bottom-left',
    direction: 'row',
    itemHeight: 10,
    itemWidth: 120,
    symbolShape: 'circle',
    symbolSize: 8,
    translateY: 54,
  },
];

export const createChartTheme = (theme: MuiTheme): ChartTheme => ({
  crosshair: {
    line: {
      stroke: theme.palette.text.primary,
      strokeDasharray: '0',
      strokeOpacity: 1,
    },
  },
  grid: {
    line: {
      opacity: 0.16,
      stroke: theme.palette.text.primary,
      strokeWidth: 1,
      strokeDasharray: 10,
    },
  },
  textColor: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  tooltip: {
    chip: {
      borderRadius: 0,
      height: 9,
      width: 9,
      border: `1px solid #fff`,
      marginRight: '0px',
      marginBottom: '2px',
    },
    table: {
      marginTop: '8px',
    },
    container: {
      background: '#fff',
      borderRadius: 0,
      fontSize: 12,
      lineHeight: '14.55px',
      color: '#000',
      fontFamily: theme.typography.fontFamily,
      padding: '8px',
    },
    tableCell: {
      color: '#000',
    },
    tableCellValue: {
      color: '#000',
      marginLeft: '0px',
      fontWeight: 400,
    },
  },
  legends: {
    text: {
      textTransform: 'uppercase',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: theme.typography.body1.fontFamily,
    },
  },
  axis: {
    ticks: {
      text: {
        fontSize: '9px',
        lineHeight: '11px',
      },
    },
  },
});

export const createFlatChartTheme = (theme: MuiTheme): ChartTheme => ({
  crosshair: {
    line: {
      stroke: '#EBEBEB',
      strokeDasharray: '3 3',
      strokeOpacity: 1,
    },
  },
  tooltip: {
    table: {
      marginTop: 0,
      padding: 0,
    },
    tableCell: {
      padding: 0,
    },
    container: {
      background: theme.palette.darkShades.primary,
      borderRadius: 4,
      border: `1px solid ${theme.palette.text.primary}1A`,
      fontFamily: theme.typography.fontFamily,
      padding: '4px 12px',
    },
  },
  axis: {
    ticks: {
      text: {
        fill: theme.palette.text.secondary,
        //  8px as was set in Figma is too small
        fontSize: '10px',
        shapeRendering: 'crispEdges',
        textShadow: `${theme.palette.darkShades.primary} 0 0 5px`,
      },
    },
  },
});

export const createBarTheme = (theme: MuiTheme): ChartTheme => ({
  crosshair: {
    line: {
      stroke: '#EBEBEB',
      strokeDasharray: '3 3',
      strokeOpacity: 1,
    },
  },
  tooltip: {
    table: {
      marginTop: '8px',
      padding: 0,
    },
    tableCell: {
      padding: '4px 0',
      color: replaceRgbaOpacity(theme.palette.text.primary as RgbaColor, 0.4),
    },
    tableCellValue: {
      color: replaceRgbaOpacity(theme.palette.text.primary as RgbaColor, 0.6),
      marginLeft: '16px',
    },
    container: {
      background: replaceRgbaOpacity(theme.palette.darkShades.primary as RgbaColor, 0.5),
      backdropFilter: 'blur(4px)',
      borderRadius: 12,
      border: `1px solid ${theme.palette.text.primary}1A`,
      fontFamily: theme.typography.fontFamily,
      padding: '8px 12px',
      fontSize: '12px',
      lineHeight: '14px',
      color: theme.palette.text.primary,
    },
    chip: {
      width: '8px',
      height: '8px',
      borderRadius: 1,
    },
  },
  legends: {
    text: {
      fontSize: '12px',
    },
  },
  axis: {
    ticks: {
      text: {
        fill: theme.palette.text.secondary,
        //  8px as was set in Figma is too small
        fontSize: '10px',
        shapeRendering: 'crispEdges',
        textShadow: `${theme.palette.darkShades.primary} 0 0 5px`,
      },
    },
  },
});
