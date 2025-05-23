import type { Meta, StoryObj } from '@storybook/react';
import { Button, IconButton } from '@chirp/ui/lib';
import { DcIcon } from '@chirp/ui/assets/new-icons';
import Stack from '@mui/material/Stack';

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
        <Stack gap={1}>
            <IconButton variant="primary">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="primary">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Small: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="primary" size="small">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="primary" size="small">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Medium: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="primary" size="medium">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="primary" size="medium">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Large: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="primary" size="large">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="primary" size="large">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Secondary: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="secondary">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="secondary">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Outlined: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="outlined">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="outlined">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const AlertSecondary: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="alertSecondary">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="alertSecondary">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Tertiary: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="tertiary">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="tertiary">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Gray: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton variant="gray">
                <DcIcon />
            </IconButton>
            <IconButton isLoading variant="gray" sx={{ position: 'absolute' }}>
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};
