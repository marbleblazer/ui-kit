# ListWidget Component

The `ListWidget` component is a versatile list-based widget that displays data in a tabular format with customizable columns and values. It allows users to select an item for further details. The widget supports dynamic rendering of content when an item is selected.

## Installation

Ensure the following dependencies are installed:

```bash
npm install @mui/material
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { ListWidget } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const listData = [
        { name: 'Item A', value: 30 },
        { name: 'Item B', value: 50 },
        { name: 'Item C', value: 20 },
    ];

    return (
        <ListWidget
            title="Item List"
            data={listData}
            nameKey="name"
            valueKey="value"
            columnNames={['Name', 'Value']}
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
| `columnNames`           | An array of column names to be displayed in the header row.                                              | `string[]`                 | Required      |
| `renderSelectedContent` | A function that renders content when an item is selected. It receives the selected item and returns JSX. | `(item: T) => JSX.Element` | Optional      |
| `title`                 | The title of the widget.                                                                                 | `string`                   | Required      |
| `onFavoriteClick`       | Callback function triggered when the favorite icon is clicked.                                           | `() => void`               | Required      |
| `onDeleteClick`         | Callback function triggered when the delete icon is clicked.                                             | `() => void`               | Required      |
| `isFavorite`            | Boolean value indicating if the widget is marked as a favorite.                                          | `boolean`                  | `false`       |
| `deleteDisabled`        | Boolean value indicating if the delete button should be disabled.                                        | `boolean`                  | `false`       |
| `makeFavouriteDisabled` | Boolean value indicating if the favorite button should be disabled.                                      | `boolean`                  | `false`       |

## Features

- **Customizable Columns**: The widget allows dynamic configuration of columns, using the `nameKey` and `valueKey` props to map your data structure.
- **Selectable Items**: When an item is clicked, it can be selected, and detailed content can be displayed via the `renderSelectedContent` prop.
- **Custom Header**: The widget includes a custom header when an item is selected, with a back button to return to the list view.
- **Interactive Behavior**: The widget offers interactive features like marking items as favorites and the ability to delete them, with customizable button states (disabled/enabled).
- **Overflowing List**: The list of items is scrollable when there are more items than can fit in the container.

## Notes

- The widget uses the `BaseWidget` component to provide a consistent layout and features, such as the favorite and delete buttons.
- The `renderSelectedContent` function is optional and is only invoked if an item is selected. It provides the flexibility to display custom content when an item is clicked.
