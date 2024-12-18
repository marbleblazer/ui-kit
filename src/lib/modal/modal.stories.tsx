import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalTitle } from '@chirp/ui/lib';

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => <Modal title="Title" description="Description" actionComponent={<div />} />,
};

export const Title: Story = {
    render: () => <ModalTitle title="Title" />,
};
