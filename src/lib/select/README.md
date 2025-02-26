# Select Component

A custom select dropdown component with additional features like clear functionality and customizable styles, built using Material UI.

## Usage

```tsx
import { Select } from '@chirpwireless/ui-kit';

<Select
    label="Select Option"
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
    onClear={() => setSelectedValue('')}
    options={options}
/>;
```

### Example with Clear Button

```tsx
<Select label="Choose a color" value={selectedColor} onClear={() => setSelectedColor('')} options={colorOptions} />
```

## Properties

| Name           | Description                                                                    | Type         | Default Value |
| -------------- | ------------------------------------------------------------------------------ | ------------ | ------------- |
| `label`        | The label for the select input.                                                | `string`     | -             |
| `value`        | The value of the selected option.                                              | `any`        | -             |
| `onClear`      | Function to clear the current selection (optional).                            | `() => void` | -             |
| `MenuProps`    | Props passed to the Menu component.                                            | `object`     | -             |
| `endAdornment` | Optional adornment to add at the end of the select input (e.g., clear button). | `ReactNode`  | -             |
| `labelId`      | The ID for the label of the select component.                                  | `string`     | -             |
| `disabled`     | Whether the select is disabled.                                                | `boolean`    | `false`       |
| `placeholder`  | Placeholder text to be displayed when no option is selected.                   | `string`     | -             |

## Features

- **Clear Button**: Optionally adds a clear button to reset the selected value.
- **Customizable Styles**: The select input supports customizable styling and themes.
- **Responsive**: Fully responsive and adapts to different screen sizes.
- **Material UI Integration**: Uses Material UI components, styled with the theme.

## Example

```tsx
<Select label="Select a Fruit" value={selectedFruit} onClear={() => setSelectedFruit('')} options={fruitOptions} />
```
