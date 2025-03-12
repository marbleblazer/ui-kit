const DAYS_IN_YEAR = 365;

const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

type SetCookieArgs = {
    name: string;
    value: string;
    days?: number;
    isRootDomain?: boolean;
    path?: string;
};

export const setCookie = ({
    name,
    value,
    days = DAYS_IN_YEAR,
    isRootDomain = false,
    path = '; path=/',
}: SetCookieArgs) => {
    let expires = '';
    let domain = '';

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * MILLISECONDS_PER_DAY);
        expires = `; expires=${date.toUTCString()}`;
    }

    if (isRootDomain) {
        const rootDomain = window.location.hostname.split('.').slice(-2).join('.');
        domain = `; domain=${rootDomain}`;
    }

    document.cookie = `${name}=${encodeURIComponent(value)}${path}${expires}${domain}`;
};
