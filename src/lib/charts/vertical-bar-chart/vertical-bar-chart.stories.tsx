import type { Meta, StoryObj } from '@storybook/react';

import { VerticalBarChart } from '@chirp/ui/lib';

import { Box, useTheme } from '@mui/material';

const meta: Meta<typeof VerticalBarChart> = {
    title: 'UI/Charts/VerticalBarChart',
    component: VerticalBarChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VerticalBarChart>;

export const Default: Story = {
    render: () => {
        const theme = useTheme();
        const mockedData = [110, 80, 70, 60, 50, 40, 30, 20, 10];

        return (
            <Box
                sx={{
                    width: '800px',
                    height: '221px',
                }}
            >
                <VerticalBarChart
                    unit="lt"
                    color={theme.palette.base.color6}
                    style={{ width: '100%', height: '100%' }}
                    data={mockedData}
                />
            </Box>
        );
    },
};
