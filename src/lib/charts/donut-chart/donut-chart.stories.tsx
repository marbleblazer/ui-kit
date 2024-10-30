import type { Meta, StoryObj } from '@storybook/react';

import { DonutChart } from '@chirp/ui/lib';

import { Box } from '@mui/material';

const meta: Meta<typeof DonutChart> = {
    title: 'UI/Charts/DonutChart',
    component: DonutChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
    render: () => {
        return (
            <Box>
                <DonutChart
                    colors={['#50D24C', '#E85A2D']}
                    data={[
                        { name: 'Online', value: 5 },
                        { name: 'Offline', value: 1 },
                    ]}
                />
            </Box>
        );
    },
};

export const WithCenterText: Story = {
    render: () => {
        return (
            <Box>
                <DonutChart
                    centerText="5/1"
                    colors={['#50D24C', '#E85A2D']}
                    data={[
                        { name: 'Online', value: 5 },
                        { name: 'Offline', value: 1 },
                    ]}
                />
            </Box>
        );
    },
};
