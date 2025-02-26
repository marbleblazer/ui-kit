# PhoneField Component

The `PhoneField` component is an input field that allows users to input a phone number with a country selector. It includes a dropdown to choose a country code, and the phone number is automatically formatted based on the selected country.

## Installation

Make sure you have the required dependencies installed:

```bash
npm install @mui/material @chirp/ui
```

## Usage

```tsx
import { PhoneField } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const handlePhoneChange = (value: string) => {
        console.log('Phone number:', value);
    };

    return <PhoneField value="" onChange={handlePhoneChange} countries={['US', 'CA', 'GB']} defaultCountry="US" />;
};
```

## Properties

| Name             | Description                                                      | Type                      | Default Value |
| ---------------- | ---------------------------------------------------------------- | ------------------------- | ------------- |
| `value`          | The current phone number value.                                  | `string`                  | `''`          |
| `onChange`       | Callback function triggered when the phone number value changes. | `(value: string) => void` | `undefined`   |
| `countries`      | Array of ISO country codes to choose from.                       | `string[]`                | `[]`          |
| `defaultCountry` | The default ISO country code.                                    | `string`                  | `''`          |
| `PaperPropsSx`   | Custom styling for the dropdown menu's Paper component.          | `PaperProps`              | `undefined`   |
| `isDisabled`     | Whether the field is disabled.                                   | `boolean`                 | `false`       |

## Example

### Basic Example

```tsx
import { PhoneField } from '@chirpwireless/ui-kit';

const App = () => {
    const handlePhoneChange = (value: string) => {
        console.log('Updated phone number:', value);
    };

    return (
        <div>
            <PhoneField
                value="1234567890"
                onChange={handlePhoneChange}
                countries={['US', 'CA', 'GB']}
                defaultCountry="US"
            />
        </div>
    );
};
```

### Example with Disabled Field

```tsx
import { PhoneField } from '@chirpwireless/ui-kit';

const App = () => {
    const handlePhoneChange = (value: string) => {
        console.log('Updated phone number:', value);
    };

    return (
        <div>
            <PhoneField
                value="1234567890"
                onChange={handlePhoneChange}
                countries={['US', 'CA', 'GB']}
                defaultCountry="US"
                isDisabled={true}
            />
        </div>
    );
};
```

## Customization

- The `countries` prop allows you to specify which countries' phone numbers can be selected, using their ISO country codes (e.g., 'US', 'CA', 'GB').
- The dropdown allows users to select the country, and the phone number is formatted according to the selected country’s dial code.
- You can customize the appearance of the dropdown with the `PaperPropsSx` prop.

## Notes

- The component uses the `COUNTRIES` constant and helper functions to format and validate the phone number based on the selected country.
- The phone number input is automatically masked according to the selected country's phone number format.
