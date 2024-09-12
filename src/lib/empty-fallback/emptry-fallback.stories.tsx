import type { Meta, StoryObj } from '@storybook/react';
import { EmptyFallback } from '@chirp/ui/lib';

const meta: Meta<typeof EmptyFallback> = {
    title: 'UI/EmptyFallback',
    component: EmptyFallback,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyFallback>;

export const Default: Story = {
    render: () => (
        <EmptyFallback title="You don’t have favourite widgets" subTitle="texttexttexttexttexttexttexttexttexttext" />
    ),
};
