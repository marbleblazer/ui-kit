# DonutWidget Component

The `DonutWidget` component is a specialized widget that displays a donut chart with interactive elements. It allows for selecting a segment of the donut chart to view more detailed content associated with that segment. The widget is highly customizable with color options and the ability to pass in dynamic data and content rendering.

## Installation

Make sure you have the necessary dependencies installed:

```bash
npm install @mui/material @chirp/ui
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { DonutWidget } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const [selectedItem, setSelectedItem] = useState([]);

    const donutData = [
        { name: 'Category A', value: 30 },
        { name: 'Category B', value: 50 },
        { name: 'Category C', value: 20 },
    ];

    const colors = ['#FF5733', '#33FF57', '#3357FF'];

    return (
        <DonutWidget
            data={donutData}
            colors={colors}
            title="Donut Chart Widget"
            renderSelectedContent={(item) => (
                <div>
                    <h3>{item.name}</h3>
                    <p>Value: {item.value}</p>
                </div>
            )}
            onFavoriteClick={() => console.log('Favorite clicked')}
            onDeleteClick={() => console.log('Delete clicked')}
        />
    );
};
```

### Props

| Name                    | Description                                                                                | Type                                        | Default Value |
| ----------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------- |
| `data`                  | Array of donut chart data objects. Each object should have `name` and `value`.             | `DonutChartDataType[]`                      | Required      |
| `colors`                | Array of colors to be used in the donut chart for each data point.                         | `string[]`                                  | Required      |
| `centerText`            | Text to be displayed in the center of the donut chart.                                     | `string`                                    | `undefined`   |
| `renderSelectedContent` | A function that receives the selected item and returns JSX for rendering detailed content. | `(item: DonutChartDataType) => JSX.Element` | Required      |
| `title`                 | Title of the widget.                                                                       | `string`                                    | Required      |
| `onFavoriteClick`       | Callback function triggered when the favorite icon is clicked.                             | `() => void`                                | Required      |
| `onDeleteClick`         | Callback function triggered when the delete icon is clicked.                               | `() => void`                                | Required      |
| `isFavorite`            | Boolean value indicating if the widget is marked as a favorite.                            | `boolean`                                   | `false`       |
| `deleteDisabled`        | Boolean value indicating if the delete button should be disabled.                          | `boolean`                                   | `false`       |
| `makeFavouriteDisabled` | Boolean value indicating if the favorite button should be disabled.                        | `boolean`                                   | `false`       |

## Features

- **Interactive Donut Chart**: The donut chart is clickable, allowing users to select a segment and view detailed content associated with it.
- **Customizable Content Rendering**: The `renderSelectedContent` prop allows you to define custom content for when a segment is selected.
- **Custom Header**: The widget supports a custom header that updates based on the selected segment. The header can include a back button to navigate back to the main chart view.
- **Color Customization**: The colors of the donut chart are customizable via the `colors` prop.
- **Favorite and Delete Functionality**: The widget includes built-in functionality to mark it as a favorite and to delete it, with the ability to disable these actions via props.

## Notes

- The donut chart is implemented using the `DonutChart` component from `@chirp/ui`.
- The `ColorListItem` component is used to list each data point, and the user can click on a data point to select it.
- You can customize the selected content and the appearance of the widget to fit your needs.
