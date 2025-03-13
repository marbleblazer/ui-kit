# Map Components

This package provides two React components based on Mapbox GL: `BaseMap` and `FeatureMap`. These components allow for interactive map rendering, geolocation, and custom feature visualization.

## Installation

Ensure you have `mapbox-gl` installed in your project:

```sh
npm install mapbox-gl @mapbox/mapbox-gl-geocoder turf
```

or

```sh
yarn add mapbox-gl @mapbox/mapbox-gl-geocoder turf
```

## Components

### BaseMap

A core map component that initializes a Mapbox GL instance with basic controls and localization.

#### Props

| Prop            | Type                                 | Default              | Description                                                  |     |
| --------------- | ------------------------------------ | -------------------- | ------------------------------------------------------------ | --- |
| `mapRef`        | `RefObject<mapboxgl.Map or null>`    | `null`               | A reference to the Mapbox map instance.                      |
| `coordinates`   | `{ lat: number; lon: number; }`      | `null`               | Initial map center coordinates.                              |     |
| `scrollZoom`    | `boolean`                            | `true`               | Enables or disables scroll zoom.                             |     |
| `getMapStyleId` | `(themeMode: PaletteMode) => string` | `getUiKitMapStyleId` | Function to determine the map style based on the theme mode. |     |
| `onMapLoad`     | `() => void`                         | Required             | Callback fired when the map is loaded.                       |     |
| `sx`            | `SxProps`                            | `undefined`          | Custom styles.                                               |     |

#### Usage

```tsx
import { BaseMap } from './BaseMap';

const MyMap = () => {
    const mapRef = useRef<mapboxgl.Map | null>(null);

    return (
        <BaseMap
            mapRef={mapRef}
            coordinates={{ lat: 40.7128, lon: -74.006 }}
            onMapLoad={() => console.log('Map Loaded')}
        />
    );
};
```

---

### FeatureMap

Extends `BaseMap` by adding support for rendering GeoJSON features, markers, and drawing tools.

#### Props

| Prop                   | Type                            | Default | Description                                              |                                          |
| ---------------------- | ------------------------------- | ------- | -------------------------------------------------------- | ---------------------------------------- |
| `data`                 | `GeoJSON.GeoJSON`               | `null`  | `null`                                                   | GeoJSON data to be displayed on the map. |
| `coordinates`          | `{ lat: number; lon: number; }` | `null`  | Initial map center coordinates.                          |                                          |
| `scrollZoom`           | `boolean`                       | `true`  | Enables or disables scroll zoom.                         |                                          |
| `isLineMarkersNeeded`  | `boolean`                       | `true`  | Whether to display intermediate markers on `LineString`. |                                          |
| `centeringCoordinates` | `{ lat: number; lon: number; }` | `null`  | Coordinates to re-center the map dynamically.            |                                          |

#### Usage

```tsx
import { FeatureMap } from './FeatureMap';

const myGeoJSON = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-74.006, 40.7128],
            },
            properties: { popupNode: 'New York City' },
        },
    ],
};

const MyFeatureMap = () => {
    return <FeatureMap data={myGeoJSON} />;
};
```

## Features

- Supports dark/light theme styling.
- Integrates `@mapbox/mapbox-gl-geocoder` for location search.
- Custom geolocation button and controls.
- Localized UI elements with `react-i18next`.
- Supports drawing tools via `mapbox-gl-draw`.

## Dependencies

- `mapbox-gl`
- `@mapbox/mapbox-gl-geocoder`
- `turf` (for bounding box calculations)
- `react-i18next`

## Environment Variables

Ensure you have a valid Mapbox API key set up in your environment:

```sh
VITE_UI_MAPBOX_TOKEN=your_mapbox_token
```

## Other varaints of map:

- [TripMap](trip-map/README.md)
- [DrawableMap](drawable-map/README.md)
