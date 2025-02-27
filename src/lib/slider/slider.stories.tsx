import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
    title: 'UI/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState(70);

        return (
            <Box width="300px">
                <Slider
                    value={value}
                    onChange={(_, value) => setValue(Array.isArray(value) ? value[0] : value)}
                    valueLabelDisplay="on"
                />
            </Box>
        );
    },
};
