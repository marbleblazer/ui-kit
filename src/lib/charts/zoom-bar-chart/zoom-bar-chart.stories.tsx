import type { Meta, StoryObj } from '@storybook/react';
import { ZoomBarChart } from '@chirp/ui/lib';
import { Box, useTheme } from '@mui/material';

const meta: Meta<typeof ZoomBarChart> = {
    title: 'UI/Charts/ZoomBarChart',
    component: ZoomBarChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ZoomBarChart>;

export const Default: Story = {
    render: () => {
        const theme = useTheme();

        const categories = ['10 Mar', '17 Mar', '24 Mar', '31 Mar', '7 Apr', '14 Apr'];

        const legendItems = [
            { id: 1, label: 'Volvo 5864', color: theme.palette.base.color6 },
            { id: 2, label: 'Mercedes 6519', color: theme.palette.base.colorNewRed },
            { id: 3, label: 'Renault Master', color: theme.palette.base.color16 },
            { id: 4, label: 'Ford Transit', color: theme.palette.base.colorNewYellow01 },
            { id: 5, label: 'Scania 7788', color: theme.palette.base.colorNewYellow02 },
        ];

        const seriesData = [
            [70, 90, 120, 100, 80, 95], // Volvo
            [100, 140, 130, 150, 160, 120], // Mercedes
            [80, 100, 90, 110, 105, 100], // Renault
            [60, 80, 85, 90, 88, 85], // Ford
            [90, 110, 115, 100, 70, 75], // Scania
        ];

        return (
            <Box
                sx={{
                    width: '800px',
                    height: '400px',
                }}
            >
                <ZoomBarChart categories={categories} seriesData={seriesData} legendItems={legendItems} />
            </Box>
        );
    },
};
