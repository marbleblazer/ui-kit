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
        console.log('clickOnVertex called', {
            currentVertexPosition: state.currentVertexPosition,
            coordinatesLength: state.line?.coordinates?.length,
            coordinates: state.line?.coordinates,
        });

        const isLastPoint =
            state.currentVertexPosition !== null &&
            Array.isArray(state.line?.coordinates) &&
            state.currentVertexPosition === state.line.coordinates.length - 1;

        console.log('isLastPoint:', isLastPoint);

        if (isLastPoint) {
            const newCoords = [...state.line.coordinates];

            // Удаляем последнюю точку
            newCoords.pop();

            // Если после удаления осталась только одна точка, удаляем всю линию
            if (newCoords.length <= 1) {
                this.deleteFeature(state.line.id);

                return this.changeMode('draw_line_string');
            }

            const feature = this.getFeature(state.line.id);

            // @ts-expect-error bug
            feature?.setCoordinates(newCoords);
            state.line.coordinates = newCoords;

            // Обновляем currentVertexPosition, но не допускаем отрицательных значений
            if (state.currentVertexPosition !== null) {
                state.currentVertexPosition = Math.max(0, state.currentVertexPosition - 1);
            }

            // Принудительный рендер
            this.doRender(state.line.id);

            return;
        }

        return this.changeMode(MapboxDraw.constants.modes.DIRECT_SELECT, {
            featureId: state.line.id,
        });
    },
};
