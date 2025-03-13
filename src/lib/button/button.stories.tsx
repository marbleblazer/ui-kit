import type { Meta, StoryObj } from '@storybook/react';
import { EyeIcon, MapIcon } from '@chirp/ui/assets/icons';
import { Button } from '@chirp/ui/lib';
import { Box, Stack } from '@mui/material';

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
        <Stack gap={1}>
            <Button size="small" variant="primary">
                test
            </Button>
            <Button size="small" variant="primary" isLoading>
                test
            </Button>
        </Stack>
    ),
};

export const SmallSizeWithIcons: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="small" variant="primary" startIcon={<MapIcon />} endIcon={<EyeIcon />}>
                test
            </Button>
            <Button size="small" variant="primary" isLoading startIcon={<MapIcon />} endIcon={<EyeIcon />}>
                test
            </Button>
        </Stack>
    ),
};

export const LargeSize: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="large" variant="primary">
                test
            </Button>
            <Button size="large" isLoading variant="primary">
                test
            </Button>
        </Stack>
    ),
};

export const PrimaryVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="primary">
                test
            </Button>
            <Button isLoading size="medium" variant="primary">
                test
            </Button>
        </Stack>
    ),
};

export const PrimaryVariantWithStartIcon: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="primary" startIcon={<MapIcon />}>
                test
            </Button>
            <Button isLoading size="medium" variant="primary" startIcon={<MapIcon />}>
                test
            </Button>
        </Stack>
    ),
};

export const OutlinedVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="outlined">
                test
            </Button>
            <Button isLoading size="medium" variant="outlined">
                test
            </Button>
        </Stack>
    ),
};

export const SecondaryVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="secondary">
                test
            </Button>
            <Button isLoading size="medium" variant="secondary">
                test
            </Button>
        </Stack>
    ),
};

export const TertiaryVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="tertiary">
                test
            </Button>
            <Button isLoading size="medium" variant="tertiary">
                test
            </Button>
        </Stack>
    ),
};

export const TextVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="text">
                test
            </Button>
            <Button isLoading size="medium" variant="text">
                test
            </Button>
        </Stack>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <Box width="400px" bgcolor="gray" p={2}>
            <Stack gap={1}>
                <Button size="medium" variant="primary" fullWidth>
                    test
                </Button>
                <Button isLoading size="medium" variant="primary" fullWidth>
                    test
                </Button>
            </Stack>
        </Box>
    ),
};
