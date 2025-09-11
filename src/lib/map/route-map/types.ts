export type TPointType =
    | 'start'
    | 'end'
    | 'waypoint_passed'
    | 'waypoint_next'
    | 'waypoint_future'
    | 'driver'
    | 'time_label';

export type TTimeLabelType = 'planned' | 'alt';

export type TTimeLabelOrientation = 'left' | 'right';

export interface TTimeLabel {
    type: TTimeLabelType;
    text: string;
    orientation: TTimeLabelOrientation;
}

export interface IRouteMeta {
    id?: number;
    type: RouteStatuses;
    estimatedDuration?: number;
    eta?: Date;
    nextStopIndex?: number;
    distance?: number;
    arrivalTime?: string;
    nextStopLabel?: string;
    timeLabels?: TTimeLabel[];
}

export interface TProcessedRoute {
    features: GeoJSON.FeatureCollection;
    meta: IRouteMeta;
}

// data schemes

export enum RouteStatuses {
    Done = 'done',
    Todo = 'todo',
    InProgress = 'in_progress',
}

interface ICompletedRoute {
    longitude: number;
    latitude: number;
    fixtime: string;
}

interface IRejectedRoute {
    route_id: number;
    area: { geometry: GeoJSON.Geometry };
}

interface ICumulativeValues {
    distance: number[];
    duration: number[];
    points: number[][];
}

interface IOSRMStep {
    geometry: GeoJSON.LineString;
    distance: number;
    duration: number;
}

interface IOSRMLeg {
    distance: number;
    duration: number;
    steps: IOSRMStep[];
}

interface IOSRMRoute {
    distance: number;
    duration: number;
    geometry: GeoJSON.LineString;
    legs: IOSRMLeg[];
}

export interface IRouteDetail {
    name: string;
    description: string | null;
    attributes: Record<string, string | number>;
    area: { geometry: GeoJSON.Geometry };
    calendar_id: number | null;
    id: number;
    devices: {
        id: number;
        name: string;
    }[];
    status: RouteStatuses;
    planned_route: IOSRMRoute | null;
    alt_route: IOSRMRoute | null;
    completed_route: ICompletedRoute[] | null;
    rejected_routes: IRejectedRoute[] | null;
    cumulative_values: ICumulativeValues;
}
