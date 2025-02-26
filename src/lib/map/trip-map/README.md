# TripMap Component

## Overview

`TripMap` is a React component that integrates with Mapbox GL to visualize geographic data, including animated line movements and custom markers.

## Features

- Supports GeoJSON data visualization.
- Custom markers on `LineString` paths.
- Animated movement along a `LineString`.
- Custom drawing tools using `mapbox-gl-draw` and `mapbox-gl-draw-geodesic`.
- Dynamic zoom handling and popups for additional information.

## Installation

Ensure you have `mapbox-gl`, `@turf/bbox`, `@mapbox/mapbox-gl-draw`, and `mapbox-gl-draw-geodesic` installed:

```sh
npm install mapbox-gl @turf/bbox @mapbox/mapbox-gl-draw mapbox-gl-draw-geodesic
```

Also, make sure to include the required styles:

```js
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
```

## Usage

```tsx
import { TripMap } from './TripMap';

const sampleData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [-122.414, 37.776],
                    [-122.414, 37.786],
                    [-122.424, 37.796],
                ],
            },
            properties: {
                lineId: 1,
            },
        },
    ],
};

export const MyMap = () => <TripMap data={sampleData} animateLineId={1} animationDuration={5000} isPaused={false} />;
```

## Props

| Prop                   | Type                            | Default     | Description                          |
| ---------------------- | ------------------------------- | ----------- | ------------------------------------ |
| `data`                 | `GeoJSON.GeoJSON`               | `null`      | GeoJSON data for the map             |
| `coordinates`          | `{ lat: number; lon: number; }` | `undefined` | Initial coordinates                  |
| `centeringCoordinates` | `{ lat: number; lon: number; }` | `undefined` | Coordinates to center the map        |
| `isLineMarkersNeeded`  | `boolean`                       | `true`      | Whether to show markers along a line |
| `animateLineId`        | `number`                        | `undefined` | Line ID to animate                   |
| `animationDuration`    | `number`                        | `3000`      | Animation duration in ms             |
| `isPaused`             | `boolean`                       | `false`     | Whether the animation is paused      |
| `onAnimationEnd`       | `() => void`                    | `undefined` | Callback when animation ends         |

## Events & Callbacks

- `onAnimationEnd`: Fires when the line animation completes.

## Dependencies

- `mapbox-gl`
- `@turf/bbox`
- `@mapbox/mapbox-gl-draw`
- `mapbox-gl-draw-geodesic`
- `@mui/material` (for theming)

## Notes

- Requires a valid Mapbox API token (`VITE_UI_MAPBOX_TOKEN`).
- Ensure the Mapbox styles are correctly loaded.
