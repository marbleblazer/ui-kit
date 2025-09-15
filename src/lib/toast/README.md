# Toast Component

## Overview

`Toast` is a React component that provides a styled toast notification interface. It is designed to work with toast notification libraries (like react-toastify) and provides a consistent look and feel with the project's design system.

## Features

- Custom styled toast notifications
- Theme-aware background and border colors
- Consistent typography and spacing
- Fixed width with responsive height
- Integration with toast notification systems

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `ReactNode` | Required | The content to display in the toast notification |
| `sx` | `SxProps` | `undefined` | Additional Material-UI style props for custom styling |

## Usage

### Basic Usage
```tsx
import { Toast } from './Toast';
import { toast } from 'react-toastify';

const showNotification = () => {
    toast(<Toast message="Operation completed successfully" />, {
        position: "top-right",
        autoClose: 3000,
    });
};
```

### With Custom Styling
```tsx
<Toast 
    message={
        <Stack direction="row" alignItems="center" gap={1}>
            <SuccessIcon />
            <span>Custom success message</span>
        </Stack>
    }
    sx={{ 
        background: theme.palette.success.main,
        border: `1px solid ${theme.palette.success.light}`
    }}
/>
```

## Styling

The toast includes predefined styling with:
- Background: `theme.palette.background.background1`
- Border: 1px solid with input border color at 14% opacity
- Padding: 10px 16px (with 40px right padding for close button)
- Border radius: 8px
- Fixed width: 400px
- Minimum height: 62px
- Typography: body1 with textInput60 color

## Integration with Toast Libraries

The component is designed to work with toast notification libraries. Here's an example with react-toastify:

```tsx
import { toast } from 'react-toastify';
import { Toast } from './Toast';

// Success toast
const showSuccess = (message: string) => {
    toast.success(<Toast message={message} />);
};

// Error toast  
const showError = (message: string) => {
    toast.error(<Toast message={message} />);
};

// Custom toast
const showCustom = (message: ReactNode, options = {}) => {
    toast(<Toast message={message} />, options);
};
```

## Theme Integration

The component automatically adapts to the current theme:
- Background color from theme palette
- Border color with theme-aware opacity
- Text color from theme typography settings

## Dependencies

- `@mui/material` (for styling and Stack component)
- `../typography` (for consistent text styling)
- Toast notification library (react-toastify recommended)

## Accessibility

- Proper text contrast ratios
- Semantic HTML structure
- Support for screen readers
- Keyboard navigation compatible

## Notes

- The component is designed as a content container for toast systems
- Actual toast display and management should be handled by a toast library
- The 40px right padding accommodates standard close buttons
- Width is fixed at 400px for consistency across notifications
