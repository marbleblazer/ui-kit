import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from '@chirp/ui/lib';

import { mockdata } from '../mock-data';
import { Box } from '@mui/material';

const meta: Meta<typeof LineChart> = {
    title: 'UI/LineChart',
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
        const createData = () => {
            const data = mockdata.map((item) => [
                new Date(item.fixTime).toISOString().split('T')[1].split('.')[0],
                item.speed,
            ]);

            return data;
        };

        return (
            <Box
                sx={{
                    width: '1000px',
                    height: '800px',
                }}
            >
                <LineChart
                    style={{ width: '100%', height: '100%' }}
                    data={createData()}
                    xAxisName="Speed"
                    yAxisName="Time"
                    resolvedTooltipTitle={(data) => `${data[0]}`}
                    resolvedTooltipSubtitle={(data) => `${Number(data[1]).toFixed(3)} km/h`}
                />
            </Box>
        );
    },
};
