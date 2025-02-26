# VerticalBarsChartWidget Component

The `VerticalBarsChartWidget` component displays a vertical bar chart with data from a given collection. It allows for the visualization of values in a bar chart and supports customization options for labels, units, and the maximum number of items to display.

## Installation

Ensure the necessary dependencies are installed:

```bash
npm install @mui/material @chirp/ui
```

## Usage

### Basic Example

```tsx
import React from 'react';
import { VerticalBarsChartWidget } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const collection = [
        { id: 1, name: 'Item 1', value: 10 },
        { id: 2, name: 'Item 2', value: 20 },
    ];

    return (
        <VerticalBarsChartWidget
            title="Vertical Bar Chart"
            collection={collection}
            nameKey="name"
            valueKey="value"
            unit="units"
            listLabel="Items"
        />
    );
};
```

### Props

| Name          | Description                                                         | Type                  | Default Value |
| ------------- | ------------------------------------------------------------------- | --------------------- | ------------- |
| `collection`  | The array of data to be displayed.                                  | `T[]`                 | Required      |
| `valueKey`    | The key in the data representing the value to display in the chart. | `keyof T`             | Required      |
| `nameKey`     | The key in the data representing the name of each item.             | `keyof T`             | Required      |
| `unit`        | The unit of measurement for the values displayed in the chart.      | `string`              | Optional      |
| `listLabel`   | The label to display for the list of items.                         | `string`              | Optional      |
| `chartStyles` | Additional CSS styles to apply to the chart.                        | `React.CSSProperties` | Optional      |
| `maxItems`    | The maximum number of items to display in the chart.                | `number`              | `10`          |
| `title`       | The title of the widget.                                            | `string`              | Required      |

## Features

- **Interactive Bar Chart**: The widget renders a vertical bar chart using the `VerticalBarChart` component from `@chirp/ui`.
- **Data Sorting**: The widget automatically sorts the data in descending order based on the `valueKey`.
- **Item List**: A list of item names (`nameKey`) is displayed next to the chart.
- **Customization**: You can customize the chart's appearance with `chartStyles`, control the maximum number of items displayed with `maxItems`, and set a unit of measurement with `unit`.

## Notes

- The `BaseWidget` component is used for layout and standard features (such as the title).
- The `collection` prop should be an array of objects where each object contains at least a `nameKey` and a `valueKey` to be displayed in the chart.
- The chart's data is sorted by value in descending order before being rendered.
- The `listLabel` and the names of the items are displayed next to the bar chart.
- The `VerticalBarChart` component is used to render the bars.
