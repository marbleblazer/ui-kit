# ListWidgetWithFilters Component

The `ListWidgetWithFilters` component is a versatile list widget that displays data in a tabular format, allowing for customizable filtering and rendering of detailed content for selected items. It includes filter functionality, which can be added via the `renderFilters` prop, giving users the ability to filter the data before selecting an item.

## Installation

Ensure the following dependencies are installed:

```bash
npm install @mui/material
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { ListWidgetWithFilters } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const listData = [
        { name: 'Item A', value: 30 },
        { name: 'Item B', value: 50 },
        { name: 'Item C', value: 20 },
    ];

    const renderFilters = (
        <div>
            <button>Filter Option 1</button>
            <button>Filter Option 2</button>
        </div>
    );

    return (
        <ListWidgetWithFilters
            title="Item List"
            data={listData}
            nameKey="name"
            valueKey="value"
            columnNames={['Name', 'Value']}
            renderFilters={renderFilters}
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

| Name                    | Description                                                                                              | Type                       | Default Value |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `data`                  | The array of items to display.                                                                           | `T[]`                      | Required      |
| `nameKey`               | The key from each item in `data` to be displayed as the name in the list.                                | `keyof T`                  | Required      |
| `valueKey`              | The key from each item in `data` to be displayed as the value in the list.                               | `keyof T`                  | Required      |
| `renderFilters`         | A JSX element for custom filters that can be rendered at the top of the widget.                          | `JSX.Element`              | Optional      |
| `renderSelectedContent` | A function that renders content when an item is selected. It receives the selected item and returns JSX. | `(item: T) => JSX.Element` | Required      |
| `title`                 | The title of the widget.                                                                                 | `string`                   | Required      |
| `onFavoriteClick`       | Callback function triggered when the favorite icon is clicked.                                           | `() => void`               | Required      |
| `onDeleteClick`         | Callback function triggered when the delete icon is clicked.                                             | `() => void`               | Required      |
| `isFavorite`            | Boolean value indicating if the widget is marked as a favorite.                                          | `boolean`                  | `false`       |
| `deleteDisabled`        | Boolean value indicating if the delete button should be disabled.                                        | `boolean`                  | `false`       |
| `makeFavouriteDisabled` | Boolean value indicating if the favorite button should be disabled.                                      | `boolean`                  | `false`       |

## Features

- **Customizable Filters**: The widget allows the addition of custom filter elements via the `renderFilters` prop. This gives users the ability to filter the data before selecting an item.
- **Selectable Items**: When an item is clicked, it can be selected, and detailed content is displayed via the `renderSelectedContent` prop.
- **Custom Header**: The widget includes a custom header when an item is selected, with a back button to return to the list view.
- **Interactive Behavior**: The widget supports marking items as favorites and allows deletion, with customizable button states (disabled/enabled).
- **Overflowing List**: The list of items is scrollable when there are more items than can fit in the container.

## Notes

- The widget uses the `BaseWidget` component to provide a consistent layout and features, such as the favorite and delete buttons.
- The `renderSelectedContent` function is optional and is only invoked if an item is selected. It provides flexibility to display custom content when an item is clicked.
- The `renderFilters` prop enables custom filter options, making the widget more dynamic by allowing users to narrow down the list before interacting with the items.
