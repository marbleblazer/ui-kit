# DrawableMap

## Description

`DrawableMap` is a React component built on top of `mapbox-gl` that provides an interactive map with drawing capabilities. It supports drawing and modifying geometries, including lines and circles, using `mapbox-gl-draw` and `mapbox-gl-draw-geodesic`.

## Features

- Interactive map rendering using `mapbox-gl`.
- Drawing tools for lines and circles.
- Custom styling support.
- Optional start and end indicators for line drawings.
- Auto-fit to drawn features.

## Installation

To use `DrawableMap`, install the required dependencies:

```sh
npm install mapbox-gl @turf/turf mapbox-gl-draw mapbox-gl-draw-geodesic
```

## Props

| Prop                         | Type                               | Default     | Description                                                       |
| ---------------------------- | ---------------------------------- | ----------- | ----------------------------------------------------------------- |
| `coordinates`                | `Coordinates`                      | `undefined` | Initial map center coordinates.                                   |
| `scrollZoom`                 | `boolean`                          | `true`      | Enables/disables scroll zooming.                                  |
| `data`                       | `GeoJSON.GeoJSON or null`          | `null`      | The initial drawing data. Supports only a single feature.         |
| `isSingleDraw`               | `boolean`                          | `true`      | Restricts drawing to one feature at a time.                       |
| `drawMode`                   | `'draw_line_string'`               | `undefined` | The default drawing mode. If set, mode selection tabs are hidden. |
| `onChange`                   | `(value: GeoJSON.GeoJSON) => void` | `() => {}`  | Callback triggered when the drawn feature changes.                |
| `withStartEndLineIndicators` | `boolean`                          | `false`     | Displays markers at the start and end of a line drawing.          |
| `getMapStyleId`              | `(themeMode: string) => string`    | `undefined` | Function to get the map style ID based on theme mode.             |

## Usage

```tsx
import React from 'react';
import { DrawableMap } from './DrawableMap';

const MyComponent = () => {
    const handleDrawChange = (geojson) => {
        console.log('New drawing:', geojson);
    };

    return (
        <DrawableMap
            coordinates={[0, 0]}
            onChange={handleDrawChange}
            isSingleDraw={true}
            drawMode="draw_line_string"
            withStartEndLineIndicators
        />
    );
};

export default MyComponent;
```

## Dependencies

- `mapbox-gl`
- `@turf/turf`
- `mapbox-gl-draw`
- `mapbox-gl-draw-geodesic`

## Notes

- Ensure you have a valid Mapbox access token set in your environment (`VITE_UI_MAPBOX_TOKEN`).
- This component currently supports drawing a single feature at a time. If you need multiple features, additional development is required.
