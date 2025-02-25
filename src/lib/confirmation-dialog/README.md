# ConfirmationDialog Component

A customizable modal dialog that asks the user to confirm or cancel an action. It provides a title, an optional subtitle, an icon, and configurable buttons for confirmation and cancellation.

## Installation

Ensure the required dependencies are installed:

```bash
npm install @mui/material react-i18next
```

## Usage

```tsx
import { ConfirmationDialog } from '@chirpwireless/ui-kit';

const [isOpen, setIsOpen] = useState(false);

const handleConfirm = () => {
    console.log('Confirmed');
    setIsOpen(false);
};

const handleCancel = () => {
    console.log('Cancelled');
    setIsOpen(false);
};

<ConfirmationDialog
    isOpen={isOpen}
    title="Are you sure?"
    subTitle="This action cannot be undone."
    onConfirm={handleConfirm}
    onCancel={handleCancel}
    confirmButtonText="Yes"
    cancelButtonText="No"
>
    <p>Do you want to proceed with this action?</p>
</ConfirmationDialog>;
```

## Properties

| Name                   | Description                                                   | Type         | Default Value |
| ---------------------- | ------------------------------------------------------------- | ------------ | ------------- |
| `isOpen`               | Controls whether the dialog is visible.                       | `boolean`    | -             |
| `title`                | The main title of the dialog.                                 | `string`     | -             |
| `subTitle`             | The subtitle of the dialog, providing additional information. | `string`     | -             |
| `icon`                 | An optional icon to display at the top of the dialog.         | `ReactNode`  | -             |
| `isConfirmBtnDisabled` | Whether the confirm button should be disabled.                | `boolean`    | `false`       |
| `isCancelBtnDisabled`  | Whether the cancel button should be disabled.                 | `boolean`    | `false`       |
| `confirmButtonText`    | Custom text for the confirm button.                           | `string`     | `Confirm`     |
| `cancelButtonText`     | Custom text for the cancel button.                            | `string`     | `Cancel`      |
| `onConfirm`            | Function called when the confirm button is clicked.           | `() => void` | -             |
| `onCancel`             | Function called when the cancel button is clicked.            | `() => void` | -             |
| `children`             | Custom content that can be rendered inside the dialog.        | `ReactNode`  | -             |

## Example

### Basic Example

```tsx
import { ConfirmationDialog } from '@chirpwireless/ui-kit';

const [isOpen, setIsOpen] = useState(false);

const handleConfirm = () => {
    console.log('Confirmed');
    setIsOpen(false);
};

const handleCancel = () => {
    console.log('Cancelled');
    setIsOpen(false);
};

<ConfirmationDialog
    isOpen={isOpen}
    title="Are you sure?"
    subTitle="This action cannot be undone."
    onConfirm={handleConfirm}
    onCancel={handleCancel}
    confirmButtonText="Yes"
    cancelButtonText="No"
>
    <p>Do you want to proceed with this action?</p>
</ConfirmationDialog>;
```

### Example with Icon

```tsx
<ConfirmationDialog
    isOpen={isOpen}
    title="Delete Item"
    subTitle="Are you sure you want to delete this item?"
    icon={<DeleteIcon />}
    onConfirm={handleConfirm}
    onCancel={handleCancel}
>
    <p>This action is irreversible.</p>
</ConfirmationDialog>
```

## Features

- **Title and Subtitle**: Customize the dialog with a title and an optional subtitle for context.
- **Buttons**: Configure the confirm and cancel buttons with custom text and disabling functionality.
- **Icon**: Optionally display an icon at the top of the dialog.
- **Customizable Content**: Use the `children` prop to insert custom content inside the dialog.

## Notes

- The `isOpen` prop is used to control the visibility of the dialog.
- The `onConfirm` and `onCancel` functions are called when the respective buttons are clicked.
- The dialog supports disabling the confirm or cancel buttons via the `isConfirmBtnDisabled` and `isCancelBtnDisabled` props.
- The `icon` prop allows adding a custom icon to the dialog for better visual communication.
