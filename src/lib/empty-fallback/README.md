# EmptyFallback Component

## Overview

`EmptyFallback` is a React component designed to display placeholder content when there is no data to show. It provides a clean, consistent empty state with optional background patterns, text, and action buttons.

## Features

- **Empty State Display** - Clean visual representation for empty content areas
- **Customizable Text** - Configurable title and subtitle
- **Background Pattern** - Optional repeating background icon
- **Action Support** - Ability to add buttons or other interactive elements
- **Theme Integration** - Material-UI theme-aware styling
- **Flexible Layout** - Centered content with customizable container styles
- **Responsive Design** - Adapts to different container sizes

## Usage

```tsx
import { EmptyFallback } from '@chirpwireless/ui-kit';

<EmptyFallback
  title="No data available"
  subTitle="Add some items to get started"
  withBackground={true}
  action={<Button>Add Item</Button>}
/>;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Main title text for the empty state |
| `subTitle` | `string` | `undefined` | Secondary description text |
| `withBackground` | `boolean` | `true` | Show/hide the background pattern |
| `action` | `ReactNode` | `undefined` | Action button or element to display |
| `containerSx` | `SxProps` | `undefined` | Additional Material-UI sx props for the container |

## Styling

### Container Styles
- Flexbox layout with centered content
- Gap: 8px between elements
- Height and width: 100% of parent container
- Background: Optional repeating pattern from `empty-fallback-cover.svg`
- Customizable via `containerSx` prop

### Typography
- **Title**: `text13` variant with `text.text4` color
- **Subtitle**: `caption12` variant with `text.text8` color
- Theme-aware colors that adapt to light/dark modes

### Background Pattern
The component uses a repeating background pattern from:
`@chirp/ui/assets/fleet-icons/empty-fallback-cover.svg`

The background can be disabled by setting `withBackground={false}`

## Examples

### Basic Empty State
```tsx
<EmptyFallback
  title="No results found"
  subTitle="Try adjusting your search criteria"
/>
```

### With Action Button
```tsx
<EmptyFallback
  title="Your cart is empty"
  subTitle="Add some products to get started"
  action={
    <Button variant="primary" onClick={handleShopNow}>
      Shop Now
    </Button>
  }
/>
```

### Without Background
```tsx
<EmptyFallback
  title="No notifications"
  withBackground={false}
  containerSx={{ padding: 2 }}
/>
```

### Custom Styling
```tsx
<EmptyFallback
  title="Empty Section"
  subTitle="This section will display content when available"
  containerSx={{
    border: '1px dashed',
    borderColor: 'border.border3',
    borderRadius: 2,
    padding: 3
  }}
/>
```

## Use Cases

### Data Tables
Display when no records are available in data tables or lists.

### Search Results
Show when search queries return no results.

### Empty Collections
For empty carts, wishlists, or other user collections.

### Dashboard Widgets
Placeholder for widgets that haven't been configured yet.

### Loading States
Can be used as a placeholder during loading (though primarily for empty states).

## Dependencies

- `@mui/material` - Core Material-UI components and styling
- `../typography` - Typography components for consistent text styling
- `@chirp/ui/assets/fleet-icons` - Background pattern icon

## Accessibility

- Semantic HTML structure
- Proper text contrast ratios
- Screen reader compatible
- Keyboard navigable when actions are present
- ARIA labels for interactive elements

## Performance

- Lightweight component with minimal dependencies
- Efficient re-rendering with proper prop handling
- No external images or heavy assets (SVG background is inline)

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- SVG background support
- Responsive design principles

## Notes

- The component is designed to fill its parent container
- Works well in both light and dark themes
- Background pattern provides visual interest without being distracting
- Action elements should be provided as React nodes
- Custom styling can be applied through the `containerSx` prop

## Integration Tips

- Use consistent empty states across your application
- Provide clear, actionable messages when appropriate
- Consider context-specific empty states for different sections
- Test with both light and dark themes to ensure readability
