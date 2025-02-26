# RangePicker Component

The `RangePicker` component allows users to select a date range. It provides a date input field for both the start and end dates, and displays a calendar to visually select the dates. The component includes validation for the selected range and has buttons to apply or clear the selected range.

## Installation

Make sure to install the required dependencies:

```bash
npm install react-datepicker @mui/material moment
```

## Usage

```tsx
import { RangePicker } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const handleDateChange = (after: string, before: string) => {
        console.log('Date range selected:', after, before);
    };

    const handleClearDate = () => {
        console.log('Date range cleared');
    };

    const handleCloseCalendar = () => {
        console.log('Calendar closed');
    };

    return (
        <RangePicker
            initialStartDate={new Date()}
            initialEndDate={new Date()}
            onDateChange={handleDateChange}
            onClearDate={handleClearDate}
            handleCloseCalendar={handleCloseCalendar}
        />
    );
};
```

## Props

| Name                  | Description                                                                | Type                                      | Default Value |
| --------------------- | -------------------------------------------------------------------------- | ----------------------------------------- | ------------- |
| `initialStartDate`    | The initial start date value.                                              | `Date`                                    | `new Date()`  |
| `initialEndDate`      | The initial end date value.                                                | `Date`                                    | `new Date()`  |
| `onClearDate`         | Callback function triggered when the user clears the selected date range.  | `() => void`                              | `undefined`   |
| `onDateChange`        | Callback function triggered when the user applies the selected date range. | `(after: string, before: string) => void` | `undefined`   |
| `handleCloseCalendar` | Callback function triggered to close the calendar.                         | `() => void`                              | `undefined`   |

## Example

### Basic Example

```tsx
import { RangePicker } from '@chirpwireless/ui-kit';

const App = () => {
    const handleDateChange = (after: string, before: string) => {
        console.log('Updated date range:', after, before);
    };

    const handleClearDate = () => {
        console.log('Cleared date range');
    };

    const handleCloseCalendar = () => {
        console.log('Calendar closed');
    };

    return (
        <RangePicker
            initialStartDate={new Date()}
            initialEndDate={new Date()}
            onDateChange={handleDateChange}
            onClearDate={handleClearDate}
            handleCloseCalendar={handleCloseCalendar}
        />
    );
};
```

### Example with Date Range and Calendar

```tsx
import { RangePicker } from '@chirpwireless/ui-kit';

const App = () => {
    const handleDateChange = (after: string, before: string) => {
        console.log('Date range:', after, before);
    };

    const handleClearDate = () => {
        console.log('Cleared date');
    };

    const handleCloseCalendar = () => {
        console.log('Calendar closed');
    };

    return (
        <div>
            <RangePicker
                initialStartDate={new Date()}
                initialEndDate={new Date()}
                onDateChange={handleDateChange}
                onClearDate={handleClearDate}
                handleCloseCalendar={handleCloseCalendar}
            />
        </div>
    );
};
```

## Notes

- The component uses the `react-datepicker` library to show a calendar for date selection.
- The `moment` library is used to handle date formatting and validation.
- The `RangePicker` supports internationalization, allowing the language of the date picker to be changed dynamically based on the current language.
- The component also validates whether the end date is greater than or equal to the start date before applying the changes.

## Customization

- You can pass your own start and end dates using the `initialStartDate` and `initialEndDate` props.
- The component automatically formats the selected dates in the `YYYY-MM-DD` format.
- The `onDateChange` callback is called with the formatted start and end dates whenever the user applies the selected date range.
- The `onClearDate` function is called when the user clears the date range.
