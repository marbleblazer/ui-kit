import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { ICustomDrawMode, IDrawCustomModeContext, IDrawModeState } from '../../map.types';

interface IDrawLineStringModeState extends IDrawModeState {
    line: {
        id: string;
        coordinates: [number, number][];
        type: 'LineString';
    };
    fakeDuplicateAdded?: boolean;
}

export type ICustomDrawLineStringMode = ICustomDrawMode<IDrawLineStringModeState>;

export const customDrawLineStringMode: ICustomDrawLineStringMode = {
    ...MapboxDraw.modes.draw_line_string,

    clickOnVertex(this: IDrawCustomModeContext, state: IDrawLineStringModeState) {
        const isLastPoint =
            state.currentVertexPosition !== null &&
            Array.isArray(state.line?.coordinates) &&
            state.currentVertexPosition === state.line.coordinates.length - 1;

        if (isLastPoint) {
            const newCoords = [...state.line.coordinates];

            if (newCoords?.length > 2) {
                newCoords.pop();
            }

            newCoords.pop();

            if (state.fakeDuplicateAdded) {
                newCoords.shift();
                state.fakeDuplicateAdded = false;
            }

            if (newCoords.length === 1) {
                const [x, y] = newCoords[0];
                newCoords.push([x, y]);
                state.fakeDuplicateAdded = true;
            }

            const feature = this.getFeature(state.line.id);
            // @ts-expect-error bug
            feature?.setCoordinates(newCoords);
            state.line.coordinates = newCoords;

            if (state.currentVertexPosition !== null) state.currentVertexPosition = state.currentVertexPosition - 1;

            // Принудительный рендер
            this.doRender(state.line.id);

            return;
        }

        return this.changeMode(MapboxDraw.constants.modes.DIRECT_SELECT, {
            featureId: state.line.id,
        });
    },
};
//
