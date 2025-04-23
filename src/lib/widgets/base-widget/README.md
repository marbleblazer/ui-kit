# BaseWidget Component

## Overview

The `BaseWidget` is a flexible React component that serves as a foundational layout for widget-style UI elements. It provides a customizable container with a header, optional subheader, and main content area. The component is built with Material-UI for styling and supports click events and responsive design.

## Features

- Customizable header with left and right content areas.
- Optional subheader for additional context or controls.
- Main content area for rendering primary widget content.
- Clickable container with optional cursor styling.
- Fully customizable via Material-UI `SxProps` for styling.

## Installation

Ensure the following dependencies are installed in your project:

```bash
npm install @mui/material
```

## Usage

### Example

```jsx
import { BaseWidget } from './BaseWidget';
import { Typography } from '@mui/material';

const App = () => (
    <BaseWidget
        renderLeftHeaderContent={<Typography variant="h6">Widget Title</Typography>}
        renderRightHeaderContent={<button>Action</button>}
        renderSubHeader={<Typography variant="caption">Subheader content</Typography>}
        renderMainContent={<div>Main widget content</div>}
        onContainerClick={() => console.log('Container clicked!')}
        mainContainerSx={{ border: '1px solid #ccc', padding: '16px' }}
    />
);
```

### Props

| Prop                         | Type              | Description                                     | Required | Default |
| ---------------------------- | ----------------- | ----------------------------------------------- | -------- | ------- |
| `mainContainerSx`            | `SxProps`         | Styles for the main container.                  | No       | `{}`    |
| `headerSx`                   | `SxProps`         | Styles for the header container.                | No       | `{}`    |
| `leftHeaderContentSx`        | `SxProps`         | Styles for the left header content.             | No       | `{}`    |
| `rightHeaderContentSx`       | `SxProps`         | Styles for the right header content.            | No       | `{}`    |
| `headerSubheaderContainerSx` | `SxProps`         | Styles for the header and subheader container.  | No       | `{}`    |
| `renderLeftHeaderContent`    | `React.ReactNode` | Content to render in the left header area.      | No       | -       |
| `renderRightHeaderContent`   | `React.ReactNode` | Content to render in the right header area.     | No       | -       |
| `renderMainContent`          | `React.ReactNode` | Main content of the widget.                     | No       | -       |
| `renderSubHeader`            | `React.ReactNode` | Optional subheader content.                     | No       | -       |
| `onContainerClick`           | `() => void`      | Callback function triggered on container click. | No       | -       |

## Styling

The component uses styled components from `./style` (`S`) and Material-UI's `SxProps` for customization. The container's cursor changes to `pointer` when `onContainerClick` is provided.

### Layout

- **Header**: Contains `leftHeaderContent` and `rightHeaderContent`.
- **Subheader**: Rendered below the header when `renderSubHeader` is provided, wrapped in a `Stack` with a default gap of `12px`.
- **Main Content**: Rendered below the header or subheader.

## Dependencies

- **@mui/material**: For the `Stack` component and `SxProps` styling.
- **React**: For building the component.

## Notes

- The component is designed to be a generic wrapper for widgets. Customize its appearance using `SxProps` or styled components in `./style`.
- Ensure a `ThemeProvider` wraps your application for Material-UI styling to work correctly.
- The `onContainerClick` prop makes the entire container clickable, ideal for interactive widgets.
