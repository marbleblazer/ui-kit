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
