export const takeId = <T, K>(array: T[], idKey: keyof T): K[] => {
    if (!array || !array?.length) return [];

    return array.map((item) => item[idKey] as K);
};
