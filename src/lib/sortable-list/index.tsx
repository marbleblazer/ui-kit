import { type JSX } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './item';

interface ISortableListProps<T extends { id: string }> {
    items: T[];
    renderItem: (item: T, index: number) => JSX.Element;
    onItemsChange: (items: T[]) => void;
}

export const SortableList = <T extends { id: string }>({ items, onItemsChange, renderItem }: ISortableListProps<T>) => {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over?.id);
            onItemsChange(arrayMove(items, oldIndex, newIndex));
        }
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((item, idx) => (
                    <SortableItem id={item.id} key={item.id}>
                        {renderItem(item, idx)}
                    </SortableItem>
                ))}
            </SortableContext>
        </DndContext>
    );
};
