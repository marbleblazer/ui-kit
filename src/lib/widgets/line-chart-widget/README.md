# LineChartWidget Component

## Overview

The `LineChartWidget` is a React component designed to display a stacked line chart with a customizable legend. It extends the `BaseWidget` component and integrates with the `StackedChart` component from the `@chirp/ui` library, which is built on top of ECharts. The component supports Material-UI styling and is optimized for visualizing time-series or categorical data.

## Features

- Renders a stacked line chart with multiple series.
- Customizable legend with colored dots and labels.
- Supports dynamic colors for chart lines.
- Fully customizable chart styles via CSS properties.
- Responsive design with Material-UI integration.

## Installation

Ensure the following dependencies are installed in your project:

```bash
npm install react @mui/material @chirp/ui echarts echarts-for-react
```

## Usage

### Example

```jsx
import { LineChartWidget } from './LineChartWidget';

const chartData = [
    { Jan: 10, Feb: 20, Mar: 30 },
    { Jan: 15, Feb: 25, Mar: 35 },
];

const selectedItems = [
    { id: 1, label: 'Series 1', color: '#FF5733' },
    { id: 2, label: 'Series 2', color: '#33FF57' },
];

const colors = ['#FF5733', '#33FF57'];

const App = () => (
    <LineChartWidget
        title="Data Trends"
        chartData={chartData}
        selectedItems={selectedItems}
        colors={colors}
        chartStyles={{ height: '300px' }}
    />
);
```

### Props

| Prop                 | Type                         | Description                                                            | Required | Default |
| -------------------- | ---------------------------- | ---------------------------------------------------------------------- | -------- | ------- |
| `chartData`          | `StackedLineChartDataType[]` | Array of objects containing data for each series (key-value pairs).    | Yes      | -       |
| `selectedItems`      | `TOptionType[]`              | Array of legend items with `id`, `label`, and `color`.                 | Yes      | -       |
| `colors`             | `string[]`                   | Array of colors for the chart lines.                                   | Yes      | -       |
| `chartStyles`        | `React.CSSProperties`        | Optional CSS styles for the chart container (e.g., `width`, `height`). | No       | `{}`    |
| `...baseWidgetProps` | `IBaseWidgetProps`           | Props inherited from `BaseWidget` (e.g., `title`, `mainContainerSx`).  | No       | -       |

#### `TOptionType`

```typescript
type TOptionType = {
    id: number;
    label: string;
    color: string;
};
```

#### `StackedLineChartDataType`

```typescript
type StackedLineChartDataType = Record<string, number>;
```

Example `chartData`:

```javascript
[
    { Jan: 10, Feb: 20, Mar: 30 }, // Series 1
    { Jan: 15, Feb: 25, Mar: 35 }, // Series 2
];
```

## Styling

The component uses styled components from `./style` (`S`) for the legend and integrates with Material-UI for consistent theming. The `StackedChart` component supports custom styles via the `chartStyles` prop.

### Legend

The legend is rendered as a subheader using `S.LegendContainer`, displaying colored dots (`S.Dot`) and labels (`S.Label`) for each series.

## Dependencies

- **React**: For building the component.
- **@mui/material**: For theming and styling.
- **@chirp/ui**: For the `StackedChart` component.
- **echarts** and **echarts-for-react**: For rendering the line chart.
- **BaseWidget**: As the foundational layout component.

## Notes

- The `StackedChart` component uses ECharts for rendering and supports lazy updates for performance.
- Ensure the `chartData` format matches the `StackedLineChartDataType` structure (objects with consistent keys).
- The `colors` array should align with the number of series in `chartData` to avoid color mismatches.
- A `ThemeProvider` must wrap your application for Material-UI styling to work correctly.
- The chart's default height and width can be overridden via `chartStyles`. Ensure a defined height for proper rendering.
