import { Theme } from '@mui/material';
import { locationSvg, trackerSvg } from './help-control-svg';

/** Control кнопки с вопросом на карте */
export class HelpControl {
    container: HTMLDivElement | undefined;
    map: mapboxgl.Map | undefined;
    theme: Theme;

    constructor(theme: Theme) {
        this.theme = theme;
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

        const locationItem = document.createElement('div');
        locationItem.className = 'help-menu-item';
        locationItem.innerHTML = locationSvg(this.theme.palette);
        locationItem.insertAdjacentText('beforeend', 'Your location');
        menu.appendChild(locationItem);

        const divider = document.createElement('div');
        divider.className = 'help-menu-divider';
        menu.appendChild(divider);

        const trackerItem = document.createElement('div');
        trackerItem.className = 'help-menu-item';
        trackerItem.innerHTML = trackerSvg(this.theme.palette);
        trackerItem.insertAdjacentText('beforeend', 'GPS tracker');
        menu.appendChild(trackerItem);

        this.container.appendChild(menu);

        button.addEventListener('mouseenter', () => {
            menu.style.display = 'block';
        });

        this.container.addEventListener('mouseleave', () => {
            menu.style.display = 'none';
        });

        return this.container;
    }

    onRemove() {
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        this.map = undefined;
    }
}
