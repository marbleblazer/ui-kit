import { Theme } from '@mui/material';

export const estimateLabelWidth = (text: string, fontSize = 14): number => text.length * fontSize * 0.55 + 30;

export const dynamicTimeLabelSvg = async (
    color: string,
    text: string,
    flip: boolean,
    theme: Theme,
    scale = 2,
): Promise<string> => {
    const { fontFamily, fontSize, fontWeight, letterSpacing } = theme.typography.body1;

    const size = Number(fontSize);

    const baseTextWidth = estimateLabelWidth(text, size);
    const baseHeight = 30;

    const textWidth = baseTextWidth * scale;
    const height = baseHeight * scale;
    const scaledFontSize = size * scale;
    const mainBodyWidth = (baseTextWidth - 9) * scale;
    const textX = flip ? 9 * scale + mainBodyWidth / 2 : mainBodyWidth / 2;

    // Canvas для текста
    const canvas = document.createElement('canvas');
    canvas.width = textWidth;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, textWidth, height);

    ctx.fillStyle = theme.palette.base.color1;
    ctx.font = `${fontWeight} ${scaledFontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (letterSpacing && typeof letterSpacing === 'number') {
        const letters = text.split('');
        const metrics = ctx.measureText(text);
        const totalWidth = metrics.width;
        const letterSpacingPx = letterSpacing * scale;
        const totalSpacing = letterSpacingPx * (letters.length - 1);
        let currentX = textX - (totalWidth + totalSpacing) / 2;

        letters.forEach((letter) => {
            const letterMetrics = ctx.measureText(letter);
            ctx.fillText(letter, currentX + letterMetrics.width / 2, height / 2);
            currentX += letterMetrics.width + letterSpacingPx;
        });
    } else {
        ctx.fillText(text, textX, height / 2);
    }

    const textDataUrl = canvas.toDataURL('image/png');

    const pathScale = (value: number) => value * scale;

    return `<svg width="${textWidth}" height="${height}" viewBox="0 0 ${textWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
        <g transform="${flip ? `scale(-1,1) translate(-${textWidth},0)` : ''}">
            <path d="M${textWidth - pathScale(9)} ${pathScale(4)}C${textWidth - pathScale(9)} ${pathScale(1.8)} ${textWidth - pathScale(11)} 0 ${textWidth - pathScale(13)} 0H${pathScale(4)}C${pathScale(1.8)} 0 0 ${pathScale(1.8)} 0 ${pathScale(4)}V${pathScale(26)}C0 ${pathScale(28.2)} ${pathScale(1.8)} ${pathScale(30)} ${pathScale(4)} ${pathScale(30)}H${textWidth - pathScale(9)}H${textWidth}L${textWidth - pathScale(7)} ${pathScale(23.1)}C${textWidth - pathScale(8)} ${pathScale(22.3)} ${textWidth - pathScale(9)} ${pathScale(21.3)} ${textWidth - pathScale(9)} ${pathScale(20.1)}V${pathScale(4)}Z" fill="${color}" shape-rendering="crispEdges"/>
        </g>
        <image 
            href="${textDataUrl}" 
            x="0" 
            y="0" 
            width="${textWidth}" 
            height="${height}"
            preserveAspectRatio="xMidYMid meet"
        />
    </svg>`;
};
