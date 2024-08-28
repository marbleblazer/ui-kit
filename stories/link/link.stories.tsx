import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@ui/lib';

const meta: Meta<typeof Link> = {
    title: 'UI/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const DefaultLink: Story = {
    render: () => (
        <Link href="/" className="story-component">
            some
        </Link>
    ),
};
