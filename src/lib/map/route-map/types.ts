import { Feature } from '@mapbox/mapbox-sdk/services/geocoding-v6';

export type Position = [number, number];

export type TPointType =
    | 'start'
    | 'end'
    | 'waypoint_passed'
    | 'waypoint_next'
    | 'waypoint_future'
    | 'driver'
    | 'time_label';

export type TTimeLabelColor = 'green' | 'blue';

export type TTimeLabelDirection = 'left' | 'right';

export type TTimeLabelOrientation = 'left' | 'right';

export interface TTimeLabel {
    color: TTimeLabelColor;
    text: string;
    direction: TTimeLabelDirection;
    orientation: TTimeLabelOrientation;
    offset: Position;
}

export interface IRouteMeta {
    type: 'planned' | 'active' | 'done';
    estimatedDuration?: number;
    eta?: Date;
    nextStopIndex?: number;
    distance?: number;
    arrivalTime?: string;
    isRouteActive?: boolean;
    nextStopLabel?: string;
    timeLabels?: TTimeLabel[];
}

export interface TProcessedRoute {
    features: GeoJSON.FeatureCollection;
    meta: IRouteMeta;
}

// data schemes

export interface OSRMManeuver {
    location: Position;
    bearing_before: number;
    bearing_after: number;
    type: string;
    modifier?: string;
    exit?: number;
}

export interface OSRMIntersection {
    location: Position;
    bearings: number[];
    entry: boolean[];
    in?: number;
    out?: number;
}

export interface OSRMStep {
    distance: number;
    duration: number;
    weight: number;
    name: string;
    mode: string;
    geometry: {
        type: 'LineString';
        coordinates: Position[];
    };
    maneuver: OSRMManeuver;
    intersections: OSRMIntersection[];
}

// Отрезок между двумя точками маршрута
export interface OSRMLeg {
    distance: number;
    duration: number;
    weight: number;
    summary: string;
    steps: OSRMStep[];
}

// Полный маршрут
export interface OSRMRoute {
    distance: number;
    duration: number;
    weight: number;
    weight_name: string;
    geometry: {
        type: 'LineString';
        coordinates: Position[];
    };
    legs: OSRMLeg[];
}

// RouteDetailSchema
export interface RouteDetail {
    name: string;
    description?: string | null;
    is_active?: boolean | null;
    attributes?: Record<string, unknown> | null;
    calendar_id?: number | null;
    id: number;
    devices: Record<string, unknown>[];
    duration: number;
    area: GeoJSON.FeatureCollection;
    completed_route?: Feature | null;
    planned_route?: OSRMRoute | null;
    alt_route?: OSRMRoute | null;
    rejected_routes?: Feature[];
}
