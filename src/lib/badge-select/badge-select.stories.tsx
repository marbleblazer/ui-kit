import { Box, MenuItem } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { BadgeSelect } from '@chirp/ui/lib';

const meta: Meta<typeof BadgeSelect> = {
    title: 'UI/BadgeSelect',
    component: BadgeSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BadgeSelect>;

export const Default: Story = {
    render: () => (
        <Box sx={{ width: '132px' }}>
            <BadgeSelect
                fullWidth
                error={false}
                placeholder="Bussines"
                MenuProps={{ PaperProps: { sx: { maxHeight: '132px' } } }}
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
            </BadgeSelect>
        </Box>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Box sx={{ width: '132px' }}>
            <BadgeSelect disabled fullWidth sx={{ maxHeight: '200px' }} error={false} placeholder="Bussines">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
                <MenuItem value={70}>70</MenuItem>
                <MenuItem value={90}>80</MenuItem>
                <MenuItem value={90}>90</MenuItem>
            </BadgeSelect>
        </Box>
    ),
};
