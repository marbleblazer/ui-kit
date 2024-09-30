import { Box, MenuItem } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@chirp/ui/lib';

const meta: Meta<typeof Select> = {
    title: 'UI/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => (
        <Box sx={{ width: '400px' }}>
            <Select
                fullWidth
                sx={{ maxHeight: '200px' }}
                label="Select sub-location (optional)"
                error={false}
                placeholder="Select sub-location (optional)"
                MenuProps={{ PaperProps: { sx: { maxHeight: '100px' } } }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
                <MenuItem value={70}>70</MenuItem>
                <MenuItem value={90}>80</MenuItem>
                <MenuItem value={90}>90</MenuItem>
            </Select>
        </Box>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Box sx={{ width: '400px' }}>
            <Select
                disabled
                fullWidth
                sx={{ maxHeight: '200px' }}
                label="Select sub-location (optional)"
                error={false}
                placeholder="Select sub-location (optional)"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
                <MenuItem value={70}>70</MenuItem>
                <MenuItem value={90}>80</MenuItem>
                <MenuItem value={90}>90</MenuItem>
            </Select>
        </Box>
    ),
};
