import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@chirp/ui/lib';

const meta: Meta<typeof Loader> = {
    title: 'UI/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    render: () => (
        <div style={{ width: '24px', height: '24px' }}>
            <Loader />
        </div>
    ),
};
