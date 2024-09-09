import type { Meta, StoryObj } from '@storybook/react';
import { TrashIcon } from '@chirp/ui/assets/new-icons';
import { ConfirmationDialog, TextField } from '@chirp/ui/lib';
import { SuccessIcon } from '@chirp/ui/assets/icons';

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
        <ConfirmationDialog
            isOpen
            title="Title"
            subTitle="Description"
            onConfirm={() => {}}
            onCancel={() => {}}
            icon={<SuccessIcon />}
        >
            <TextField>12</TextField>
        </ConfirmationDialog>
    ),
};

export const DeleteModal: Story = {
    render: () => (
        <ConfirmationDialog
            isOpen
            title="Delete calendar?"
            subTitle="Upon pushing the Delete button your calendar will be permanently deleted"
            icon={<TrashIcon />}
            onConfirm={() => {}}
            confirmButtonText="Delete"
            onCancel={() => {}}
        ></ConfirmationDialog>
    ),
};
