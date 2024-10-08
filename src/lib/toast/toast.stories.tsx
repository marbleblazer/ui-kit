import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@chirp/ui/lib';

const meta: Meta<typeof Toast> = {
    title: 'UI/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    render: () => <Toast message="Toast message" />,
};
