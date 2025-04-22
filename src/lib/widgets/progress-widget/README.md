# ProgressWidget Component

## Overview

The `ProgressWidget` is a React component that displays a segmented progress bar with percentage labels and a legend. It extends the `BaseWidget` component and is designed to visualize proportional data, such as contributions to a total value. The component uses Material-UI for styling and includes sub-components for rendering labels and percentage indicators.

## Features

- Renders a segmented progress bar with customizable colors.
- Displays percentage labels above the progress bar.
- Includes a legend for identifying segments.
- Supports dynamic data with varying segment sizes.
- Responsive design with Material-UI integration.

## Installation

Ensure the following dependencies are installed in your project:

```bash
npm install react @mui/material
```

## Usage

### Example

```jsx
import { ProgressWidget } from './ProgressWidget';

const data = [
    { label: 'Category A', value: 50, color: '#FF5733' },
    { label: 'Category B', value: 30, color: '#33FF57' },
    { label: 'Category C', value: 20, color: '#3357FF' },
];

const App = () => <ProgressWidget title="Progress Breakdown" data={data} mainContainerSx={{ padding: '16px' }} />;
```

### Props

| Prop                 | Type                 | Description                                                           | Required | Default |
| -------------------- | -------------------- | --------------------------------------------------------------------- | -------- | ------- |
| `data`               | `IProgressSegment[]` | Array of segments with `label`, `value`, and `color`.                 | Yes      | -       |
| `...baseWidgetProps` | `IBaseWidgetProps`   | Props inherited from `BaseWidget` (e.g., `title`, `mainContainerSx`). | No       | -       |

#### `IProgressSegment`

```typescript
interface IProgressSegment {
    label: string;
    value: number;
    color: string;
}
```

## Styling

The component uses styled components from `./style` (`S`) and Material-UI's `Box` and `Stack` for layout. The progress bar segments are dynamically sized based on their percentage of the total value.

- **Progress Bar**: Rendered via `S.ProgressContainer` and `S.ProgressSegment`, with segments positioned using percentage-based `left` offsets.
- **Percentage Labels**: Handled by the `PercentLabels` sub-component, positioned above the progress bar.
- **Legend**: Rendered by the `Labels` sub-component as the subheader.

## Dependencies

- **React**: For building the component.
- **@mui/material**: For `Box`, `Stack`, and styling.
- **BaseWidget**: As the foundational layout component.
- **PercentLabels**: Sub-component for rendering percentage labels.
- **Labels**: Sub-component for rendering the legend.

## Notes

- The `data` prop must contain at least one segment with a positive `value` to render the progress bar correctly.
- The total value is calculated by summing the `value` fields of all segments.
- Segment widths are calculated as percentages of the total, ensuring the progress bar fills the container.
- The `mainContainerSx` prop defaults to a `32px` gap between elements, which can be overridden.
- Ensure a `ThemeProvider` wraps your application for Material-UI styling to work correctly.
- The `PercentLabels` and `Labels` sub-components must be properly configured in the `./percent-labels` and `./labels` directories.
