import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@chirp/ui/lib';

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
    render: () => <TextField label="Default" placeholder="Input" />,
};

export const Disabled: Story = {
    render: () => <TextField label="Disabled" disabled placeholder="Input" />,
};

export const Error: Story = {
    render: () => <TextField label="Error" error />,
};

export const Textarea: Story = {
    render: () => <TextField multiline rows={4} placeholder="Description" label="Description" />,
};

export const DisabledTextarea: Story = {
    render: () => <TextField label="Disabled" multiline disabled />,
};
