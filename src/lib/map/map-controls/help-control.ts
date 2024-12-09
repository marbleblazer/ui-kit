/** Control кнопки с вопросом на карте */
export class HelpControl {
    container: HTMLDivElement | undefined;
    map: mapboxgl.Map | undefined;

    onAdd(map: mapboxgl.Map) {
        this.map = map;

        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        this.container.style.cursor = 'pointer';

        const button = document.createElement('button');

        const span = document.createElement('span');
        span.className = 'help-control';

        button.appendChild(span);

        button.addEventListener('click', () => {
            alert('This is a help icon!');
        });

        this.container.appendChild(button);

        return this.container;
    }

    onRemove() {
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        this.map = undefined;
    }
}
