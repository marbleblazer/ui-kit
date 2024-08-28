import type { Meta, StoryObj } from '@storybook/react';
import { ActionDialog } from '@ui/lib';

const meta: Meta<typeof ActionDialog> = {
    title: 'UI/ActionDialog',
    component: ActionDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActionDialog>;

export const Success: Story = {
    render: () => (
        <ActionDialog isOpen title="Title" description="Description" buttonText="Confirm" onApply={() => {}} />
    ),
};

export const Error: Story = {
    render: () => (
        <ActionDialog
            isOpen
            title="Title"
            description="Description"
            buttonText="Confirm"
            onApply={() => {}}
            state="error"
        />
    ),
};
