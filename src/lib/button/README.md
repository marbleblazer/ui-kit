# Button

The `Button` component provides a styled button with multiple variants and sizes, built using MUI's `Button` and `styled` API.

## Usage

```tsx
import { Button } from '@chirpwireless/ui-kit';

<Button variant="primary" size="large">
    Click me
</Button>;
```

## Variants

The component supports the following variants:

- `primary` (default)
- `secondary`
- `tertiary`
- `text`
- `outlined`

## Sizes

The component supports three sizes:

- `large`
- `medium`
- `small`

## Properties

| Name      | Description                              | Type                                                 | Default     |
| --------- | ---------------------------------------- | ---------------------------------------------------- | ----------- |
| fullWidth | If `true`, button takes full width       | `boolean` `false`                                    |             |
| size      | Button size (`large`, `medium`, `small`) | `'large'   'medium'    'small'`                      | `'medium'`  |
| variant   | Button variant                           | `'primary' 'secondary' 'tertiary' 'text' 'outlined'` | `'primary'` |

## Styling

The `Button` component adapts to the theme, applying different colors, paddings, and behaviors based on the `variant` and `size` props. The styles include:

- `primary`: Background color from `theme.palette.base.color6`, hover effect, and disabled state.
- `secondary`: Slightly different background with border and hover effects.
- `tertiary`: Subtle background with text color adaptation.
- `text`: Minimal button style without background.
- `outlined`: Transparent background with a border.

## Example with Custom Styles

```tsx
<Button variant="outlined" size="small">
    Cancel
</Button>
```
