import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmationDialog, TextField } from '@ui/lib';

const meta: Meta<typeof ConfirmationDialog> = {
    title: 'UI/ConfirmationDialog',
    component: ConfirmationDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ConfirmationDialog>;

export const Success: Story = {
    render: () => (
        <ConfirmationDialog isOpen title="Title" subTitle="Description" onConfirm={() => {}} onCancel={() => {}}>
            <TextField>12</TextField>
        </ConfirmationDialog>
    ),
};
