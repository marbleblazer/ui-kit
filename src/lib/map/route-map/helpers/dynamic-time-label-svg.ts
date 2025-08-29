import { Theme } from '@mui/material/styles';

export const estimateLabelWidth = (text: string, fontSize = 14): number => text.length * fontSize * 0.55 + 30;

export const dynamicTimeLabelSvg = (color: string, text: string, flip: boolean, theme: Theme) => {
    const { fontFamily, fontSize, fontWeight, letterSpacing } = theme.typography.body1;

    const safeFontFamily = fontFamily?.replace(/"/g, '');
    const size = Number(fontSize);
    const textWidth = estimateLabelWidth(text, size);
    const mainBodyWidth = textWidth - 9;
    const textX = flip ? 9 + mainBodyWidth / 2 : mainBodyWidth / 2;

    return `<svg width="${textWidth}" height="30" viewBox="0 0 ${textWidth} 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="${flip ? `scale(-1,1) translate(-${textWidth},0)` : ''}">
            <path d="M${textWidth - 9} 4C${textWidth - 9} 1.8 ${textWidth - 11} 0 ${textWidth - 13} 0H4C1.8 0 0 1.8 0 4V26C0 28.2 1.8 30 4 30H${textWidth - 9}H${textWidth}L${textWidth - 7} 23.1C${textWidth - 8} 22.3 ${textWidth - 9} 21.3 ${textWidth - 9} 20.1V4Z" fill="${color}"/>
        </g>
        <text 
            x="${textX}" y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="#ffffff" 
            font-family="${safeFontFamily}" 
            font-size="${size}" 
            font-weight="${fontWeight}" 
            letter-spacing="${letterSpacing}"
            pointer-events="none"
        >
            ${text}
        </text>
    </svg>`;
};
