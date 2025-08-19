import { TFunction } from 'i18next';
import { IRouteMeta } from './types';
import { formatDuration } from './helpers/format-duration';

export class RouteInfoControl implements mapboxgl.IControl {
    private container: HTMLDivElement;
    private meta: IRouteMeta;
    private t: TFunction<'uiKit', undefined>;

    constructor(meta: IRouteMeta, t: TFunction<'uiKit', undefined>) {
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

    update(meta: IRouteMeta) {
        this.meta = meta;
        let html = '';

        if (meta.type === 'planned' || !meta.isRouteActive) {
            html = `
                <div class="route-info-label">${this.t('Estimated time')}</div>
                <div class="route-info-time">${formatDuration(meta.estimatedDuration!)}</div>
                <div class="route-info-details">
                    ${meta.distance?.toFixed(0)} ${this.t('km')} &middot; ${meta.arrivalTime}
                </div>
            `;
        } else if (meta.type === 'active') {
            html = `
                <div class="route-info-label">${this.t('Estimated time to stop')} ${meta.nextStopLabel}</div>
                <div class="route-info-time">${formatDuration(meta.estimatedDuration!)}</div>
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
