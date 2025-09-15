# Tooltip Component

## Overview

`Tooltip` is a React component that provides a styled tooltip interface based on Material-UI's Tooltip component. It offers a consistent look and feel with the project's design system, including blur effects and theme-aware styling.

## Features

- Custom styled tooltip with consistent design
- Theme-aware background and text colors
- Backdrop filter blur effect for modern appearance
- Responsive sizing with min-content constraints
- Full compatibility with Material-UI Tooltip props

## Props

The component accepts all standard Material-UI Tooltip props. The most commonly used props include:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | Required | The content to display in the tooltip |
| `placement` | `TooltipPlacement` | `'bottom'` | Position of the tooltip relative to its children |
| `arrow` | `boolean` | `false` | Whether to show an arrow pointing to the element |
| `enterDelay` | `number` | `0` | Delay in ms before showing the tooltip |
| `leaveDelay` | `number` | `0` | Delay in ms before hiding the tooltip |

## Usage

```tsx
import { Tooltip } from './Tooltip';

const MyComponent = () => {
    return (
        <Tooltip title="This is a helpful tooltip" placement="top" arrow>
            <Button>Hover me</Button>
        </Tooltip>
    );
};
```

## Advanced Usage

```tsx
<Tooltip 
    title={
        <Stack direction="row" alignItems="center" gap={1}>
            <InfoIcon size={16} />
            <Typography variant="caption">Custom tooltip content</Typography>
        </Stack>
    }
    placement="right"
    enterDelay={500}
    leaveDelay={200}
>
    <IconButton>
        <HelpIcon />
    </IconButton>
</Tooltip>
```

## Styling

The tooltip includes custom styling with:
- Padding: 8px 16px
- Caption typography (12px)
- Semi-transparent background with blur effect
- Rounded corners (8px)
- Subtle border with opacity
- Box shadow for depth

## Theme Integration

The component automatically adapts to the current theme:
- Background color: `theme.palette.background.background14`
- Text color: `theme.palette.text.text6`
- Border color: `theme.palette.border.border3` with 10% opacity

## Accessibility

- Inherits all accessibility features from Material-UI Tooltip
- Proper ARIA attributes for screen readers
- Keyboard navigation support
- Focus management

## Dependencies

- `@mui/material` (for Tooltip component and styling utilities)
- React theme context

## Notes

- The component wraps children in a Box with `display: inline-block` and size constraints
- Backdrop filter effects may not be supported in all browsers
- All standard Material-UI Tooltip features are preserved
