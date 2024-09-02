import type { Meta, StoryObj } from '@storybook/react';
import { AlertsCount } from '@chirp/ui/lib';

const meta: Meta<typeof AlertsCount> = {
    title: 'UI/AlertsCount',
    component: AlertsCount,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AlertsCount>;

export const Default: Story = {
    render: () => <AlertsCount>2</AlertsCount>,
};
