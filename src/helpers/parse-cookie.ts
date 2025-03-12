type CookieObject = {
    [key: string]: string;
};

export const parseCookie = (cookie: string) => {
    if (!cookie) return {};

    return cookie
        .split(';')
        .map((v) => v.split('='))
        .reduce((acc: CookieObject, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());

            return acc;
        }, {});
};
