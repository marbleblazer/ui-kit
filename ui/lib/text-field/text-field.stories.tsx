import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@ui/lib';

const meta: Meta<typeof TextField> = {
    title: 'UI/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    render: () => <TextField />,
};
