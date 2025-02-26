# ColorPicker Component

A customizable color picker component that allows users to select and modify colors, including setting alpha transparency. It provides a color input field and displays a color palette for quick color selection.

## Installation

Ensure the required dependencies are installed:

```bash
npm install @mui/material react-colorful
```

## Usage

```tsx
import { ColorPicker } from '@chirpwireless/ui-kit';

const handleColorChange = (value: string) => {
    console.log(`Selected color: ${value}`);
};

<ColorPicker color="#FF5733" onChange={handleColorChange} label="Pick a Color" />;
```

## Properties

| Name             | Description                                                   | Type                       | Default Value             |
| ---------------- | ------------------------------------------------------------- | -------------------------- | ------------------------- |
| `color`          | The current color in HEX format (with or without alpha).      | `string`                   | -                         |
| `onChange`       | A function that is triggered when the color is changed.       | `(value: string) => void`  | -                         |
| `label`          | The label for the input field.                                | `ReactNode`                | -                         |
| `previousColors` | A list of previous colors displayed as clickable color cells. | `string[]`                 | `INITIAL_PREVIOUS_COLORS` |
| `isError`        | A flag indicating if there's an error with the color input.   | `boolean`                  | `false`                   |
| `setError`       | A function that sets the error state for the color input.     | `(value: boolean) => void` | -                         |

## Example

### Basic Example

```tsx
import { ColorPicker } from '@chirpwireless/ui-kit';

const handleColorChange = (value: string) => {
    alert(`Selected color: ${value}`);
};

<ColorPicker color="#34A853" onChange={handleColorChange} label="Pick a Color" />;
```

### Customizing Previous Colors

```tsx
<ColorPicker
    color="#FF5733"
    onChange={handleColorChange}
    label="Pick a Color"
    previousColors={['#FF5733', '#4285F4', '#FBBC05']}
/>
```

## Features

- **Color Selection**: Users can select colors using a color picker that supports hex color values with alpha transparency.
- **Previous Colors**: Displays a history of recently used colors as clickable cells.
- **Alpha Transparency**: Adjust the alpha value of the color using a percentage input.
- **Validation**: Ensures that the color input is a valid HEX code and updates the error state if not.

## Notes

- The `previousColors` prop allows you to provide an array of previously selected colors. The component will display up to 9 of them.
- The alpha transparency is managed with a percentage input (0 to 100) which updates the color's alpha channel in HEX format.
- The `setError` function is useful for handling validation in forms.
