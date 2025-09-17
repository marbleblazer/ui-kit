# DateInput Component

## Overview

`DateInput` is a specialized React component for formatted date input with automatic formatting. It provides a text input that automatically formats user input into a date format (DD/MM/YYYY) while restricting input to numeric characters only.

## Features

- **Automatic Formatting** - Automatically inserts slashes as user types
- **Input Validation** - Restricts input to numeric characters only
- **Length Limitation** - Limits input to 8 digits (DDMMYYYY format)
- **Real-time Formatting** - Formats input as user types without requiring blur events
- **Material-UI Integration** - Built on top of Material-UI TextField component
- **TypeScript Support** - Fully typed with proper interface definitions

## Usage

```tsx
import { DateInput } from '@chirpwireless/ui-kit';

const [date, setDate] = useState('');

<DateInput
  label="Birth Date"
  value={date}
  onChange={setDate}
  placeholder="DD/MM/YYYY"
/>;
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `onChange` | `(date: string) => void` | Callback when date value changes (formatted string) |
| `value` | `string` | Current value of the date input |
| `label` | `string` | Label for the input field |
| `placeholder` | `string` | Placeholder text |
| `disabled` | `boolean` | Disable the input field |
| All other `StandardTextFieldProps` | | All standard Material-UI TextField props |

## Formatting Behavior

The component automatically formats input as follows:

1. **Input Cleaning**: Removes all non-digit characters (`/\D/g`)
2. **Length Limitation**: Restricts to maximum 8 digits (for DDMMYYYY)
3. **Auto-formatting**: Inserts slashes at positions:
   - After 2 digits: `DD/`
   - After 4 digits: `DD/MM/`
4. **Output**: Returns formatted string like `DD/MM/YYYY`

### Example Input Flow:
- User types: `1` → Output: `1`
- User types: `12` → Output: `12/`
- User types: `123` → Output: `12/3`
- User types: `1234` → Output: `12/34/`
- User types: `12345` → Output: `12/34/5`
- User types: `123456` → Output: `12/34/56`
- User types: `1234567` → Output: `12/34/567`
- User types: `12345678` → Output: `12/34/5678`

## Validation

The component performs the following validation:
- Only numeric characters are allowed
- Maximum 8 digits can be entered
- Automatic formatting prevents invalid patterns
- No validation of actual date validity (e.g., doesn't check if month is 1-12)

## Dependencies

- `@mui/material` - Core Material-UI components
- `../text-field` - Custom TextField component wrapper
- React - Core React library

## Examples

### Basic Usage
```tsx
const [selectedDate, setSelectedDate] = useState('');

<DateInput
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
  placeholder="Enter date in DD/MM/YYYY format"
/>
```

### With Default Value
```tsx
<DateInput
  label="Event Date"
  value="15/09/2023"
  onChange={handleDateChange}
/>
```

### Disabled State
```tsx
<DateInput
  label="Created Date"
  value="01/01/2023"
  onChange={handleDateChange}
  disabled={true}
/>
```

### Full Width with Helper Text
```tsx
<DateInput
  label="Expiration Date"
  value={expirationDate}
  onChange={setExpirationDate}
  fullWidth
  helperText="Enter date in DD/MM/YYYY format"
/>
```

## Use Cases

### Form Inputs
Use in forms where date input is required with specific formatting.

### Data Filtering
For date range filters where consistent formatting is important.

### User Profiles
Birth date, registration date, or other date-related user information.

### Configuration Forms
Settings that require date parameters with specific format.

## Accessibility

- Built on accessible Material-UI TextField component
- Proper label association
- Keyboard navigation support
- Screen reader compatible
- Focus management

## Performance

- Lightweight component with minimal dependencies
- Efficient input handling with regex and string manipulation
- No external libraries for date formatting
- Optimized re-rendering with proper prop handling

## Browser Support

- Modern browsers with JavaScript support
- Consistent behavior across different input methods
- Mobile keyboard support

## Limitations

- **No Date Validation**: Does not validate if the entered date is actually valid (e.g., doesn't check if February has 29 days in leap years)
- **Fixed Format**: Only supports DD/MM/YYYY format
- **No Date Picker**: Pure text input without calendar picker
- **No Localization**: Format is fixed and not localized

## Integration Tips

- Combine with date validation in parent component if needed
- Consider using with date parsing libraries for further processing
- For complex date requirements, consider using a full date picker component
- Test with various input methods (keyboard, paste, mobile input)

## Related Components

- `TextField` - Base text input component
- Future date picker components for calendar-based selection

## Notes

- The component is designed for simplicity and specific formatting needs
- For more advanced date handling, consider additional validation
- The output format is always DD/MM/YYYY regardless of locale
- Users can paste formatted dates, but non-digit characters will be removed
