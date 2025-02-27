import type { Meta, StoryObj } from '@storybook/react';
import { FilterItem } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof FilterItem> = {
    title: 'UI/FilterItem',
    component: FilterItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilterItem>;

export const Default: Story = {
    render: () => {
        const [checkedState, setCheckedState] = useState(false);

        return (
            <>
                <FilterItem
                    label="Filter Item"
                    checked={checkedState}
                    onChange={() => setCheckedState(!checkedState)}
                    endAdornmentText="123"
                />
            </>
        );
    },
};
