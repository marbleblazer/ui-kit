import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { ICustomDrawMode, IDrawCustomModeContext, IDrawModeState } from '../../map.types';

interface IDrawPolygonModeState extends IDrawModeState {
    polygon: {
        id: string;
        coordinates: [number, number][][];
        type: 'Polygon';
    };
    fakeDuplicateAdded?: boolean;
    isContinued: boolean;
}

export type ICustomDrawPolygonMode = ICustomDrawMode<IDrawPolygonModeState>;

export const customDrawPolygonMode: ICustomDrawPolygonMode = {
    ...MapboxDraw.modes.draw_polygon,

    clickOnVertex(this: IDrawCustomModeContext, state: IDrawPolygonModeState) {
        const isLastPoint =
            state.currentVertexPosition !== null &&
            Array.isArray(state.polygon?.coordinates[0]) &&
            state.currentVertexPosition === state.polygon.coordinates[0].length - 1;

        if (isLastPoint) {
            const newCoords = [...state.polygon.coordinates[0]];

            newCoords.pop();

            const feature = this.getFeature(state.polygon.id);
            // @ts-expect-error bug
            feature?.setCoordinates([newCoords]);
            state.polygon.coordinates[0] = newCoords;

            if (state.currentVertexPosition) state.currentVertexPosition = state.currentVertexPosition - 1;

            // Принудительный рендер
            this.doRender(state.polygon.id);

            return;
        }

        return this.changeMode(MapboxDraw.constants.modes.DIRECT_SELECT, {
            featureId: state.polygon.id,
        });
    },
};
