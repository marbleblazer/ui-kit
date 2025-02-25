# StackedLineChartWidget Component

The `StackedLineChartWidget` component displays a stacked line chart that can be filtered by selecting specific options. It also allows for detailed view of individual items in the chart, with customizable color options, select filters, and item content.

## Installation

Make sure you have the necessary dependencies installed:

```bash
npm install @mui/material @chirp/ui
```

## Usage

### Basic Example

```tsx
import React from 'react';
import { StackedLineChartWidget } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const collection = [
        {
            id: 1,
            data: [
                { label: '2020', value: 10 },
                { label: '2021', value: 15 },
            ],
        },
        {
            id: 2,
            data: [
                { label: '2020', value: 5 },
                { label: '2021', value: 20 },
            ],
        },
    ];

    const selectOptions = [
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' },
    ];

    return (
        <StackedLineChartWidget
            title="Stacked Line Chart"
            collection={collection}
            dataKey="data"
            idKey="id"
            selectOptions={selectOptions}
            colors={['#FF5733', '#33FF57']}
            renderSelectedContent={(item) => <div>{item}</div>}
        />
    );
};
```

### Props

| Name              | Description                                                    | Type                  | Default Value |
| ----------------- | -------------------------------------------------------------- | --------------------- | ------------- |
| `collection`      | The array of data to be displayed.                             | `T[]`                 | Required      |
| `dataKey`         | The key in the data to access the chart data.                  | `keyof T`             | Required      |
| `idKey`           | The key used for identifying each item in the collection.      | `keyof T`             | Required      |
| `chartStyles`     | Additional CSS styles to apply to the chart.                   | `React.CSSProperties` | Optional      |
| `selectOptions`   | The options available for filtering the data.                  | `OptionType[]`        | Required      |
| `maxItems`        | The maximum number of items to show in the chart.              | `number`              | `10`          |
| `colors`          | An array of colors to use for the chart lines.                 | `string[]`            | Required      |
| `title`           | The title of the widget.                                       | `string`              | Required      |
| `onFavoriteClick` | Callback function triggered when the favorite icon is clicked. | `() => void`          | Optional      |
| `onDeleteClick`   | Callback function triggered when the delete icon is clicked.   | `() => void`          | Optional      |

## Features

- **Interactive Filtering**: The widget includes a selectable filter via a dropdown that allows users to filter the data based on the available options.
- **Stacked Line Chart**: It renders a stacked line chart using the `StackedChart` component. The chart is dynamically updated based on the selected data.
- **Selectable Data**: Users can select specific data from the collection and view detailed information.
- **Customizable Colors**: The chart colors are customizable via the `colors` prop.
- **Detailed View**: Upon selecting a data item, a detailed view for that item is displayed, which can be customized.

## Notes

- The widget uses the `BaseWidget` component for layout and standard features (such as the favorite and delete buttons).
- The `renderSelectedContent` prop is used to render custom content for the selected data item.
- The `currentItemIdx` state keeps track of the currently selected data item for detailed view.
