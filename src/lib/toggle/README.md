# Toggle Component

A customizable toggle switch component that provides an on/off state with a loading indicator and label support. This component is available in both desktop and mobile versions.

## Usage

### Toggle (Desktop)

```tsx
import { Toggle } from '@chirpwireless/ui-kit';

<Toggle
    name="acceptTerms"
    label="Accept Terms and Conditions"
    checked={acceptTerms}
    isLoading={isLoading}
    onChange={(e) => setAcceptTerms(e.target.checked)}
/>;
```

### Mobile Toggle

```tsx
import { MobileToggle } from '@chirpwireless/ui-kit';

<MobileToggle
    name="receiveNotifications"
    label="Receive Notifications"
    checked={receiveNotifications}
    isLoading={isLoading}
    onChange={(e) => setReceiveNotifications(e.target.checked)}
/>;
```

## Properties

Both the `Toggle` and `MobileToggle` components accept the following props:

| Name        | Description                                             | Type                                         | Default Value |
| ----------- | ------------------------------------------------------- | -------------------------------------------- | ------------- |
| `name`      | The name attribute for the toggle input.                | `string`                                     | -             |
| `label`     | The label displayed next to the toggle (optional).      | `string`                                     | -             |
| `checked`   | Determines if the toggle is checked (on).               | `boolean`                                    | `false`       |
| `isLoading` | If true, disables the toggle and shows a loading state. | `boolean`                                    | `false`       |
| `onChange`  | Callback function triggered when the toggle is changed. | `(e: ChangeEvent<HTMLInputElement>) => void` | -             |

## Features

- **Customizable**: Includes support for labels and the ability to disable the toggle when loading.
- **Loading State**: The toggle is visually disabled and shows a loading state when `isLoading` is true.
- **Mobile & Desktop Variants**: Available in both standard desktop and mobile-specific versions.

## Example

### Desktop Toggle

```tsx
<Toggle
    name="enableDarkMode"
    label="Enable Dark Mode"
    checked={darkModeEnabled}
    isLoading={false}
    onChange={(e) => setDarkModeEnabled(e.target.checked)}
/>
```

### Mobile Toggle

```tsx
<MobileToggle
    name="muteNotifications"
    label="Mute Notifications"
    checked={notificationsMuted}
    isLoading={true}
    onChange={(e) => setNotificationsMuted(e.target.checked)}
/>
```
