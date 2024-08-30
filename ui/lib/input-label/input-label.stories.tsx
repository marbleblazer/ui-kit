import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from '@ui/lib';

const meta: Meta<typeof InputLabel> = {
    title: 'UI/InputLabel',
    component: InputLabel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
    render: () => <InputLabel label="Some label" />,
};
