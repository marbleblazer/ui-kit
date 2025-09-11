# AccordionRadioGroup Component

## Overview

`AccordionRadioGroup` is a React component that combines an accordion interface with radio group functionality. It allows users to toggle between "All" and "None" options while also providing individual control over nested items.

## Features

- Expandable/collapsible accordion interface
- Master toggle for selecting all/none items
- Individual radio controls for each child item
- Customizable labels and child item rendering
- Type-safe generic implementation

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | Required | The main label displayed in the accordion header |
| `positiveLabel` | `string` | Required | Label for the "true"/positive radio option |
| `negativeLabel` | `string` | Required | Label for the "false"/negative radio option |
| `childrens` | `T extends Record<string, boolean>` | Required | Object containing child items with boolean values |
| `resolveChildrenLabel` | `(key: keyof T) => ReactNode \| string` | `undefined` | Function to resolve custom labels for child items |
| `onChange` | `(data: T) => void` | Required | Callback fired when any selection changes |

## Usage

```tsx
import { AccordionRadioGroup } from './AccordionRadioGroup';

const MyComponent = () => {
    const [permissions, setPermissions] = useState({
        read: true,
        write: false,
        delete: false,
        admin: true
    });

    const resolvePermissionLabel = (key: string) => {
        const labels = {
            read: 'Read Access',
            write: 'Write Access', 
            delete: 'Delete Access',
            admin: 'Administrator'
        };
        return labels[key] || key;
    };

    return (
        <AccordionRadioGroup
            label="User Permissions"
            positiveLabel="Allow"
            negativeLabel="Deny"
            childrens={permissions}
            resolveChildrenLabel={resolvePermissionLabel}
            onChange={setPermissions}
        />
    );
};
```

## Behavior

- The master toggle selects/deselects all child items simultaneously
- Individual child toggles update their specific values
- The master toggle state automatically updates based on child selections
- All changes are propagated through the `onChange` callback

## Dependencies

- `@mui/material` (for Accordion, Stack, Box components)
- `../boolean-radio-group` (for individual radio controls)
- `../select-indicator` (for expand/collapse icon)
- `../typography` (for text styling)

## Styling

The component uses custom styled components with hover effects and theme-aware colors. Styles can be customized through the `style.ts` file.

## Type Safety

The component uses TypeScript generics to ensure type safety for the `childrens` object and related operations.
