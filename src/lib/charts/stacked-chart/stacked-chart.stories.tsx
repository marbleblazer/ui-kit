import type { Meta, StoryObj } from '@storybook/react';

import { StackedChart } from '@chirp/ui/lib';

import { Box } from '@mui/material';
import { mockStackedData } from './mock-data';

const meta: Meta<typeof StackedChart> = {
    title: 'UI/Charts/StackedChart',
    component: StackedChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StackedChart>;

export const Default: Story = {
    render: () => {
        const preparedData = mockStackedData.map((elem) => elem.fuel_consumption);

        return (
            <Box
                sx={{
                    width: '1000px',
                    height: '800px',
                }}
            >
                <StackedChart
                    colors={[
                        '#5F75FF',
                        '#FEFF84',
                        '#FFD262',
                        '#85EDFF',
                        '#C9F7FF',
                        '#CCA6FF',
                        '#FFA6E3',
                        '#00D134',
                        '#CCFF5F',
                        '#E8C92D',
                    ]}
                    handleClick={(data) => console.log(data)}
                    style={{ width: '100%', height: '100%' }}
                    data={preparedData}
                />
            </Box>
        );
    },
};
