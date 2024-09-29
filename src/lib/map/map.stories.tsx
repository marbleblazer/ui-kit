import type { Meta, StoryObj } from '@storybook/react';
import { Map } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';

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
                <Map coordinates={{ lon: 9.56413004748697, lat: 51.65120378622913 }} />
            </Box>
        );
    },
};

export const Drawable: Story = {
    render: () => {
        const [drawState, setDrawState] = useState<GeoJSON.Feature[] | null>(null);

        console.log(drawState);
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map onChange={setDrawState} coordinates={{ lon: 49.108891, lat: 55.796391 }} isDrawable />
            </Box>
        );
    },
};
