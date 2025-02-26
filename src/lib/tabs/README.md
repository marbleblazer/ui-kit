# Tabs Component

The `Tabs` component is a customizable tab navigation element built with Material-UI. It allows you to display a list of items as tabs and manage the active tab. You can use it in a variety of layouts with different tab styles such as full width, standard, or scrollable.

## Installation

Make sure you have the necessary dependencies installed:

```bash
npm install @mui/material
```

## Usage

### Basic Example

```tsx
import { Tabs } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [activeTab, setActiveTab] = useState<string | false>(false);
    const items = ['Tab 1', 'Tab 2', 'Tab 3'];

    return <Tabs items={items} activeTab={activeTab} setActiveTab={setActiveTab} />;
};
```

### With Custom Titles and Values

```tsx
import { Tabs } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [activeTab, setActiveTab] = useState<string | false>(false);
    const items = [
        { id: 'tab1', title: 'Tab 1', value: 'tab1' },
        { id: 'tab2', title: 'Tab 2', value: 'tab2' },
    ];

    return (
        <Tabs
            items={items}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            resolvedTitle={(tab) => tab.title}
            resolvedValue={(tab) => tab.value}
        />
    );
};
```

### Custom Styles

```tsx
import { Tabs } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [activeTab, setActiveTab] = useState<string | false>(false);
    const items = ['Tab 1', 'Tab 2', 'Tab 3'];

    return (
        <Tabs
            items={items}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            sx={{ backgroundColor: 'lightgray', padding: '10px' }}
            variant="scrollable"
        />
    );
};
```

## Props

| Name            | Description                                                                            | Type                                  | Default Value  |
| --------------- | -------------------------------------------------------------------------------------- | ------------------------------------- | -------------- |
| `items`         | List of items to be displayed as tabs.                                                 | `T[]` (generic type)                  | `[]`           |
| `activeTab`     | The currently active tab value.                                                        | `string` `false`                      | `false`        |
| `setActiveTab`  | Function to set the active tab value.                                                  | `(tab: string) => void`               | `undefined`    |
| `resolvedTitle` | Function to resolve the title for each tab.                                            | `(tab: T) => string`                  | `(tab) => tab` |
| `resolvedValue` | Function to resolve the value for each tab.                                            | `(tab: T) => string`                  | `(tab) => tab` |
| `sx`            | Custom styles for the Tabs component.                                                  | `SxProps<Theme>`                      | `{}`           |
| `variant`       | Defines the variant of the tab layout. Options: 'fullWidth', 'standard', 'scrollable'. | `'fullWidth' 'standard' 'scrollable'` | `'standard'`   |

## Features

- **Customizable Titles and Values**: Use `resolvedTitle` and `resolvedValue` to customize how the titles and values of the tabs are determined.
- **Custom Styling**: Customize the appearance of the `Tabs` component via the `sx` prop.
- **Flexible Layouts**: Choose from three variants:
    - `fullWidth`: Tabs stretch to fill the container.
    - `standard`: Default layout, with tabs sized based on content.
    - `scrollable`: Tabs become scrollable if they exceed the available width.
- **Control Active Tab**: The active tab is controlled by the `activeTab` prop, and you can update it using the `setActiveTab` function.
- **Simple API**: The component provides an intuitive API to manage tabs without needing additional libraries.

## Notes

- The `Tabs` component uses Material-UI's `Tabs` and `Tab` components internally.
- You can use
