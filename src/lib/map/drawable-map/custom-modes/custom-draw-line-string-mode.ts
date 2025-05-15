import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { ICustomDrawMode, IDrawCustomModeContext, IDrawModeState } from '../../map.types';

interface IDrawLineStringModeState extends IDrawModeState {
    line: {
        id: string;
        coordinates: [number, number][];
        type: 'LineString';
    };
}

export type ICustomDrawLineStringMode = ICustomDrawMode<IDrawLineStringModeState>;

export const customDrawLineStringMode: ICustomDrawLineStringMode = {
    ...MapboxDraw.modes.draw_line_string,

    // Переопределение нажатия на последнюю точку при рисовании
    clickOnVertex(this: IDrawCustomModeContext, state: IDrawLineStringModeState) {
        const isLastPoint =
            state.currentVertexPosition !== null &&
            Array.isArray(state.line?.coordinates) &&
            state.currentVertexPosition === state.line.coordinates.length - 1;

        if (isLastPoint) return;

        return this.changeMode(MapboxDraw.constants.modes.DIRECT_SELECT, {
            featureId: state.line.id,
        });
    },
};
