import type { Meta, StoryObj } from '@storybook/react';
import { Button, IconButton } from '@chirp/ui/lib';
import { DcIcon } from '@chirp/ui/assets/new-icons';

const meta: Meta<typeof IconButton> = {
    title: 'UI/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => (
        <IconButton variant="primary">
            <DcIcon />
        </IconButton>
    ),
};

export const Small: Story = {
    render: () => (
        <IconButton variant="primary" size="small">
            <DcIcon />
        </IconButton>
    ),
};

export const Medium: Story = {
    render: () => (
        <IconButton variant="primary" size="medium">
            <DcIcon />
        </IconButton>
    ),
};

export const Large: Story = {
    render: () => (
        <IconButton variant="primary" size="large">
            <DcIcon />
        </IconButton>
    ),
};

export const Secondary: Story = {
    render: () => (
        <IconButton variant="secondary">
            <DcIcon />
        </IconButton>
    ),
};
export const Outlined: Story = {
    render: () => (
        <IconButton variant="outlined">
            <DcIcon />
        </IconButton>
    ),
};
export const Tertiary: Story = {
    render: () => (
        <IconButton variant="tertiary">
            <DcIcon />
        </IconButton>
    ),
};
export const Gray: Story = {
    render: () => (
        <IconButton variant="gray">
            <DcIcon />
        </IconButton>
    ),
};
