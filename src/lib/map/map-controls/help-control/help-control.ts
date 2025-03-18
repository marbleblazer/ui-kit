import { Palette } from '@mui/material/styles';
import { locationSvg, trackerSvg } from './help-control-svg';
import { t } from 'i18next';

/** Control кнопки с вопросом на карте */
export class HelpControl {
    container: HTMLDivElement | undefined;
    map: mapboxgl.Map | undefined;
    palette: Palette;
    locationItem: HTMLDivElement | undefined;
    trackerItem: HTMLDivElement | undefined;

    private handleMouseEnter: () => void;
    private handleMouseLeave: () => void;

    constructor(palette: Palette) {
        this.palette = palette;

        this.handleMouseEnter = this.showMenu.bind(this);
        this.handleMouseLeave = this.hideMenu.bind(this);
    }

    private showMenu() {
        if (this.container) {
            const menu = this.container.querySelector('.help-menu') as HTMLDivElement;

            if (menu) menu.style.display = 'block';
        }
    }

    private hideMenu() {
        if (this.container) {
            const menu = this.container.querySelector('.help-menu') as HTMLDivElement;

            if (menu) menu.style.display = 'none';
        }
    }

    updatePalette(palette: Palette) {
        this.palette = palette;

        // Перерисовать иконки
        if (this.locationItem) {
            this.locationItem.innerHTML = locationSvg(this.palette);
            this.locationItem.insertAdjacentText('beforeend', t('uiKit:map.Your location'));
        }

        if (this.trackerItem) {
            this.trackerItem.innerHTML = trackerSvg(this.palette);
            this.trackerItem.insertAdjacentText('beforeend', t('uiKit:map.GPS tracker'));
        }
    }

    onAdd(map: mapboxgl.Map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        this.container.style.position = 'relative';
        this.container.style.cursor = 'pointer';

        const button = document.createElement('button');
        const span = document.createElement('span');
        span.className = 'help-control';

        button.appendChild(span);
        this.container.appendChild(button);

        const menu = document.createElement('div');
        menu.className = 'help-menu';

        this.locationItem = document.createElement('div');
        this.locationItem.className = 'help-menu-item';
        this.locationItem.innerHTML = locationSvg(this.palette);
        this.locationItem.insertAdjacentText('beforeend', t('uiKit:map.Your location'));
        menu.appendChild(this.locationItem);

        const divider = document.createElement('div');
        divider.className = 'help-menu-divider';
        menu.appendChild(divider);

        this.trackerItem = document.createElement('div');
        this.trackerItem.className = 'help-menu-item';
        this.trackerItem.innerHTML = trackerSvg(this.palette);
        this.trackerItem.insertAdjacentText('beforeend', t('uiKit:map.GPS tracker'));
        menu.appendChild(this.trackerItem);

        this.container.appendChild(menu);

        button.addEventListener('mouseenter', this.handleMouseEnter);
        this.container.addEventListener('mouseleave', this.handleMouseLeave);

        return this.container;
    }

    onRemove() {
        if (this.container) {
            const button = this.container.querySelector('button');

            if (button) {
                button.removeEventListener('mouseenter', this.handleMouseEnter);
            }
            this.container.removeEventListener('mouseleave', this.handleMouseLeave);

            if (this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        }

        this.map = undefined;
        this.container = undefined;
        this.locationItem = undefined;
        this.trackerItem = undefined;
    }
}
