# BadgeSelect Component

BadgeSelect is a custom-styled dropdown select component built on top of MUI's Select component. It provides a modern design with customizable styles and theming support.

## Installation

Ensure you have `@mui/material` installed in your project:

```sh
npm install @mui/material
```

Then, import the component:

```tsx
import { BadgeSelect } from '@chirpwireless/ui-kit';
```

## Props

`BadgeSelect` accepts all props of MUI's `Select` component (`SelectProps`). Additionally, it allows custom styling and theming via MUI's `useTheme`.

### Custom Props

| Prop           | Type        | Description                              |
| -------------- | ----------- | ---------------------------------------- |
| `disabled`     | `boolean`   | Disables the select component.           |
| `value`        | `any`       | The selected value.                      |
| `endAdornment` | `ReactNode` | Custom adornment for the select.         |
| `MenuProps`    | `object`    | Props for customizing the dropdown menu. |

## Usage

```tsx
import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { BadgeSelect } from '@chirpwireless/ui-kit';

const MyComponent = () => {
    const [value, setValue] = useState('');

    return (
        <BadgeSelect value={value} onChange={(e) => setValue(e.target.value)}>
            <MenuItem value={'option1'}>Option 1</MenuItem>
            <MenuItem value={'option2'}>Option 2</MenuItem>
        </BadgeSelect>
    );
};

export default MyComponent;
```

## Theming

The `BadgeSelect` component utilizes the MUI theme for styling. To customize colors, typography, and other styles, override the theme properties using MUI's `ThemeProvider`.

## Notes

- This component supports full MUI styling and can be customized via `sx` or `theme` overrides.
- It maintains the same accessibility and behavior as the default MUI `Select` component.
