# RouteMap Component

## Overview

`RouteMap` is a React component for displaying interactive route maps using Mapbox GL JS. It provides comprehensive route visualization with support for different route types, markers, clustering, and informational controls.

## Features

- Interactive Mapbox-based route visualization
- Support for multiple route types (completed, in progress, planned)
- Custom markers for start/end points, waypoints, and driver position
- Route line styling with different colors and patterns
- Point clustering for dense route data
- Time labels and informational controls
- Theme-aware styling with Material-UI integration
- Responsive design with mobile support

## Usage

```tsx
import { RouteMap } from '@chirpwireless/ui-kit';

<RouteMap
  data={routeData}
  coordinates={{ lat: 51.5074, lon: -0.1278 }}
  scrollZoom={true}
/>;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TProcessedRoute \| null` | `null` | Processed route data containing features and metadata |
| `coordinates` | `Coordinates` | `undefined` | Initial map center coordinates |
| `scrollZoom` | `boolean` | `true` | Enable/disable scroll zoom functionality |
| `controls` | `'full' \| 'reduced'` | `'full'` | Map controls configuration |

## Route Data Structure

The component expects data in the following format:

```typescript
interface TProcessedRoute {
  features: GeoJSON.FeatureCollection;
  meta: IRouteMeta;
}

interface IRouteMeta {
  id?: number;
  type: RouteStatuses; // 'done', 'todo', 'in_progress'
  estimatedDuration?: number;
  eta?: Date;
  nextStopIndex?: number;
  distance?: number;
  arrivalTime?: string;
  nextStopLabel?: string;
  timeLabels?: TTimeLabel[];
}
```

## Route Statuses

- `RouteStatuses.Done` - Completed route
- `RouteStatuses.Todo` - Planned route
- `RouteStatuses.InProgress` - Active route

## Marker Types

- `start` - Route starting point
- `end` - Route ending point
- `waypoint_passed` - Completed waypoint
- `waypoint_next` - Next waypoint
- `waypoint_future` - Future waypoint
- `driver` - Driver position (only for active routes)
- `time_label` - Time information labels

## Line Types

- `completed` - Completed route segments
- `next_leg` - Next segment to be traveled
- `future_leg` - Future route segments
- `alt_route` - Alternative route options
- `rejected` - Rejected route segments

## Styling

The component uses Mapbox GL styles with Material-UI theme integration:

- Route lines have borders and inner lines with theme colors
- Markers use SVG icons with theme-aware colors
- Clustering uses theme colors for circle markers
- Time labels adapt to light/dark themes
- Controls use project's icon system

## Controls

The map includes several built-in controls:

- Navigation controls (zoom in/out)
- Geolocation control
- Fullscreen control
- Search geocoder
- Help control
- Route information panel

## Internationalization

The component uses `react-i18next` for translation with the following keys:
- `uiKit:map.Search location` - Geocoder placeholder
- `uiKit:map.Search` - Geocoder collapsed text
- `uiKit:Route completed` - Completed route label
- `uiKit:Estimated time` - Estimated time label
- `uiKit:Estimated time to stop` - Time to next stop label
- `uiKit:km` - Kilometers unit

## Dependencies

- `mapbox-gl` - Map rendering engine
- `@turf/bbox` - Bounding box calculations
- `@mui/material` - Theming and UI components
- `react-i18next` - Internationalization
- `@mapbox/mapbox-gl-geocoder` - Location search

## Accessibility

- Keyboard navigation support
- Screen reader compatible controls
- Proper ARIA labels
- High contrast theme support

## Performance Considerations

- Uses debouncing for map updates
- Efficient layer management with cleanup
- Cluster optimization for large datasets
- Memory management with proper cleanup

## Example Data

```typescript
const exampleRoute = {
  features: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [51.5074, -0.1278]
        },
        properties: {
          featureType: "point",
          pointType: "start",
          label: "Start"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [[51.5074, -0.1278], [51.5174, -0.1178]]
        },
        properties: {
          featureType: "line",
          user_lineType: "completed"
        }
      }
    ]
  },
  meta: {
    type: RouteStatuses.InProgress,
    estimatedDuration: 3600,
    distance: 15.5,
    nextStopLabel: "Warehouse A"
  }
};
```

## Notes

- Requires Mapbox access token in environment variables (`VITE_UI_MAPBOX_TOKEN`)
- Uses project's base map component for consistent styling
- Includes automatic bounding box fitting for route data
- Supports both mouse and touch interactions
- Mobile-optimized with cooperative gestures
