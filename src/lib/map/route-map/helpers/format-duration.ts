import i18n from '@chirp/ui/locales/i18n';

interface IFormatRoutesDuration {
    totalSeconds: number;
    withSpace?: boolean;
}

export const formatDuration = ({ totalSeconds, withSpace = false }: IFormatRoutesDuration): string => {
    if (totalSeconds < 0) totalSeconds = 0;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const sep = withSpace ? ' ' : '';

    const parts: string[] = [];

    if (days > 0) {
        parts.push(`${days}${sep}${i18n.t('d')}`);
    }

    if (hours > 0 || days > 0) {
        parts.push(`${hours}${sep}${i18n.t('h')}`);
    }

    if (minutes > 0 || (days === 0 && hours === 0)) {
        parts.push(`${minutes}${sep}${i18n.t('uiKit:widgets.min')}`);
    }

    return parts.join(' ');
};
