# SearchInput Component

The `SearchInput` component provides a customizable input field with an integrated search icon and optional loading state. It allows users to input search terms and display a loader while the search is being processed.

## Installation

Make sure you have the required dependencies installed:

```bash
npm install @mui/material @chirp/ui react-i18next
```

## Usage

```tsx
import { SearchInput } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        // Add logic to handle the search query and loading state
    };

    return (
        <SearchInput
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search for locations"
            isLoading={isLoading}
        />
    );
};
```

## Props

| Name          | Description                                                                          | Type                      | Default Value     |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------- | ----------------- |
| `value`       | The current value of the input field.                                                | `string`                  | `''`              |
| `onChange`    | Callback function triggered when the value of the input changes.                     | `(value: string) => void` | `undefined`       |
| `placeholder` | Placeholder text for the input field.                                                | `string`                  | `Search location` |
| `isLoading`   | If `true`, the input field will show a loading indicator instead of the search icon. | `boolean`                 | `false`           |
| `sx`          | Styles to apply to the component.                                                    | `object`                  | `undefined`       |

## Example

### Basic Example

```tsx
import { SearchInput } from '@chirpwireless/ui-kit';

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        // You can implement loading state management based on your search logic
    };

    return (
        <div>
            <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a location"
                isLoading={loading}
            />
        </div>
    );
};
```

## Notes

- The component uses the `react-i18next` library for translations. Ensure that the `uiKit` namespace is correctly set up in your translation files.
- When the `isLoading` prop is `true`, the search input field will show a loading spinner instead of the search icon.
- The `onChange` callback is triggered whenever the value of the search input changes.
- The input field can be disabled or made read-only during loading, preventing further input.

## Customization

- You can customize the placeholder text by passing a `placeholder` prop.
- The component supports custom styling via the `sx` prop from `@mui/system`, which allows you to apply styles directly to the input field and its adornments.
- The `Loader` component will automatically appear when the `isLoading` prop is set to `true`.
