# ActionDialog

`ActionDialog` is a modal dialog that displays information about a successful or failed action and provides a button for confirmation.

## Installation

This component is part of the UI kit and can be imported as follows:

```tsx
import { ActionDialog } from '@chirpwireless/ui-kit/path';
```

## Usage

Example usage of `ActionDialog`:

```tsx
import { useState } from 'react';
import { ActionDialog } from '@chirpwireless/ui-kit/path';

const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleApply = () => {
        setIsOpen(false);
    };

    return (
        <ActionDialog
            isOpen={isOpen}
            title="Operation Successful"
            description="Your changes have been saved."
            buttonText="OK"
            onApply={handleApply}
            state="success"
        />
    );
};
```

## Props

| Name            | Type                | Description                                | Default     |
| --------------- | ------------------- | ------------------------------------------ | ----------- |
| `isOpen`        | `boolean`           | Flag indicating if the modal is open       | –           |
| `title`         | `string`            | The title of the modal                     | –           |
| `description`   | `string`            | The description inside the modal           | –           |
| `buttonText`    | `string`            | The text of the action button              | –           |
| `onApply`       | `() => void`        | Function called when the button is clicked | –           |
| `state`         | `'success' 'error'` | Determines which icon is displayed         | `'success'` |
| `subTitleWidth` | `string`            | Subtitle width (optional)                  | –           |

## Appearance

The component uses `CheckCircleOutlinedIcon` for success and `SadFaceIcon` for error. It is styled with `./style` and utilizes `ModalTitle` for the dialog title.

## Dependencies

- `@chirp/ui/assets/icons` – for icons
- `Button` – button used in the dialog
- `ModalTitle` – title component for the dialog
