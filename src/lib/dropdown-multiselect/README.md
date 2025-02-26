# DropdownMultiselect Component

A customizable dropdown component that allows users to select multiple options from a list. It includes search functionality, checkboxes for selection, and customizable actions for accepting or clearing selected items.

## Installation

Ensure the required dependencies are installed:

```bash
npm install @mui/material react-i18next
```

## Usage

```tsx
import { DropdownMultiselect } from '@chirpwireless/ui-kit';

const [selectedOptions, setSelectedOptions] = useState<YourOptionType[]>([]);

const handleAccept = (selectedItems: YourOptionType[]) => {
    setSelectedOptions(selectedItems);
};

const handleClear = () => {
    setSelectedOptions([]);
};

<DropdownMultiselect
    title="Select Options"
    options={yourOptionsArray}
    idKey="id"
    nameKey="name"
    selectedOptions={selectedOptions}
    onAccept={handleAccept}
    onClear={handleClear}
/>;
```

## Properties

| Name              | Description                                                      | Type                              | Default Value |
| ----------------- | ---------------------------------------------------------------- | --------------------------------- | ------------- |
| `title`           | The title of the dropdown.                                       | `string`                          | -             |
| `width`           | The width of the dropdown.                                       | `string`                          | `"230px"`     |
| `options`         | The options to display in the dropdown.                          | `T[]` (Array of objects)          | -             |
| `idKey`           | The key in each option object that uniquely identifies the item. | `keyof T`                         | -             |
| `nameKey`         | The key in each option object for the display label.             | `keyof T`                         | -             |
| `selectedOptions` | The currently selected options.                                  | `T[]` (Array of selected objects) | `[]`          |
| `onAccept`        | Callback function to handle the accept action.                   | `(selectedItems: T[]) => void`    | -             |
| `onClear`         | Callback function to handle the clear action.                    | `() => void`                      | -             |

## Example

### Basic Example

```tsx
import { DropdownMultiselect } from '@chirpwireless/ui-kit';

const [selectedOptions, setSelectedOptions] = useState<YourOptionType[]>([]);

const handleAccept = (selectedItems: YourOptionType[]) => {
    setSelectedOptions(selectedItems);
};

const handleClear = () => {
    setSelectedOptions([]);
};

<DropdownMultiselect
    title="Select Options"
    options={yourOptionsArray}
    idKey="id"
    nameKey="name"
    selectedOptions={selectedOptions}
    onAccept={handleAccept}
    onClear={handleClear}
/>;
```

### Example with Custom Option Type

```tsx
const yourOptionsArray = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
];

<DropdownMultiselect
    title="Choose your options"
    options={yourOptionsArray}
    idKey="id"
    nameKey="name"
    selectedOptions={selectedOptions}
    onAccept={handleAccept}
    onClear={handleClear}
/>;
```

## Features

- **Search Functionality**: The dropdown includes a search input that filters options based on the name key.
- **Multi-Select**: Users can select multiple options via checkboxes.
- **Custom Actions**: You can define custom behavior for accepting or clearing selections.
- **Customizable**: You can customize the dropdown's title, width, and key names for options.

## Notes

- The component expects a list of options, where each option is an object that has at least two keys: one for the unique identifier (`idKey`) and one for the display name (`nameKey`).
- The `onAccept` callback is triggered when the user confirms their selection, and `onClear` is triggered when the user clears the selection.
- The dropdown is closed when an option is selected or when the user clicks "Accept" or "Clear".
