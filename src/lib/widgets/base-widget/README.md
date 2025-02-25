# BaseWidget Component

The `BaseWidget` component is a flexible widget that can be used to display various types of data, such as period-based or online data. It includes functionality for marking the widget as a favorite and for deleting the widget, both of which are customizable through props.

## Installation

Ensure you have the necessary dependencies installed:

```bash
npm install @mui/material react-i18next @chirp/ui
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { BaseWidget } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleDeleteClick = () => {
        console.log('Widget deleted');
    };

    return (
        <BaseWidget
            type="period"
            title="Widget Title"
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
            onDeleteClick={handleDeleteClick}
        >
            {/* Content inside the widget */}
        </BaseWidget>
    );
};
```

### Custom Header

You can customize the header by passing a `customHeader` component:

```tsx
<BaseWidget
    type="online"
    title="Custom Widget"
    onFavoriteClick={handleFavoriteClick}
    onDeleteClick={handleDeleteClick}
    customHeader={<div>Custom Header Content</div>}
>
    {/* Widget content */}
</BaseWidget>
```

### Props

| Name                    | Description                                                                                  | Type                   | Default Value |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------- | ------------- |
| `type`                  | Type of the widget, either `period` (period-based data) or `online` (real-time online data). | `'period' \| 'online'` | Required      |
| `title`                 | The title of the widget.                                                                     | `string`               | Required      |
| `isFavorite`            | Boolean value indicating if the widget is marked as a favorite.                              | `boolean`              | `false`       |
| `customHeader`          | Custom header content to replace the default header.                                         | `React.ReactNode`      | `undefined`   |
| `onFavoriteClick`       | Callback function triggered when the favorite icon is clicked.                               | `() => void`           | Required      |
| `onDeleteClick`         | Callback function triggered when the delete icon is clicked.                                 | `() => void`           | Required      |
| `wrapperSxProps`        | Custom styling for the wrapper of the widget.                                                | `SxProps`              | `undefined`   |
| `deleteDisabled`        | Boolean value indicating if the delete button should be disabled.                            | `boolean`              | `false`       |
| `makeFavouriteDisabled` | Boolean value indicating if the favorite button should be disabled.                          | `boolean`              | `false`       |

## Features

- **Favorite Button**: Toggles the favorite state when clicked. The state is represented by a filled or outlined star icon.
- **Delete Button**: Allows users to delete the widget when clicked. The button can be disabled via the `deleteDisabled` prop.
- **Custom Header**: You can replace the default header with custom content by passing a `customHeader` component.
- **Data Type Display**: The widget supports displaying different types of data (`period` or `online`), and the type is reflected in the header.
- **Flexible Styling**: Customize the appearance using `wrapperSxProps`.

## Notes

- The widget's favorite and delete functionality are triggered by the `onFavoriteClick` and `onDeleteClick` props, respectively.
- The component uses Material-UI components, like `IconButton` and `Stack`, for layout and interaction.
- The `children` prop is used to pass the main content inside the widget.
