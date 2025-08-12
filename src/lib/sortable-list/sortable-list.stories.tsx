import type { Meta, StoryObj } from '@storybook/react';
import { SortableList } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof SortableList> = {
    title: 'UI/SortableList',
    component: SortableList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SortableList>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState([
            { id: '1', title: 'Item 1', subtitle: 'Subtitle 1' },
            { id: '2', title: 'Item 2' },
            { id: '3', title: 'Item 3' },
            { id: '4', title: 'Item 4' },
        ]);

        return (
            <Box width="300px">
                <SortableList
                    items={value}
                    renderItem={(item) => (
                        <div>
                            <div>{item.title}</div>
                            <div>{item.subtitle}</div>
                        </div>
                    )}
                    onItemsChange={setValue}
                />
            </Box>
        );
    },
};
