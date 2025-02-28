declare module 'mapbox-gl-draw-geodesic';

declare module 'mapbox-gl-draw-geodesic' {
    import { modes as DefaultModes } from '@mapbox/mapbox-gl-draw';

    // Определяем типы для геодезических режимов рисования
    export const draw_circle: typeof DefaultModes.draw_circle;

    export const draw_polygon: typeof DefaultModes.draw_polygon;

    export const draw_line_string: typeof DefaultModes.draw_line_string;
}
