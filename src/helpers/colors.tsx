export const hex2rgba = (str: string) => {
    var num = parseInt(str.slice(1), 16);
    if (str.length > 7 && str.length !== 3)
        return [(num >> 24) & 255, (num >> 16) & 255, (num >> 8) & 255, Number(((num & 255) / 255).toFixed(2))];
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255, 1];
};
