import { Palette } from '@mui/material/styles';
import { locationSvg, trackerSvg } from './help-control-svg';

/** Control кнопки с вопросом на карте */
export class HelpControl {
    container: HTMLDivElement | undefined;
    map: mapboxgl.Map | undefined;
    palette: Palette;
    locationItem: HTMLDivElement | undefined;
    trackerItem: HTMLDivElement | undefined;

    constructor(palette: Palette) {
        this.palette = palette;
    }

    updatePalette(palette: Palette) {
        this.palette = palette;

        // Перерисовать иконки
        if (this.locationItem) {
            this.locationItem.innerHTML = locationSvg(this.palette);
            this.locationItem.insertAdjacentText('beforeend', 'Your location');
        }

        if (this.trackerItem) {
            this.trackerItem.innerHTML = trackerSvg(this.palette);
            this.trackerItem.insertAdjacentText('beforeend', 'GPS tracker');
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
        this.locationItem.insertAdjacentText('beforeend', 'Your location');
        menu.appendChild(this.locationItem);

        const divider = document.createElement('div');
        divider.className = 'help-menu-divider';
        menu.appendChild(divider);

        this.trackerItem = document.createElement('div');
        this.trackerItem.className = 'help-menu-item';
        this.trackerItem.innerHTML = trackerSvg(this.palette);
        this.trackerItem.insertAdjacentText('beforeend', 'GPS tracker');
        menu.appendChild(this.trackerItem);

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
        this.locationItem = undefined;
        this.trackerItem = undefined;
    }
}
