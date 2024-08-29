export const replaceRgbaOpacity = (color: string, newOpacity: number): string => {
    if (newOpacity < 0 || newOpacity > 1) {
        return color;
    }

    const rgbaPattern = /rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*([\d.]+)\)/;
    const match = color.match(rgbaPattern);

    if (!match) return color;

    return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${newOpacity.toFixed(2)})`;
};
