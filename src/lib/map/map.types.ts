export type Coordinates = {
    lat?: number;
    lon?: number;
};

export type GeodesicDrawType = {
    enable(modes: MapboxDraw.Modes): MapboxDraw.Modes;
    getCircleCenter(
        feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>,
    ): GeoJSON.Feature<GeoJSON.Point, GeoJSON.GeoJsonProperties>;

    getCircleRadius(feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>): number;
    createCircle(center: GeoJSON.Position, radius: number): GeoJSON.Feature;
};

export interface IDrawModeState {
    currentVertexPosition: number | null;
}

export interface IDrawCustomModeContext extends MapboxDraw.DrawCustomModeThis {
    changeMode(mode: string, opts?: object): void;
}

type VertexClickHandler<StateType> = (this: IDrawCustomModeContext, state: StateType) => void;

export interface ICustomDrawMode<StateType> extends MapboxDraw.DrawCustomMode {
    clickOnVertex?: VertexClickHandler<StateType>;
    onDeleteLastPoint?(this: IDrawCustomModeContext, state: StateType): void;
}

export type IFeatureMapVariants = 'base' | 'single-point';
