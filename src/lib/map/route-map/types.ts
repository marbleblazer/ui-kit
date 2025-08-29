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

export interface IOSRMStep {
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
export interface IOSRMLeg {
    distance: number;
    duration: number;
    weight: number;
    summary: string;
    steps: IOSRMStep[];
}

// Полный маршрут
export interface IOSRMRoute {
    distance: number;
    duration: number;
    weight: number;
    weight_name: string;
    geometry: {
        type: 'LineString';
        coordinates: Position[];
    };
    legs: IOSRMLeg[];
}

// RouteDetailSchema
export interface IRouteDetail {
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
    planned_route?: IOSRMRoute | null;
    alt_route?: IOSRMRoute | null;
    rejected_routes?: Feature[];
}
