import { Palette } from '@mui/material';

export const getFlatChartDefs = (color: string, shadowColor: string, palette: Palette) => {
    return [
        {
            id: `flat-lines-pattern-${color}`,
            type: 'patternLines',
            spacing: 6,
            rotation: 108,
            lineWidth: 1,
            background: 'transparent',
            color,
        },
        {
            id: 'flat-lines-pattern-min',
            type: 'patternLines',
            spacing: 6,
            rotation: 108,
            lineWidth: 1,
            background: 'transparent',
            color: palette.additionalColors.blue,
        },
        {
            id: 'flat-lines-pattern-max',
            type: 'patternLines',
            spacing: 6,
            rotation: 108,
            lineWidth: 1,
            background: 'transparent',
            color: '#FFA825',
        },
        {
            id: 'flat-lines-pattern-range',
            type: 'patternLines',
            spacing: 6,
            rotation: 108,
            lineWidth: 1,
            background: 'transparent',
            color: palette.additionalColors.mutedGreen,
        },
        {
            id: `flat-area-gradient-shadow`,
            type: 'linearGradient',
            colors: [
                { offset: 0, color: shadowColor, opacity: 0 },
                { offset: 100, color: shadowColor, opacity: 1 },
            ],
        },
        {
            id: `flat-area-gradient-${color}`,
            type: 'linearGradient',
            colors: [
                { offset: 0, color, opacity: 0.2 },
                { offset: 100, color, opacity: 0 },
            ],
        },
    ];
};
