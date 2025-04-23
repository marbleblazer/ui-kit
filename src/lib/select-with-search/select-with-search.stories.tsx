import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectWithSearch } from '@chirp/ui/lib';
import { useState } from 'react';
import { DcIcon } from '@chirp/ui/assets/new-icons';

const meta: Meta<typeof SelectWithSearch> = {
    title: 'UI/SelectWithSearch',
    component: SelectWithSearch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectWithSearch>;

const options = [
    { name: 'Option 1', value: 1, badge: 'Admin' },
    { name: 'Option 2', value: 2, badge: 'Manager' },
    { name: 'Option 3', value: 3 },
];

export const Default: Story = {
    render: () => (
        <Box sx={{ width: '400px' }}>
            <SelectWithSearch
                fullWidth
                sx={{ maxHeight: '228px' }}
                label="Select sub-location (optional)"
                error={false}
                placeholder="Select sub-location (optional)"
                collection={options}
                MenuProps={{ PaperProps: { sx: { maxHeight: '228px' } } }}
            />
        </Box>
    ),
};

export const Clearable: Story = {
    render: () => {
        const [value, setValue] = useState<number | null>(null);

        return (
            <Box sx={{ width: '400px' }}>
                <SelectWithSearch
                    fullWidth
                    sx={{ maxHeight: '200px' }}
                    label="Select sub-location (optional)"
                    error={false}
                    placeholder="Select sub-location (optional)"
                    onClear={() => setValue(null)}
                    MenuProps={{ PaperProps: { sx: { maxHeight: '100px' } } }}
                    value={value ?? ''}
                    collection={options}
                    onChange={(e) => setValue(e.target.value as number)}
                />
            </Box>
        );
    },
};

/** an example of how explicitly specifying and adornment overwrites OnClear */
export const ClearableWithEndAdornment: Story = {
    render: () => {
        const [value, setValue] = useState<number | null>(null);

        return (
            <Box sx={{ width: '400px' }}>
                <SelectWithSearch
                    fullWidth
                    sx={{ maxHeight: '200px' }}
                    label="Select sub-location (optional)"
                    error={false}
                    placeholder="Select sub-location (optional)"
                    onClear={() => setValue(null)}
                    MenuProps={{ PaperProps: { sx: { maxHeight: '100px' } } }}
                    value={value ?? ''}
                    collection={options}
                    onChange={(e) => setValue(e.target.value as number)}
                    endAdornment={<DcIcon />}
                    name={''}
                />
            </Box>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <Box sx={{ width: '400px' }}>
            <SelectWithSearch
                disabled
                fullWidth
                sx={{ maxHeight: '200px' }}
                label="Select sub-location (optional)"
                error={false}
                collection={options}
                placeholder="Select sub-location (optional)"
            />
        </Box>
    ),
};
