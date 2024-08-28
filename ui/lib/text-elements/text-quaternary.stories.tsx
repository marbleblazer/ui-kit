import type { Meta, StoryObj } from '@storybook/react';
import { TextQuaternary } from '@ui/lib';

const meta: Meta<typeof TextQuaternary> = {
    title: 'UI/TextElements/TextQuaternary',
    component: TextQuaternary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextQuaternary>;

export const Default: Story = {
    render: () => (
        <TextQuaternary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </TextQuaternary>
    ),
};
