import { RouteMeta } from './types';
import { TFunction } from 'i18next';

export class RouteInfoControl implements mapboxgl.IControl {
    private container: HTMLDivElement;
    private meta: RouteMeta;
    private t: TFunction<'uiKit', undefined>;

    constructor(meta: RouteMeta, t: TFunction<'uiKit', undefined>) {
        this.meta = meta;
        this.t = t;
        this.container = document.createElement('div');
        this.container.className = 'route-info-control';
    }

    onAdd() {
        this.update(this.meta);

        return this.container;
    }

    onRemove() {
        this.container.remove();
    }

    update(meta: RouteMeta) {
        this.meta = meta;
        let html = '';

        if (meta.type === 'planned' || !meta.isRouteActive) {
            html = `
                <div class="route-info-label">${this.t('Estimated time')}</div>
                <div class="route-info-time">${formatDuration(meta.estimatedDuration!, this.t)}</div>
                <div class="route-info-details">
                    ${meta.distance?.toFixed(0)} ${this.t('km')} &middot; ${meta.arrivalTime}
                </div>
            `;
        } else if (meta.type === 'active') {
            html = `
                <div class="route-info-label">${this.t('Estimated time to stop')} ${meta.nextStopLabel}</div>
                <div class="route-info-time">${formatDuration(meta.estimatedDuration!, this.t)}</div>
                <div class="route-info-details">
                    ${meta.distance?.toFixed(0)} ${this.t('km')} &middot; ${meta.arrivalTime}
                </div>
            `;
        } else {
            html = `<div class="route-info-label">${this.t('Route completed')}</div>`;
        }
        this.container.innerHTML = html;
    }
}

function formatDuration(totalSeconds: number, t: TFunction<'uiKit', undefined>): string {
    if (totalSeconds < 0) totalSeconds = 0;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const parts = [];

    if (days > 0) {
        parts.push(`${days}${t('d')}`);
    }

    if (hours > 0 || days > 0) {
        parts.push(`${hours}${t('h')}`);
    }

    if (minutes > 0 || (days === 0 && hours === 0)) {
        parts.push(`${minutes}${t('widgets.min')}`);
    }

    return parts.join(' ');
}
