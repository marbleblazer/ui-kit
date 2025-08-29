import { TFunction } from 'i18next';
import { IRouteMeta } from './types';
import { formatDuration } from './helpers/format-duration';
import { Theme } from '@mui/material/styles';

export class RouteInfoControl implements mapboxgl.IControl {
    private container: HTMLDivElement;
    private t: TFunction<'uiKit', undefined>;

    constructor(t: TFunction<'uiKit', undefined>) {
        this.t = t;
        this.container = document.createElement('div');
    }

    onAdd() {
        return this.container;
    }

    onRemove() {
        this.container.remove();
    }

    private applyContainerStyles(theme: Theme) {
        Object.assign(this.container.style, {
            display: 'flex',
            flexDirection: 'column',
            margin: '10px',
            gap: '6px',
            position: 'absolute',
            maxWidth: '300px',
            minWidth: '177px',
            height: '88px',
            bottom: '0px',
            zIndex: '2',
            background: theme.palette.background.background2,
            padding: '12px',
            borderRadius: '8px',
            border: `1px solid ${theme.palette.border.border3}`,
            boxShadow: `0 4px 32px ${theme.palette.border.border4}`,
        });
    }

    private createLabel(text: string, theme: Theme) {
        const div = document.createElement('div');
        div.textContent = text;
        Object.assign(div.style, {
            width: 'max-content',
            color: theme.palette.text.search,
            ...theme.typography.caption12,
        });

        return div;
    }

    private createTime(text: string, theme: Theme) {
        const div = document.createElement('div');
        div.textContent = text;
        Object.assign(div.style, {
            color: theme.palette.base.color9,
            margin: '0',
            ...theme.typography.subtitle1,
            fontWeight: '600',
            fontSize: theme.typography.subtitle1.fontSize + 'px',
        });

        return div;
    }

    update(meta: IRouteMeta, theme: Theme) {
        this.container.innerHTML = '';

        this.applyContainerStyles(theme);

        if (meta.type !== 'planned' && meta.type !== 'active' && meta.isRouteActive) {
            this.container.appendChild(this.createLabel(this.t('Route completed'), theme));

            return;
        }

        let timeLabel = '';

        if (meta.type === 'planned' || !meta.isRouteActive) {
            timeLabel = this.t('Estimated time');
        } else if (meta.type === 'active') {
            timeLabel = `${this.t('Estimated time to stop')} ${meta.nextStopLabel}`;
        }

        this.container.appendChild(this.createLabel(timeLabel, theme));
        this.container.appendChild(this.createTime(formatDuration({ totalSeconds: meta.estimatedDuration! }), theme));
        this.container.appendChild(
            this.createLabel(`${meta.distance?.toFixed(0)} ${this.t('km')} · ${meta.arrivalTime}`, theme),
        );
    }
}
