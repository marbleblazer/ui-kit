import type { Meta, StoryObj } from '@storybook/react';
import { ImagePreview } from '@chirp/ui/lib';

const meta: Meta<typeof ImagePreview> = {
    title: 'UI/ImagePreview',
    component: ImagePreview,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImagePreview>;

export const Default: Story = {
    render: () => <ImagePreview onLoad={console.log} />,
};

export const WithBorder: Story = {
    render: () => <ImagePreview withBorder onLoad={console.log} />,
};

export const WithPreview: Story = {
    render: () => (
        <ImagePreview onLoad={console.log} withBorder previewUrl="https://chirpwireless.io/images/footer/tim-lg.png" />
    ),
};

export const WithDeleteIcon: Story = {
    render: () => (
        <ImagePreview onRemove={() => null} withBorder previewUrl="https://chirpwireless.io/images/footer/tim-lg.png" />
    ),
};
