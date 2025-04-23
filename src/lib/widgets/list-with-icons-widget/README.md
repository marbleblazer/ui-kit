# ListWithIconsWidget Component

## Overview

The `ListWithIconsWidget` is a React component that displays a list of items with icons, descriptions, and optional timestamps. It extends the `BaseWidget` component and supports customizable styling, alert states, unread indicators, and dividers. The component is built with Material-UI for theming and supports internationalization via `react-i18next`.

## Features

- Renders a scrollable list of rows with icons or images, descriptions, and timestamps.
- Supports alert states with distinct styling for critical items.
- Displays unread indicators as colored circles.
- Optional dividers between rows.
- Customizable empty state fallback message.
- Clickable rows with event handling.
- Responsive design with Material-UI integration.

## Installation

Ensure the following dependencies are installed in your project:

```bash
npm install react @mui/material react-i18next
```

## Usage

### Example

```jsx
import { ListWithIconsWidget } from './ListWithIconsWidget';
import { Typography } from '@mui/material';

const rowsData = [
    {
        id: 1,
        image: '/path/to/icon.png',
        renderDescription: <Typography>Item 1 Description</Typography>,
        time: '10:00 AM',
        isAlert: true,
        isUnread: true,
    },
    {
        id: 2,
        image: <CustomIcon />,
        renderDescription: <Typography>Item 2 Description</Typography>,
        time: '11:00 AM',
        isUnread: false,
    },
];

const App = () => (
    <ListWithIconsWidget
        title="Notifications"
        rowsData={rowsData}
        emptyFallbackMsg="No items available"
        isDivider={true}
        onRowClick={(id) => console.log(`Row ${id} clicked`)}
        rowSx={{ padding: '8px' }}
    />
);
```

### Props

| Prop                     | Type                   | Description                                                                               | Required | Default |
| ------------------------ | ---------------------- | ----------------------------------------------------------------------------------------- | -------- | ------- |
| `rowsData`               | `Array`                | Array of row data with `id`, `image`, `renderDescription`, `time`, `isAlert`, `isUnread`. | Yes      | -       |
| `iconSx`                 | `SxProps`              | Styles for the icon container.                                                            | No       | `{}`    |
| `rowSx`                  | `SxProps`              | Styles for each row.                                                                      | No       | `{}`    |
| `dividerSx`              | `SxProps`              | Styles for the divider between rows.                                                      | No       | `{}`    |
| `descriptionContainerSx` | `SxProps`              | Styles for the description container.                                                     | No       | `{}`    |
| `onRowClick`             | `(id: number) => void` | Callback function triggered on row click.                                                 | No       | -       |
| `emptyFallbackMsg`       | `string`               | Message displayed when `rowsData` is empty.                                               | Yes      | -       |
| `isDivider`              | `boolean`              | Whether to show dividers between rows.                                                    | No       | `false` |
| `...baseWidgetProps`     | `IBaseWidgetProps`     | Props inherited from `BaseWidget` (e.g., `title`, `mainContainerSx`).                     | No       | -       |

#### `rowsData` Structure

```typescript
{
  id: number;
  image: string | React.ReactNode; // URL for image or custom React component
  renderDescription: React.ReactNode; // Description content
  time?: string; // Optional timestamp
  isAlert?: boolean; // Alert state for styling
  isUnread?: boolean; // Unread indicator
}
```

## Styling

The component uses styled components from `./style` (`S`) and Material-UI's `SxProps` for customization. Helper functions (`getAlertStyles`, `getHoverStyles`) apply conditional styling based on the `isAlert` state.

- **Rows**: Styled with hover effects and clickable behavior when `onRowClick` is provided.
- **Icons**: Support images or custom React nodes, with alert-specific styling.
- **Unread Indicator**: A colored circle (`S.Circle`) styled based on `isAlert`.
- **Dividers**: Optional, rendered between rows when `isDivider` is `true`.

## Dependencies

- **React**: For building the component.
- **@mui/material**: For `Stack`, `SxProps`, and theming.
- **react-i18next**: For internationalization.
- **BaseWidget**: As the foundational layout component.
- **Typography**: Custom typography component for text rendering.

## Notes

- The `image` field in `rowsData` can be a URL (rendered as `<img>`) or a React node (e.g., an icon component).
- The `isAlert` and `isUnread` flags control visual indicators, with colors derived from the Material-UI theme.
- Ensure a `ThemeProvider` wraps your application for Material-UI styling to work correctly.
- The `emptyFallbackMsg` is displayed in a centered `Typography` component when `rowsData` is empty.
- Use `onRowClick` for row-specific interactions, ensuring `event.stopPropagation()` prevents parent container clicks.
