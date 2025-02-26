# UserPopup Component

The `UserPopup` component is a dropdown menu that provides users with various settings and options such as language selection, theme switch, wallet connection, and logout functionality. It is typically used in a user profile or settings area where users can access personalization options.

## Installation

Ensure you have the necessary dependencies installed:

```bash
npm install @mui/material react-i18next
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { UserPopup } from '@chirpwireless/ui-kit';
import { ILanguageSelectorProps } from '@chirpwireless/ui-kit';

const languageSelectorProps: ILanguageSelectorProps = {
    // Your language selector props here
};

const MyComponent = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogout = () => {
        // Handle logout logic
    };

    const handleWalletConnect = () => {
        // Handle wallet connection logic
    };

    const handleChangeMode = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setIsDarkMode(checked);
    };

    return (
        <UserPopup
            onLogout={handleLogout}
            onWalletConnect={handleWalletConnect}
            onChangeMode={handleChangeMode}
            isDarkMode={isDarkMode}
            name="User Name"
            languageSelectorProps={languageSelectorProps}
        />
    );
};
```

### Customization

- **Language Selector**: You can pass custom props to the `LanguageSelector` by providing them in `languageSelectorProps`.
- **Theme Switch**: You can manage the theme mode (light or dark) using the `onChangeMode` callback, which is triggered when the user toggles the switch.
- **Wallet Connect**: If a wallet connection feature is needed, you can pass the `onWalletConnect` callback.
- **Logout**: The `onLogout` callback allows you to handle user logout.

## Props

| Name                    | Description                                                                             | Type                                                                     | Default Value |
| ----------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------- |
| `languageSelectorProps` | Props for the `LanguageSelector` component, including available languages and settings. | `ILanguageSelectorProps`                                                 | `undefined`   |
| `onLogout`              | Callback function triggered when the user logs out.                                     | `() => void`                                                             | `undefined`   |
| `onWalletConnect`       | Callback function triggered when the user clicks to connect their wallet.               | `() => void`                                                             | `undefined`   |
| `onChangeMode`          | Callback function triggered when the theme mode changes (dark/light).                   | `(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void` | `undefined`   |
| `isDarkMode`            | Boolean value indicating if the current theme is dark mode or not.                      | `boolean`                                                                | `false`       |
| `name`                  | The name of the user, displayed in the popup header.                                    | `string`                                                                 | `undefined`   |

## Features

- **Profile Avatar**: The component allows users to click on their avatar to open the user popup.
- **Theme Switch**: Provides a toggle for switching between light and dark themes.
- **Language Selector**: Allows users to change their language preferences.
- **Wallet Connection**: Optionally, it supports wallet connection functionality if passed via props.
- **Logout**: Includes a logout button for user sign-out.

## Notes

- The component uses Material-UI's `Popover` for the dropdown, which will appear when the user clicks on their profile avatar.
- You can customize the UI of the popup and its components, like the `LanguageSelector`, by passing appropriate props.
- The component is designed with flexibility in mind, so you can easily integrate other functionalities (e.g., adding more settings or actions).
