import type { Meta, StoryObj } from '@storybook/react';
import { Badge, SimpleBadge } from '@chirp/ui/lib';

const meta: Meta<typeof Badge> = {
    title: 'UI/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    render: () => <Badge text="1209" />,
};

export const Simple: Story = {
    render: () => <SimpleBadge text="1209" />,
};
