import type { Meta, StoryObj } from '@storybook/react';
import { EyeIcon, MapIcon } from '@chirp/ui/assets/icons';
import { Button } from '@chirp/ui/lib';
import { Box } from '@mui/material';

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
export const SmallSizeWithIcons: Story = {
    render: () => (
        <Button size="small" variant="primary" startIcon={<MapIcon />} endIcon={<EyeIcon />}>
            test
        </Button>
    ),
};

export const LargeSize: Story = {
    render: () => (
        <Button size="large" variant="primary">
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

export const PrimaryVariantWithStartIcon: Story = {
    render: () => (
        <Button size="medium" variant="primary" startIcon={<MapIcon />}>
            test
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

export const TertiaryVariant: Story = {
    render: () => (
        <Button size="medium" variant="tertiary">
            test
        </Button>
    ),
};
export const FullWidth: Story = {
    render: () => (
        <Box width="400px" bgcolor="gray" p={2}>
            <Button size="medium" variant="primary" fullWidth>
                test
            </Button>
        </Box>
    ),
};
