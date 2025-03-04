import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from '@chirp/ui/lib';

import { mockData } from '../mock-data';
import { Box } from '@mui/material';

const meta: Meta<typeof LineChart> = {
    title: 'UI/Charts/LineChart',
    component: LineChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
    render: () => {
        return (
            <Box
                sx={{
                    width: '1000px',
                    height: '800px',
                }}
            >
                <LineChart
                    style={{ width: '100%', height: '100%' }}
                    data={mockData} // [[fixTime, speed]]
                    xAxisName="Speed"
                    yAxisName="Time"
                    resolvedTooltipTitle={(data) => `${data[0]}`}
                    resolvedTooltipSubtitle={(data) => `${Number(data[1]).toFixed(3)} km/h`}
                />
            </Box>
        );
    },
};
