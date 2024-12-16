import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '.';

const meta: Meta<typeof Radio> = {
    title: 'UI/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    render: () => <Radio />,
};

export const CheckVariant: Story = {
    render: () => <Radio variant="check" label="Some label" />,
};
