import { Theme as MuiTheme } from '@mui/material';
import { Theme as ChartTheme } from '@nivo/core';

export const DEFAULT_COLORS = ['#FF4D1499', '#5014FF99'];

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
            //   background: theme.palette.darkShades.primary,
            borderRadius: 4,
            //   border: `1px solid ${theme.palette.borders.primary}`,
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
                // textShadow: `${theme.palette.darkShades.primary} 0 0 5px`,
            },
        },
    },
});
