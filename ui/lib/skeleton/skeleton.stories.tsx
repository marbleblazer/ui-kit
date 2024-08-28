import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@ui/lib';

const meta: Meta<typeof Skeleton> = {
    title: 'UI/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => <Skeleton sx={{ width: '100px', height: '100px' }} />,
};
