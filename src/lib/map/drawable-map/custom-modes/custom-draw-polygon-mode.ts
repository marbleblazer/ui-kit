import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { ICustomDrawMode, IDrawCustomModeContext, IDrawModeState } from '../../map.types';

interface IDrawPolygonModeState extends IDrawModeState {
    polygon: {
        id: string;
        coordinates: [number, number][][];
        type: 'Polygon';
    };
}

export type ICustomDrawPolygonMode = ICustomDrawMode<IDrawPolygonModeState>;

export const customDrawPolygonMode: ICustomDrawPolygonMode = {
    ...MapboxDraw.modes.draw_polygon,

    clickOnVertex(this: IDrawCustomModeContext, state: IDrawPolygonModeState) {
        const isLastPoint =
            state.currentVertexPosition !== null &&
            Array.isArray(state.polygon?.coordinates[0]) &&
            state.currentVertexPosition === state.polygon.coordinates[0].length - 1;

        if (isLastPoint) return;

        return this.changeMode(MapboxDraw.constants.modes.DIRECT_SELECT, {
            featureId: state.polygon.id,
        });
    },
};
