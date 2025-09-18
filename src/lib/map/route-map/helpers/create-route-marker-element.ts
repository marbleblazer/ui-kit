import { Theme } from '@mui/material';
import { mapMarkerTruckSvgString, mapMarkerWarehouseLayerSvgString } from '../../mp-marker-string';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from '../../svg-containers';
import { RouteStatuses, TPointType } from '../types';

interface ICreateMarkerElementProps {
    theme: Theme;
    pointType: TPointType;
    label?: string;
    status?: RouteStatuses;
}

/** Создание маркера: начальная/конечная точки, промежуточные точки, иконка водителя */
export const createRouteMarkerElement = ({ theme, pointType, status }: ICreateMarkerElementProps): HTMLDivElement => {
    const el = document.createElement('div');
    let svgString = '';

    const endMarkerColor = status === RouteStatuses.Done ? theme.palette.text.titleInput : theme.palette.base.color6;

    switch (pointType) {
        case 'start':
            svgString = mapMarkerStartSvgContainer(theme.palette, theme.palette.base.colorPointA);
            break;
        case 'end':
            svgString = mapMarkerEndSvgContainer(theme.palette, endMarkerColor);
            break;
        case 'warehouse':
            svgString = mapMarkerWarehouseLayerSvgString(theme.palette);
            break;
        case 'driver':
            if (status === RouteStatuses.InProgress) {
                svgString = mapMarkerTruckSvgString(theme.palette);
                el.classList.add('truck-marker');
            }
            break;
    }
    el.innerHTML = svgString;

    return el;
};
