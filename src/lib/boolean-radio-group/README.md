# BooleanRadioGroup Component

## Overview

`BooleanRadioGroup` is a React component that provides a radio group interface for boolean values (true/false). It displays two radio buttons with customizable labels for positive and negative options.

## Features

- Simple boolean selection interface
- Customizable labels for true/false options
- Flexible label positioning and styling
- Type-safe boolean value handling
- Material-UI integration

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | `undefined` | Optional label displayed next to the radio group |
| `labelTypographyVariant` | `CustomTypographyVariant` | `'body1'` | Typography variant for the label |
| `value` | `true \| false` | `undefined` | Current boolean value |
| `positiveLabel` | `string` | `undefined` | Label for the "true"/positive option |
| `negativeLabel` | `string` | `undefined` | Label for the "false"/negative option |
| `handleChange` | `(value: boolean) => void` | `undefined` | Callback fired when selection changes |

## Usage

```tsx
import { BooleanRadioGroup } from './BooleanRadioGroup';

const MyComponent = () => {
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <BooleanRadioGroup
            label="Feature Toggle"
            positiveLabel="Enabled"
            negativeLabel="Disabled"
            value={isEnabled}
            handleChange={setIsEnabled}
        />
    );
};
```

## Advanced Usage with Custom Labels

```tsx
<BooleanRadioGroup
    label={
        <Stack direction="row" alignItems="center" gap={1}>
            <WarningIcon />
            <Typography variant="body2">Security Setting</Typography>
        </Stack>
    }
    positiveLabel="Allow"
    negativeLabel="Block"
    value={securityEnabled}
    handleChange={setSecurityEnabled}
    labelTypographyVariant="h6"
/>
```

## Behavior

- The component renders two radio buttons side by side
- The left radio represents `true` value with `positiveLabel`
- The right radio represents `false` value with `negativeLabel`
- Selection changes trigger the `handleChange` callback with the new boolean value
- The component maintains proper radio group semantics

## Styling

- Uses Material-UI's `FormControl` and `RadioGroup` components
- Label and radio buttons are arranged in a horizontal `Stack`
- Label supports custom typography variants
- Radio buttons use the project's custom `Radio` component

## Dependencies

- `@mui/material` (for FormControl, RadioGroup, Stack)
- `../radio` (for individual radio buttons)
- `../typography` (for text styling)
- `@chirp/ui/styles/theme/template` (for CustomTypographyVariant type)

## Accessibility

- Proper ARIA labels and roles for radio group semantics
- Keyboard navigation support
- Screen reader compatible

## Type Safety

The component uses TypeScript to ensure type safety for boolean values and callback functions.
