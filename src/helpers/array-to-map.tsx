export const arrayToMap = <T extends Record<K, string | number>, K extends keyof T>(arr: T[], key: K) =>
    arr.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {} as Record<T[K], T>);
