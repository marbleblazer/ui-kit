import type { Meta, StoryObj } from '@storybook/react';
import { TemperatureWidget } from '@chirp/ui/lib';

const meta: Meta<typeof TemperatureWidget> = {
    title: 'UI/Widgets/TemperatureWidget',
    component: TemperatureWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemperatureWidget>;

export const Default: Story = {
    render: () => <TemperatureWidget />,
};
