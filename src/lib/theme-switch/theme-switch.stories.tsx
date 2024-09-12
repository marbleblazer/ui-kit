import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitch } from '@chirp/ui/lib';

const meta: Meta<typeof ThemeSwitch> = {
    title: 'UI/ThemeSwitch',
    component: ThemeSwitch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThemeSwitch>;

export const Default: Story = {
    render: () => <ThemeSwitch />,
};
