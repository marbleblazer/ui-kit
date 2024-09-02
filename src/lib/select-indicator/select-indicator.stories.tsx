import type { Meta, StoryObj } from '@storybook/react';
import { SelectIndicator } from '@chirp/ui/lib';

const meta: Meta<typeof SelectIndicator> = {
    title: 'UI/SelectIndicator',
    component: SelectIndicator,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectIndicator>;

export const Default: Story = {
    render: () => <SelectIndicator className="story-component" />,
};
