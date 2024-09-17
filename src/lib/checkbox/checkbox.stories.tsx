import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@chirp/ui/lib';

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => <Checkbox />,
};
export const CheckVariant: Story = {
    render: () => <Checkbox variant="check" label="Some label" />,
};
export const VisibleVariant: Story = {
    render: () => <Checkbox variant="visible" label="Some label" />,
};
