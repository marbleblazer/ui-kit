import type { Meta, StoryObj } from '@storybook/react';
import { MapIcon } from '@chirp/ui/assets/icons';
import { Button } from '@chirp/ui/lib';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const SmallSize: Story = {
    render: () => (
        <Button size="small" variant="primary">
            test
        </Button>
    ),
};
export const MediumSize: Story = {
    render: () => (
        <Button size="medium" variant="primary">
            test
        </Button>
    ),
};

export const BigSize: Story = {
    render: () => (
        <Button size="big" variant="primary">
            test
        </Button>
    ),
};

export const PrimaryVariant: Story = {
    render: () => (
        <Button size="medium" variant="primary">
            test
        </Button>
    ),
};

export const GroupedVariant: Story = {
    render: () => (
        <Button size="medium" variant="grouped">
            test
        </Button>
    ),
};

export const IconVariant: Story = {
    render: () => (
        <Button size="medium" variant="icon">
            <MapIcon />
        </Button>
    ),
};

export const OutlinedVariant: Story = {
    render: () => (
        <Button size="medium" variant="outlined">
            test
        </Button>
    ),
};

export const SecondaryVariant: Story = {
    render: () => (
        <Button size="medium" variant="secondary">
            test
        </Button>
    ),
};

export const SidebarVariant: Story = {
    render: () => (
        <Button size="medium" variant="sidebar">
            test
        </Button>
    ),
};

export const TertiaryVariant: Story = {
    render: () => (
        <Button size="medium" variant="tertiary">
            test
        </Button>
    ),
};

export const TextVariant: Story = {
    render: () => (
        <Button size="medium" variant="text">
            test
        </Button>
    ),
};
