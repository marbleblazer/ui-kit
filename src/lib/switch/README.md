# Switch Component

A customizable switch component that displays different texts for the active and inactive states.

## Usage

```tsx
import { Switch } from '@chirpwireless/ui-kit';

<Switch checked={isChecked} onChange={(val) => setIsChecked(val)} activeText="Active" inactiveText="Inactive" />;
```

### Example with Custom Texts

```tsx
<Switch checked={isEnabled} onChange={(val) => setIsEnabled(val)} activeText="Enabled" inactiveText="Disabled" />
```

## Properties

| Name           | Description                                             | Type                     | Default Value |
| -------------- | ------------------------------------------------------- | ------------------------ | ------------- |
| `width`        | The width of the switch (optional).                     | `string`                 | `117px`       |
| `activeText`   | The text to be displayed when the switch is active.     | `string`                 | `''`          |
| `inactiveText` | The text to be displayed when the switch is inactive.   | `string`                 | `''`          |
| `checked`      | The state of the switch (whether it is on or off).      | `boolean`                | `false`       |
| `onChange`     | Callback function triggered when the switch is toggled. | `(val: boolean) => void` | -             |

## Features

- **Customizable Text**: Displays different texts for the active and inactive states.
- **Responsive**: The width adjusts based on content size or can be customized.
- **Interactive**: Switch state can be toggled by clicking, or programmatically via the `onChange` callback.

## Example

```tsx
<Switch checked={isEnabled} onChange={(val) => setIsEnabled(val)} activeText="On" inactiveText="Off" />
```
