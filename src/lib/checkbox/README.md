# Checkbox

The `Checkbox` component is a customizable checkbox that supports different variants and labels.

## Usage

```tsx
import { Checkbox } from '@chirpwireless/ui-kit';

<Checkbox label="Accept terms" />;
```

## Variants

The `Checkbox` component supports two variants:

- **check** (default): Displays a standard checkbox.
- **visible**: Uses eye icons to toggle visibility.

```tsx
<Checkbox variant="check" label="Default Checkbox" />
<Checkbox variant="visible" label="Visibility Toggle" />
```

## Properties

| Name                   | Description                                     | Type                                 | Default       |
| ---------------------- | ----------------------------------------------- | ------------------------------------ | ------------- |
| label                  | Text or element to display next to the checkbox | `ReactNode`                          |               |
| variant                | Type of checkbox variant                        | `'check' \| 'visible'`               | `'check'`     |
| labelTypographyVariant | Typography variant for the label                | `CustomTypographyVariant`            | `'caption12'` |
| formControlLabelProps  | Additional props for `FormControlLabel`         | `Omit<FormControlLabelProps, 'label' | 'control'>`   |
| ...CheckboxProps       | Any other props supported by MUI's `Checkbox`   |                                      |               |

## Example

```tsx
<Checkbox label="Subscribe to newsletter" />
<Checkbox variant="visible" label="Show Password" />
```
