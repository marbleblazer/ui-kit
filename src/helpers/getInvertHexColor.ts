export const getInvertHexColor = (hex: string): string => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const r: string = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
    const g: string = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
    const b: string = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

    return `#${r.padStart(2, '0')}${g.padStart(2, '0')}${b.padStart(2, '0')}`;
};
