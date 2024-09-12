import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@chirp/ui/lib';

const meta: Meta<typeof Avatar> = {
    title: 'UI/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithUsername: Story = {
    render: () => <Avatar userName="scotch" />,
};

export const WithAvatarUrl: Story = {
    render: () => <Avatar avatarUrl="https://chirpwireless.io/images/footer/tim-lg.png" />,
};
