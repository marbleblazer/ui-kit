import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMultiselect } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof DropdownMultiselect> = {
    title: 'UI/DropdownMultiselect',
    component: DropdownMultiselect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DropdownMultiselect>;

export const Default: Story = {
    render: () => {
        const [selectedOptions, setSelectedOptions] = useState<{ label: string; id: string }[]>([]);

        return (
            <DropdownMultiselect
                title="Type"
                options={[
                    { label: 'Option 1', id: '1' },
                    { label: 'Option 2', id: '2' },
                    { label: 'Option 3', id: '3' },
                    { label: 'Option 4', id: '4' },
                    { label: 'Option 5', id: '5' },
                ]}
                idKey="id"
                nameKey="label"
                width="230px"
                selectedOptions={selectedOptions}
                onAccept={setSelectedOptions}
                onClear={() => setSelectedOptions([])}
            ></DropdownMultiselect>
        );
    },
};
