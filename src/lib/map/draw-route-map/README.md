# DrawRouteMap Component

## Overview

`DrawRouteMap` is an interactive React component for drawing and editing routes on a Mapbox map. It provides a drawing interface with custom modes, markers, and route visualization capabilities.

## Features

- Interactive route drawing with Mapbox GL Draw
- Custom drawing modes for line strings
- Start and end point markers with custom SVG icons
- Numbered waypoint markers for intermediate points
- Delete last point functionality with visual markers
- Theme-aware styling with Material-UI integration
- Support for single feature drawing mode
- Automatic bounding box fitting
- Real-time route editing and updates

## Usage

```tsx
import { DrawRouteMap } from '@chirpwireless/ui-kit';

<DrawRouteMap
  data={routeData}
  onChange={(feature) => console.log('Route updated:', feature)}
  shouldFinishDrawing={false}
  onDrawingFinished={() => console.log('Drawing completed')}
/>;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `GeoJSON.GeoJSON \| null` | `null` | GeoJSON feature to display and edit |
| `onChange` | `(value: GeoJSON.GeoJSON) => void` | `() => {}` | Callback when route is modified |
| `shouldFinishDrawing` | `boolean` | `false` | Trigger to finish drawing mode |
| `onDrawingFinished` | `() => void` | `undefined` | Callback when drawing is completed |
| `coordinates` | `Coordinates` | `undefined` | Initial map center coordinates |
| `scrollZoom` | `boolean` | `true` | Enable/disable scroll zoom |
| `isSingleDraw` | `boolean` | `false` | Draw only one feature, clear others |
| `getMapStyleId` | `(themeMode: string) => string` | `undefined` | Custom map style function |

## Drawing Modes

The component uses custom drawing modes:

### `draw_line_string`
- Custom line string drawing with vertex management
- Support for deleting last point with click on vertex
- Automatic point numbering
- Visual feedback for active drawing

## Marker Types

- **Start Marker** - Blue SVG marker for route starting point
- **End Marker** - Green SVG marker for route ending point  
- **Numbered Markers** - Intermediate points with sequential numbers
- **Delete Marker** - Visual indicator for last point deletion

## Event Handling

### Drawing Events
- `draw.create` - When a new feature is created
- `draw.update` - When an existing feature is modified
- `draw.delete` - When a feature is deleted

### Mouse Events
- `mousemove` - For real-time point numbering and delete marker positioning

## Data Structure

The component works with GeoJSON features:

```typescript
// LineString feature example
{
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [[lng1, lat1], [lng2, lat2], ...]
  },
  properties: {
    points: [
      { number: 1 },
      { number: 2 },
      // ... numbered points
    ]
  }
}
```

## Custom Drawing Mode

The component extends Mapbox Draw with custom functionality:

```typescript
const customDrawLineStringMode = {
  ...MapboxDraw.modes.draw_line_string,
  clickOnVertex(this: IDrawCustomModeContext, state: IDrawLineStringModeState) {
    // Custom vertex click handling
    // Supports deleting last point
  }
};
```

## Styling

Uses custom Mapbox Draw styles with theme integration:

- **Active Lines**: Primary theme color with 2px width
- **Inactive Lines**: Primary theme color with borders
- **Points**: Theme-colored circles with white borders
- **Markers**: Custom SVG icons with theme colors

## Controls

- Mapbox Draw controls in top-left position
- Navigation controls
- Automatic mode switching between draw and select

## Internationalization

The component doesn't directly use translations but integrates with the project's i18n system through the base map component.

## Dependencies

- `mapbox-gl` - Map rendering
- `@mapbox/mapbox-gl-draw` - Drawing functionality  
- `@mapbox/mapbox-gl-geocoder` - Location search
- `@turf/bbox` - Bounding box calculations
- `@mui/material` - Theming
- `mapbox-gl-draw-geodesic` - Geodesic drawing support

## Performance Considerations

- Uses `memo` for component optimization
- Efficient event listener management
- Proper cleanup of markers and controls
- Debounced rendering where appropriate

## Accessibility

- Keyboard navigation support
- Screen reader compatible controls
- High contrast theme support
- Proper focus management

## Example Usage

```typescript
const [routeData, setRouteData] = useState<GeoJSON.Feature | null>(null);

const handleRouteChange = (feature: GeoJSON.Feature) => {
  setRouteData(feature);
  // Process the updated route
};

<DrawRouteMap
  data={routeData}
  onChange={handleRouteChange}
  shouldFinishDrawing={isDrawingComplete}
  onDrawingFinished={() => setIsDrawingComplete(false)}
/>;
```

## Notes

- Requires Mapbox access token (`VITE_UI_MAPBOX_TOKEN`)
- Uses project's base map component for consistency
- Supports both mouse and touch interactions
- Mobile-optimized with proper gesture handling
- Custom drawing modes can be extended for additional functionality
