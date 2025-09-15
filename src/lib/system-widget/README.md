# SystemWidget Component

## Overview

`SystemWidget` is a React component that displays system attribute information in a standardized card format. It shows attribute values with units, timestamps, and provides switching capabilities between different views.

## Features

- Displays system attributes with values and units
- Shows last update timestamp with relative time formatting
- Supports both single values and arrays of values
- Optional view switching functionality
- Tooltip support for truncated values
- Theme-aware styling

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `attributeName` | `string` | Required | Unique identifier for the system attribute |
| `title` | `string` | Required | Display title for the attribute |
| `value` | `number \| string \| boolean \| null \| string[]` | Required | The attribute value(s) to display |
| `units` | `string \| null` | Required | Measurement units for the value |
| `date` | `number` | Required | Timestamp of the last update (in milliseconds) |
| `switchView` | `(attributeName: string) => void` | `undefined` | Optional callback for view switching |

## Usage

### Basic Usage
```tsx
import { SystemWidget } from './SystemWidget';

const MyComponent = () => {
    return (
        <SystemWidget
            attributeName="temperature"
            title="Temperature"
            value={25.5}
            units="°C"
            date={Date.now()}
        />
    );
};
```

### With Array Values
```tsx
<SystemWidget
    attributeName="status_codes"
    title="Status Codes"
    value={["OK", "WARNING", "ERROR"]}
    units={null}
    date={Date.now() - 3600000} // 1 hour ago
/>
```

### With View Switching
```tsx
const handleSwitchView = (attributeName: string) => {
    console.log(`Switching view for ${attributeName}`);
    // Implement view switching logic
};

<SystemWidget
    attributeName="pressure"
    title="Pressure"
    value={1013.25}
    units="hPa"
    date={Date.now()}
    switchView={handleSwitchView}
/>
```

## Value Display Behavior

- **Single values**: Displayed as-is with units
- **Array values**: Each item displayed on a separate line
- **String values with commas**: Automatically split into array
- **Boolean values**: Converted to string representation
- **Null values**: Displayed as "null"

## Styling

The widget uses a card-based design with:
- Background: `theme.palette.background.background7`
- Padding: 20px
- Border radius: 12px
- Minimum height: 84px
- Responsive width

## Internationalization

The component uses `react-i18next` for translation:
- "Last update" text is translated
- Time formatting uses project's time utility functions

## Tooltips

Values are wrapped in Tooltip components to show full content when truncated:
- Placement: top
- Shows complete value on hover
- Useful for long values that might be ellipsized

## Dependencies

- `@mui/material` (for Box, Stack, styling)
- `../tooltip` (for value tooltips)
- `../chirp-widgets/helpers` (for time formatting)
- `../chirp-widgets/switch-view-button` (for view switching)
- `../typography` (for consistent text styling)
- `react-i18next` (for translation)

## Accessibility

- Proper semantic HTML structure
- Tooltip accessibility for screen readers
- Keyboard navigation support
- ARIA labels for interactive elements

## Notes

- The component is designed for system monitoring dashboards
- Time formatting uses the project's `getTimeString` utility
- View switching is optional and requires the `switchView` prop
- Array values are automatically handled for comma-separated strings
