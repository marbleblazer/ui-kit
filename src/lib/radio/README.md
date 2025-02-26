# Radio Component

A custom radio button component with customizable label and appearance, built using Material UI.

## Usage

```tsx
import { Radio } from '@chirpwireless/ui-kit';

<Radio label="Option 1" variant="check" labelTypographyVariant="body2" onChange={(e) => console.log(e.target.value)} />;
```

### Example with Custom Label Typography

```tsx
<Radio label="Option 1" labelTypographyVariant="h6" variant="visible" />
```

## Properties

| Name                     | Description                                                                              | Type                                 | Default Value |           |
| ------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------- | --------- |
| `label`                  | The label displayed next to the radio button.                                            | `ReactNode`                          | -             |           |
| `variant`                | The variant of the radio button. Can be either 'check' or 'visible'.                     | `'check'                             | 'visible'`    | `'check'` |
| `labelTypographyVariant` | The typography variant for the label text.                                               | `CustomTypographyVariant`            | `'body1'`     |           |
| `formControlLabelProps`  | Additional props for the `FormControlLabel` component (excluding 'label' and 'control'). | `Omit<FormControlLabelProps, 'label' | 'control'>`   | -         |

## Features

- **Customizable Variants**: Choose between `'check'` and `'visible'` for different styles.
- **Custom Typography**: Set the typography variant for the label.
- **Material UI Integration**: Leverages Material UI's
