# TreeSelect Component

The `TreeSelect` component is a custom select dropdown that allows for hierarchical data selection in a tree structure. It uses Material-UI's `Popover`, `Select`, and `SimpleTreeView` to render a selectable tree of options. This component is ideal for scenarios where you need to represent and allow selection from a tree-like structure of options.

## Installation

Ensure you have the necessary dependencies installed:

```bash
npm install @mui/material @mui/x-tree-view
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { TreeSelect } from '@chirpwireless/ui-kit';

const data = [
    {
        id: '1',
        label: 'Root 1',
        children: [
            { id: '1-1', label: 'Child 1-1' },
            { id: '1-2', label: 'Child 1-2' },
        ],
    },
    {
        id: '2',
        label: 'Root 2',
        children: [
            { id: '2-1', label: 'Child 2-1' },
            { id: '2-2', label: 'Child 2-2' },
        ],
    },
];

const MyComponent = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    const handleNodeChange = (node) => {
        setSelectedNode(node);
    };

    return (
        <TreeSelect
            options={data}
            selectedNode={selectedNode}
            onChange={handleNodeChange}
            selectProps={{
                label: 'Select Node',
            }}
        />
    );
};
```

### Customizing Tree View Max Height

```tsx
<TreeSelect
    options={data}
    selectedNode={selectedNode}
    onChange={handleNodeChange}
    treeViewMaxHeight={300}
    selectProps={{
        label: 'Select Node',
    }}
/>
```

## Props

| Name                | Description                                           | Type                                             | Default Value |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------ | ------------- |
| `options`           | List of tree nodes to display in the select dropdown. | `TreeNodeType[]`                                 | `[]`          |
| `selectedNode`      | The currently selected tree node.                     | `TreeNodeType`                                   | `undefined`   |
| `onChange`          | Callback triggered when a node is selected.           | `(selectedValue: TreeNodeType) => void`          | `undefined`   |
| `width`             | Width of the `TreeSelect` component.                  | `string                                  number` | `'100%'`      |
| `selectProps`       | Props passed to the `Select` component.               | `SelectPropsType`                                | `undefined`   |
| `treeViewMaxHeight` | Maximum height of the tree view popover.              | `number`                                         | `undefined`   |
| `label`             | Label displayed for the select input.                 | `string`                                         | `undefined`   |

## Features

- **Hierarchical Data Selection**: The `TreeSelect` component allows selecting options from a hierarchical structure (tree).
- **Customizable Popover**: It uses a `Popover` for displaying the tree, making it easy to control its placement and behavior.
- **Flexible Width**: The width of the component is fully customizable via the `width` prop.
- **Tree Node Rendering**: The tree is dynamically rendered based on the hierarchical structure in the `options` prop.
- **Max Height Customization**: The `treeViewMaxHeight` prop allows you to limit the height of the tree view, making it suitable for large datasets.
- **Custom Select Options**: The component accepts a `SelectPropsType` prop, which allows further customization of the select element (e.g., labels, styles).

## Notes

- The component uses the `SimpleTreeView` from the `@mui/x-tree-view` package to render the tree structure.
- The tree nodes are provided via the `options` prop, and each node must have an `id` and `label`, with an optional `children` array for nested nodes.
- The component uses Material-UI's `Popover` to display the tree when the select input is clicked, and you can customize its position and style via the `Popover` props.
- If you need to handle large datasets, consider setting the `treeViewMaxHeight` to prevent rendering too many items at once.
