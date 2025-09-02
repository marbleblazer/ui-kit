import { Theme } from '@mui/material';

export const estimateLabelWidth = (text: string, fontSize = 14): number => text.length * fontSize * 0.55 + 30;

export const dynamicTimeLabelSvg = (color: string, text: string, flip: boolean, theme: Theme, scale = 2) => {
    const { fontFamily, fontSize, fontWeight, letterSpacing } = theme.typography.body1;

    const safeFontFamily = fontFamily?.replace(/"/g, '');
    const size = Number(fontSize);
    const letterSpacingValue =
        typeof letterSpacing === 'number'
            ? `${letterSpacing * scale}px`
            : letterSpacing !== undefined
              ? letterSpacing
              : '0';

    // Базовые размеры
    const baseTextWidth = estimateLabelWidth(text, size);
    const baseHeight = 30;

    // Масштабированные размеры
    const textWidth = baseTextWidth * scale;
    const height = baseHeight * scale;
    const scaledFontSize = size * scale;
    const mainBodyWidth = (baseTextWidth - 9) * scale;
    const textX = flip ? 9 * scale + mainBodyWidth / 2 : mainBodyWidth / 2;

    // Масштабируем все координаты в path
    const pathScale = (value: number) => value * scale;

    return `<svg width="${textWidth}" height="${height}" viewBox="0 0 ${textWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
        <g transform="${flip ? `scale(-1,1) translate(-${textWidth},0)` : ''}">
            <path d="M${textWidth - pathScale(9)} ${pathScale(4)}C${textWidth - pathScale(9)} ${pathScale(1.8)} ${textWidth - pathScale(11)} 0 ${textWidth - pathScale(13)} 0H${pathScale(4)}C${pathScale(1.8)} 0 0 ${pathScale(1.8)} 0 ${pathScale(4)}V${pathScale(26)}C0 ${pathScale(28.2)} ${pathScale(1.8)} ${pathScale(30)} ${pathScale(4)} ${pathScale(30)}H${textWidth - pathScale(9)}H${textWidth}L${textWidth - pathScale(7)} ${pathScale(23.1)}C${textWidth - pathScale(8)} ${pathScale(22.3)} ${textWidth - pathScale(9)} ${pathScale(21.3)} ${textWidth - pathScale(9)} ${pathScale(20.1)}V${pathScale(4)}Z" fill="${color}" shape-rendering="crispEdges"/>
        </g>
        <text 
            x="${textX}" y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="${theme.palette.base.color1}"
            font-family="${safeFontFamily}" 
            font-size="${scaledFontSize}" 
            font-weight="${fontWeight}" 
            letter-spacing="${letterSpacingValue}"
            pointer-events="none"
            text-rendering="optimizeLegibility"
        >
            ${text}
        </text>
    </svg>`;
};
