import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@chirp/ui/lib';

const meta: Meta<typeof Typography> = {
    title: 'UI/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    render: () => (
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};

export const h2: Story = {
    render: () => (
        <Typography variant="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
export const h3: Story = {
    render: () => (
        <Typography variant="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};

export const ParagraphPrimary: Story = {
    render: () => (
        <Typography variant="paragraphPrimary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};

export const ParagraphSecondary: Story = {
    render: () => (
        <Typography variant="paragraphSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
export const Subtitle1: Story = {
    render: () => (
        <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
export const Body1: Story = {
    render: () => (
        <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
export const Caption: Story = {
    render: () => (
        <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
export const Overline: Story = {
    render: () => (
        <Typography variant="overline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
export const Button: Story = {
    render: () => (
        <Typography variant="button">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error eius adipisci sit harum quidem fugit
            facilis, ipsa, necessitatibus cumque accusantium ducimus corporis quas, expedita rem? Debitis mollitia
            consequuntur explicabo?
        </Typography>
    ),
};
