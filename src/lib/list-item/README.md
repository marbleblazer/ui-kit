# ListItem Component

## Overview

`ListItem` is a versatile React component library for creating styled list items with various configurations including basic list items, checkable items, and accordion-style expandable items. It provides a consistent design system for list-based interfaces.

## Features

- **Base List Items** - Simple list items with title and optional subtitle
- **Checkable Items** - List items with checkbox controls
- **Accordion Items** - Expandable list items with collapsible content
- **Theme-aware styling** - Material-UI integration with consistent theming
- **Hover effects** - Interactive hover states with color changes
- **Secondary actions** - Support for action buttons and icons
- **Responsive design** - Mobile-friendly layout and styling

## Usage

```tsx
import ListItem from '@chirpwireless/ui-kit/lib/list-item';

// Basic list item
<ListItem
  title="Item Title"
  subTitle="Optional subtitle"
/>

// Checkable list item  
<ListItem
  title="Checkable Item"
  checkboxProps={{ variant: 'check' }}
/>

// Accordion list item
<ListItem.Accordion
  title="Accordion Item"
  secondaryAction={<ActionButtons />}
>
  <Typography>Expanded content here</Typography>
</ListItem.Accordion>
```

## Component Variants

### BaseListItem

Basic list item with title and optional subtitle.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Required title text |
| `subTitle` | `string` | Optional subtitle text |
| `checkboxProps` | `Omit<ICheckboxProps, 'label'>` | Checkbox configuration |
| `secondaryAction` | `ReactNode` | Action buttons or icons |

### AccordionItem

Expandable list item with collapsible content area.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Required title text |
| `key` | `string \| number` | Unique key for the item |
| `checkboxProps` | `Omit<ICheckboxProps, 'label'>` | Checkbox configuration |
| `accordionProps` | `Omit<AccordionProps, 'children'>` | Additional accordion props |
| `secondaryAction` | `ReactNode` | Action buttons or icons |
| `children` | `ReactNode` | Content to show when expanded |

## Checkbox Variants

The component supports different checkbox types:

- `check` - Standard checkbox with checkmark
- `visible` - Visibility toggle style checkbox

## Styling

### Base List Item Styles
- Height: 56px
- Padding: 8px 12px  
- Border bottom with theme color
- Hover background: `theme.palette.background.background7`
- Hover text color: `theme.palette.base.color6`

### Accordion Styles
- Expand/collapse animation
- Custom hover effects on summary wrapper
- Theme-colored icons and text
- Rounded corners on hover

### Typography
- Title: `body1` variant with `text.text4` color
- Subtitle: `caption12` variant with `text.text8` color
- Accordion title: `body1` variant with `text.text14` color

## Examples

### Basic List
```tsx
<List sx={{ width: '500px' }}>
  <ListItem title="First Item" subTitle="Description" />
  <ListItem title="Second Item" />
  <ListItem title="Third Item" subTitle="More details" />
</List>
```

### Checkable List
```tsx
<List sx={{ width: '500px' }}>
  <ListItem 
    title="Item with Checkbox" 
    checkboxProps={{ variant: 'check' }}
    secondaryAction={
      <Stack direction="row">
        <IconButton variant="gray"><PenIcon /></IconButton>
        <IconButton variant="gray"><TrashIcon /></IconButton>
      </Stack>
    }
  />
</List>
```

### Accordion List
```tsx
<List sx={{ width: '500px' }}>
  <ListItem.Accordion
    title="Expandable Item"
    secondaryAction={
      <Stack direction="row">
        <IconButton size="small" variant="gray"><PenIcon /></IconButton>
        <IconButton size="small" variant="gray"><TrashIcon /></IconButton>
      </Stack>
    }
  >
    <Typography variant="caption12" color="text.text4">
      Detailed content that appears when expanded
    </Typography>
  </ListItem.Accordion>
</List>
```

## Dependencies

- `@mui/material` - Core Material-UI components and styling
- `@mui/icons-material` - Icon components
- `../../checkbox` - Checkbox component
- `../../typography` - Typography components  
- `../../select-indicator` - Select indicator for accordions

## Accessibility

- Proper semantic HTML structure
- Keyboard navigation support
- Screen reader compatible
- ARIA labels for interactive elements
- Focus management for accordions

## Internationalization

The component uses the project's typography system which supports internationalization through theme configuration.

## Performance

- Uses Material-UI's styled components for efficient styling
- Memoization where appropriate
- Efficient re-rendering with proper prop handling

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Mobile browsers with touch support
- Screen reader compatibility

## Notes

- The component is designed for use within Material-UI List components
- Supports both light and dark themes through Material-UI theming
- Hover effects are optimized for both mouse and touch devices
- Accordion animations use Material-UI's transition system
