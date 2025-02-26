# TextField Component

A customizable text field component for user input, supporting various configurations such as disabled state and label customization.

## Usage

```tsx
import { TextField } from '@chirpwireless/ui-kit';

<TextField
    label="Username"
    variant="outlined"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    disabled={isDisabled}
/>;
```

### Example with Disabled State

```tsx
<TextField
    label="Password"
    variant="outlined"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    disabled={true}
/>
```

## Properties

The `TextField` component accepts all standard props from MUI's `TextField`, including the following:

| Name        | Description                                                                                             | Type                     | Default Value |
| ----------- | ------------------------------------------------------------------------------------------------------- | ------------------------ | ------------- |
| `disabled`  | Determines whether the text field is disabled.                                                          | `boolean`                | `false`       |
| `className` | Custom CSS class name for styling.                                                                      | `string`                 | `''`          |
| Other Props | Any other props from MUI's `TextField` component, such as `label`, `variant`, `value`, `onChange`, etc. | `StandardTextFieldProps` | -             |

## Features

- **Customizable**: Supports all standard `TextField` properties, including `variant`, `label`, and `value`.
- **Disabled State**: Can be easily disabled using the `disabled` prop.
- **Responsive**: Full width support for responsive layouts.

## Example

```tsx
<TextField
    label="Email Address"
    variant="outlined"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    disabled={false}
/>
```
