# Logout Component

The `Logout` component provides a clickable list item that, when clicked, opens a confirmation dialog asking the user if they are sure they want to log out. It provides a safe way to perform a logout action with confirmation.

## Installation

Ensure the required dependencies are installed:

```bash
npm install @mui/material @chirp/ui
```

## Usage

```tsx
import { Logout } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const handleLogout = () => {
        console.log('User logged out');
    };

    return <Logout onLogout={handleLogout} />;
};
```

## Properties

| Name       | Description                                                          | Type          | Default Value |
| ---------- | -------------------------------------------------------------------- | ------------- | ------------- |
| `onLogout` | Callback function that is invoked when the user confirms the logout. | `( ) => void` | `undefined`   |

## Example

### Basic Example

```tsx
import { Logout } from '@chirpwireless/ui-kit';

const App = () => {
    const handleLogout = () => {
        // Logout logic here
        console.log('Logged out');
    };

    return (
        <div>
            <Logout onLogout={handleLogout} />
        </div>
    );
};

export default App;
```

### Example with Default Action

If you don't pass an `onLogout` handler, a default empty function will be used.

```tsx
import { Logout } from '@chirpwireless/ui-kit';

const App = () => (
    <div>
        <Logout /> {/* No custom logout handler provided */}
    </div>
);
```

## Customization

- The confirmation dialog shown when logging out has the text and button labels defined by the `uiKit` translation namespace (key `logout`).
- The icon used in the dialog and list item is `LogoutIcon` from `@chirp/ui/assets/icons`, but it can be replaced with any custom icon if needed.

## Notes

- The component uses `ConfirmationDialog` to handle the logout confirmation, ensuring a user-friendly and safe logout process.
- You can modify the `onLogout` function to perform any necessary cleanup actions, such as redirecting the user, clearing tokens, or updating app state.
