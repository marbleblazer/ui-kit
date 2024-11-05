import type { Meta, StoryObj } from '@storybook/react';
import { UserPopup } from '@chirp/ui/lib';

const meta: Meta<typeof UserPopup> = {
    title: 'UI/UserPopup',
    component: UserPopup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserPopup>;

export const Default: Story = {
    render: () => <UserPopup name="test@mail.ru" />,
};
