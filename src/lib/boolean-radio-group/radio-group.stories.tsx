import type { Meta, StoryObj } from '@storybook/react';
import { BooleanRadioGroup } from '.';
import { useState } from 'react';

const meta: Meta<typeof BooleanRadioGroup> = {
    title: 'UI/BooleanRadioGroup',
    component: BooleanRadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BooleanRadioGroup>;

export const Default: Story = {
    render: () => <BooleanRadioGroup />,
};

export const CheckVariant: Story = {
    render: () => {
        const [value, setValue] = useState(false);

        return (
            <BooleanRadioGroup
                label="Create user"
                positiveLabel="Allowed"
                negativeLabel="No access"
                value={value}
                handleChange={setValue}
            />
        );
    },
};
