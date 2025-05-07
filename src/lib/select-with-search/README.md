# SelectWithSearch Component

A searchable select dropdown component with enhanced filtering, loading indicator, and clear functionality, built on top of Material UI.

## Usage

```tsx
import { SelectWithSearch } from '@chirpwireless/ui-kit';

<SelectWithSearch
    label="Choose an option"
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
    onClear={() => setSelectedValue('')}
    collection={options}
/>;
```

### Example with Loading and Search

```tsx
<SelectWithSearch
    label="Search Users"
    value={selectedUser}
    onChange={(e) => setSelectedUser(e.target.value)}
    onClear={() => setSelectedUser('')}
    isLoading={isFetching}
    collection={userOptions}
    searchPlaceholder="Search by name..."
/>
```

## Properties

| Name                | Description                                              | Type                                      | Default Value |
| ------------------- | -------------------------------------------------------- | ----------------------------------------- | ------------- |
| `label`             | The label for the select input.                          | `string`                                  | -             |
| `value`             | The value of the selected option.                        | `any`                                     | -             |
| `onChange`          | Callback fired when the selected value changes.          | `(event: SelectChangeEvent<any>) => void` | -             |
| `onClear`           | Function to clear the current selection (optional).      | `() => void`                              | -             |
| `collection`        | Array of selectable options.                             | `SelectWithSearchOptionType[]`            | -             |
| `isLoading`         | Whether to show a loading indicator in the search field. | `boolean`                                 | `false`       |
| `searchPlaceholder` | Placeholder text shown in the search input.              | `string`                                  | -             |
| `labelId`           | The ID for the label of the select component.            | `string`                                  | -             |
| `disabled`          | Whether the select is disabled.                          | `boolean`                                 | `false`       |
| `endAdornment`      | Optional adornment at the end of the select input.       | `ReactNode`                               | -             |
| `MenuProps`         | Props passed to the underlying Menu component.           | `object`                                  | -             |

## Features

- **Search Input**: Allows filtering options via text input with full, prefix, and partial match prioritization.
- **Clear Button**: Optionally adds a clear button to reset the selected value.
- **Loading Indicator**: Shows a loader while async data is being fetched.
- **Customizable Styles**: Supports full theming and styling via MUI.
- **Material UI Integration**: Built using MUI components for consistency and accessibility.
