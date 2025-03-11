export const metersToMiles = (value: number, isSquare?: boolean) => {
    if (isSquare) return value * Math.pow(0.0006213712, 2);

    return value * 0.0006213712;
};

export const milesToFeet = (value: number) => {
    return value * 5280;
};

/**
 * @param {number} value The value in miles.
 * @param {boolean} isSquare Whether the value is a square area.
 * @returns {string} The formatted string or undefined if isSquare is true.
 */
export const formatedMilesFeetValue = (value: number, isSquare: boolean): string => {
    if (isSquare) {
        return `${Math.round(value)} mi2, (${Math.round(milesToFeet(value))} ft2)`;
    }

    return `${Math.round(value)} mi, (${Math.round(milesToFeet(value))} ft)`;
};
