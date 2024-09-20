import type { Meta, StoryObj } from '@storybook/react';
import { Map } from '@chirp/ui/lib';
import { Box } from '@mui/material';

const meta: Meta<typeof Map> = {
    title: 'UI/Map',
    component: Map,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Default: Story = {
    render: () => {
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map coordinates={{ lon: 9.56413004748697, lat: 51.65120378622913 }} setCoordinates={() => {}} />
            </Box>
        );
    },
};

export const Drawable: Story = {
    render: () => {
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map coordinates={{ lon: 49.108891, lat: 55.796391 }} setCoordinates={() => {}} isDrawable />
            </Box>
        );
    },
};
