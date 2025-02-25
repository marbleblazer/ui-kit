# IconButton Component

The `IconButton` component is a custom button component built on top of MUI's `IconButton`. It supports multiple size and variant options, allowing for easy customization of button appearance and behavior. It also handles hover, active, and disabled states, providing a smooth user experience.

## Installation

Ensure the required dependencies are installed:

```bash
npm install @mui/material
```

## Usage

```tsx
import { IconButton } from '@chirpwireless/ui-kit';

<IconButton variant="primary" size="medium" onClick={() => alert('Button clicked')}>
    <SomeIcon />
</IconButton>;
```

## Properties

| Name            | Description                                         | Type                                                                         | Default Value |
| --------------- | --------------------------------------------------- | ---------------------------------------------------------------------------- | ------------- |
| `variant`       | Defines the button style variant.                   | `'primary' 'secondary' 'tertiary' 'outlined' 'gray'`                         | -             |
| `size`          | Defines the button size.                            | `'small'                                             'medium'       'large'` | `'medium'`    |
| `onClick`       | Callback function when the button is clicked.       | `(event: React.MouseEvent<HTMLElement>) => void`                             | -             |
| `children`      | The content of the button, usually an icon or text. | `ReactNode`                                                                  | -             |
| `disableRipple` | Disables the ripple effect when clicked.            | `boolean`                                                                    | `true`        |

## Example

### Basic Example

```tsx
import { IconButton } from '@chirpwireless/ui-kit';

<IconButton variant="primary" size="large" onClick={() => console.log('Icon button clicked')}>
    <SomeIcon />
</IconButton>;
```

### Example with Custom Icon

```tsx
import { IconButton } from '@chirpwireless/ui-kit';
import { SomeCustomIcon } from '@your-library/icons';

<IconButton variant="outlined" size="small" onClick={() => alert('Custom Icon Button clicked')}>
    <SomeCustomIcon />
</IconButton>;
```

## Variants

The `IconButton` component supports the following variants:

- **primary**: A primary button with a background color and text color.
- **secondary**: A secondary button with a border and a background on hover.
- **tertiary**: A tertiary button with a background color change on hover and active states.
- **outlined**: A button with an outlined border.
- **gray**: A gray button with transparent background and hover effect.

## Sizes

The component supports the following sizes:

- **small**: Smaller padding, ideal for compact UI elements.
- **medium**: Default size for standard usage.
- **large**: Larger padding, ideal for prominent actions.

## Customization

- You can easily change the icon inside the button by passing any `ReactNode` as the `children` prop.
- The button supports custom `onClick` behavior by passing a function to the `onClick` prop.

## Notes

- The button's size and variant affect the button's padding, background color, hover state, and text color.
- The `disableRipple` prop is set to `true` by default to prevent the ripple effect from appearing. You can set it to `false` if you want to enable the ripple effect.
