import type { Meta, StoryObj } from '@storybook/react';
import { TextSecondary } from '@ui/lib';

const meta: Meta<typeof TextSecondary> = {
    title: 'UI/TextElements/TextSecondary',
    component: TextSecondary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextSecondary>;

export const Default: Story = {
    render: () => (
        <TextSecondary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </TextSecondary>
    ),
};
