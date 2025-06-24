import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof DateInput> = {
    title: 'UI/DateInput',
    component: DateInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
    render: () => {
        const [valueState, setValueState] = useState('');

        return <DateInput onChange={setValueState} value={valueState} />;
    },
};
