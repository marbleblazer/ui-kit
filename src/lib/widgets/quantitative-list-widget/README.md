# QuantitativeListWidget Component

## Overview

The `QuantitativeListWidget` is a React component that displays a list of items with labels, values, and associated statuses, each accompanied by a colored circle and a quantity badge. It extends the `BaseWidget` component and is designed for visualizing categorized data with quantities, such as metrics or counts. The component uses Material-UI for styling and supports clickable items.

## Features

- Renders a list of items with colored circles, labels, and quantity badges.
- Supports clickable list items with event handling.
- Customizable styling for the list container and individual items.
- Responsive design with Material-UI integration.
- Dynamic border styling for list items, with the last item having no bottom border.

## Installation

Ensure the following dependencies are installed in your project:

```bash
npm install react @mui/material
```

## Usage

### Example

```jsx
import { QuantitativeListWidget } from './QuantitativeListWidget';

const data = [
    { value: 10, status: 'active', color: '#FF5733', label: 'Active Users' },
    { value: 5, status: 'inactive', color: '#33FF57', label: 'Inactive Users' },
    { value: 3, status: 'pending', color: '#3357FF', label: 'Pending Users' },
];

const App = () => (
    <QuantitativeListWidget
        title="User Status"
        data={data}
        onItemClick={(status) => console.log(`Clicked: ${status}`)}
        listContainerSx={{ padding: '16px' }}
    />
);
```

### Props

| Prop                 | Type                     | Description                                                             | Required | Default |
| -------------------- | ------------------------ | ----------------------------------------------------------------------- | -------- | ------- |
| `data`               | `IListItem[]`            | Array of list items with `value`, `status`, `color`, and `label`.       | Yes      | -       |
| `listContainerSx`    | `SxProps`                | Styles for the list container.                                          | No       | `{}`    |
| `listItemSx`         | `SxProps`                | Styles for individual list items.                                       | No       | `{}`    |
| `onItemClick`        | `(item: string) => void` | Callback function triggered on item click, passing the item's `status`. | No       | -       |
| `...baseWidgetProps` | `IBaseWidgetProps`       | Props inherited from `BaseWidget` (e.g., `title`, `mainContainerSx`).   | No       | -       |

#### `IListItem`

```typescript
interface IListItem {
    value: number;
    status: string;
    color: string;
    label: string;
}
```

## Styling

The component uses styled components from `./style` (`S`) and Material-UI's `Stack` and `SxProps` for layout and customization.

- **List Items**: Rendered via `S.ListItem`, with a bottom border (except for the last item) using the theme's `border.border3` color.
- **Circles**: Rendered via `S.Circle`, styled with the item's `color`.
- **Quantity Badges**: Rendered via `S.QuantityBox`, with a background color derived from the item's `color` at 20% opacity.
- **Typography**: Uses a custom `Typography` component for labels, styled with the theme's `text.text1` color.

## Dependencies

- **React**: For building the component.
- **@mui/material**: For `Stack`, `Box`, `alpha`, and `SxProps`.
- **BaseWidget**: As the foundational layout component.
- **Typography**: Custom typography component for text rendering.

## Notes

- The `onItemClick` prop triggers a callback with the item's `status`, and `event.stopPropagation()` prevents parent container click events.
- The last list item has no bottom border for a cleaner appearance.
- Ensure a `ThemeProvider` wraps your application for Material-UI styling to work correctly.
- The `listContainerSx` and `listItemSx` props allow for fine-grained styling of the list and its items.
- The quantity badge's background uses `alpha` to create a translucent effect based on the item's color.
