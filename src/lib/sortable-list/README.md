# SortableList Component

## Overview

`SortableList` is a React component that provides drag-and-drop reordering functionality for lists. It uses the `@dnd-kit` library to enable intuitive sorting of items with both mouse and keyboard support.

## Features

- Drag-and-drop reordering with visual feedback
- Keyboard navigation and reordering support
- Customizable item rendering
- Type-safe generic implementation
- Accessibility compliant
- Theme-aware styling

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `T[]` where `T extends { id: string }` | Required | Array of items to display and sort |
| `renderItem` | `(item: T, index: number) => JSX.Element` | Required | Function to render each list item |
| `onItemsChange` | `(items: T[]) => void` | Required | Callback fired when items are reordered |

## Usage

### Basic Usage
```tsx
import { SortableList } from './SortableList';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

const MyComponent = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', title: 'First task', completed: false },
        { id: '2', title: 'Second task', completed: true },
        { id: '3', title: 'Third task', completed: false },
    ]);

    const renderTask = (task: Task, index: number) => (
        <div key={task.id}>
            <h3>{task.title}</h3>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
        </div>
    );

    return (
        <SortableList
            items={tasks}
            renderItem={renderTask}
            onItemsChange={setTasks}
        />
    );
};
```

### With Custom Styling
```tsx
const renderStyledItem = (item: Task, index: number) => (
    <Box
        sx={{
            p: 2,
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 1,
            bgcolor: 'background.paper',
        }}
    >
        <Typography variant="h6">{item.title}</Typography>
        <Chip 
            label={item.completed ? 'Completed' : 'Pending'} 
            color={item.completed ? 'success' : 'default'}
        />
    </Box>
);
```

## SortableItem Component

The `SortableList` uses an internal `SortableItem` component that:
- Provides drag handle with drag icon
- Includes tooltip with "Drag to reorder" message
- Handles drag events and animations
- Supports theme-aware styling

### SortableItem Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Unique identifier for the sortable item |
| `children` | `ReactNode` | Required | The content to be made sortable |

## Drag & Drop Behavior

- **Mouse**: Click and drag the drag handle icon to reorder items
- **Keyboard**: Use keyboard sensors for accessibility
- **Visual feedback**: Items animate during dragging
- **Collision detection**: Uses `closestCenter` strategy

## Accessibility

- Full keyboard navigation support
- Screen reader compatible
- Proper ARIA attributes
- Focus management
- Translated tooltips

## Dependencies

- `@dnd-kit/core` (core drag-and-drop functionality)
- `@dnd-kit/sortable` (sortable list utilities)
- `@dnd-kit/utilities` (CSS transformation utilities)
- `@mui/material` (for styling and layout)
- `@chirp/ui/assets/fleet-icons` (for drag icon)
- `../tooltip` (for drag handle tooltip)
- `react-i18next` (for translation)

## Styling

- Drag handle uses theme colors for hover states
- Smooth transitions during reordering
- Customizable through `renderItem` function
- Responsive design

## Type Safety

The component uses TypeScript generics to ensure:
- Items must have an `id: string` property
- Type safety in `renderItem` and `onItemsChange` callbacks
- Proper typing throughout the sorting process

## Performance

- Efficient reordering with `arrayMove` utility
- Optimized sensors for pointer and keyboard events
- Minimal re-renders during drag operations

## Notes

- Each item must have a unique `id` property
- The `renderItem` function should return a stable JSX element
- Keyboard support requires proper focus management in custom items
- For large lists, consider virtualization techniques
