# BarChartWidget Component

## Overview

The `BarChartWidget` is a reusable React component designed to display a bar chart with a customizable legend and tooltip. It extends the `BaseWidget` component and integrates with the `ZoomBarChart` from the `@chirp/ui` library. The component is styled using Material-UI and supports internationalization via `react-i18next`.

## Features

- Displays a bar chart with zoom functionality.
- Customizable legend with colored dots and labels.
- Dynamic tooltip with formatted content (e.g., fuel volume in liters).
- Responsive design with Material-UI theme integration.
- Supports internationalization for localized text.

## Installation

Ensure the following dependencies are installed in your project:

```bash
npm install react react-i18next @mui/material @chirp/ui echarts
```

## Usage

### Example

```jsx
import { BarChartWidget } from './BarChartWidget';

const legendItems = [
    { id: 1, label: 'Series 1', color: '#FF5733' },
    { id: 2, label: 'Series 2', color: '#33FF57' },
];

const data = {
    categories: ['Jan', 'Feb', 'Mar'],
    series: [
        [10, 20, 30], // Series 1 data
        [15, 25, 35], // Series 2 data
    ],
};

const App = () => (
    <BarChartWidget
        title="Fuel Consumption"
        legendItems={legendItems}
        data={data}
        legendContainerSx={{ padding: '10px' }}
    />
);
```

### Props

| Prop                 | Type                                           | Description                                                    | Required | Default |
| -------------------- | ---------------------------------------------- | -------------------------------------------------------------- | -------- | ------- |
| `legendItems`        | `TOptionType[]`                                | Array of legend items with `id`, `label`, and `color`.         | Yes      | -       |
| `data`               | `{ categories: string[], series: number[][] }` | Chart data with categories and series values.                  | Yes      | -       |
| `legendContainerSx`  | `SxProps`                                      | Optional Material-UI styles for the legend container.          | No       | `{}`    |
| `...baseWidgetProps` | `IBaseWidgetProps`                             | Props inherited from `BaseWidget` (e.g., `title`, `subtitle`). | No       | -       |

#### `TOptionType`

```typescript
type TOptionType = {
    id: number;
    label: string;
    color: string;
};
```

## Styling

The component uses styled components from `./style` (`S`) and Material-UI's `SxProps` for the legend container. The tooltip is styled dynamically using the Material-UI theme.

### Tooltip Formatting

The `customTooltipFormatter` function formats the tooltip content, displaying:

- Series name with a colored dot.
- Fuel value in liters (translated via `react-i18next`).
- Category name.

Example tooltip output:

```
● Series 1
Fuel: 20 L
Jan
```

## Dependencies

- **React**: For building the component.
- **@mui/material**: For theming and styling.
- **react-i18next**: For internationalization.
- **@chirp/ui**: For the `ZoomBarChart` component.
- **echarts**: For chart rendering and tooltip customization.

## Notes

- Ensure the `ZoomBarChart` component from `@chirp/ui` is properly configured in your project.
- The tooltip assumes a fuel measurement in liters (`L`). Modify the `customTooltipFormatter` for other units.
- The component is optimized for use with Material-UI themes. Ensure a `ThemeProvider` wraps your application.
