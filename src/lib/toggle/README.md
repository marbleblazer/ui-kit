# Toggle Component

A customizable toggle switch component that provides an on/off state with a label support. This component is available in desktop.

## Usage

### Toggle (Desktop)

```tsx
import { Toggle } from '@chirpwireless/ui-kit';

<Toggle
    name="acceptTerms"
    label="Accept Terms and Conditions"
    checked={acceptTerms}
    onChange={(e) => setAcceptTerms(e.target.checked)}
/>;
```

## Properties

The `Toggle` component accept the following props:

| Name       | Description                                             | Type                                         | Default Value |
| ---------- | ------------------------------------------------------- | -------------------------------------------- | ------------- |
| `name`     | The name attribute for the toggle input.                | `string`                                     | -             |
| `label`    | The label displayed next to the toggle (optional).      | `string`                                     | -             |
| `checked`  | Determines if the toggle is checked (on).               | `boolean`                                    | `false`       |
| `onChange` | Callback function triggered when the toggle is changed. | `(e: ChangeEvent<HTMLInputElement>) => void` | -             |

## Features

- **Customizable**: Includes support for labels and the ability to disable the toggle when loading.
- **Mobile & Desktop Variants**: Available in both standard desktop and mobile-specific versions.

## Example

### Desktop Toggle

```tsx
<Toggle
    name="enableDarkMode"
    label="Enable Dark Mode"
    checked={darkModeEnabled}
    onChange={(e) => setDarkModeEnabled(e.target.checked)}
/>
```
