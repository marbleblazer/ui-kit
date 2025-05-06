import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { BarChartWidget, Typography } from '@chirp/ui/lib';

const meta: Meta<typeof BarChartWidget> = {
    title: 'UI/Widgets/BarChartWidget',
    component: BarChartWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BarChartWidget>;

export const Default: Story = {
    render: () => {
        const theme = useTheme();

        const legendItems = [
            { label: 'Volvo 5864', color: theme.palette.base.color6, id: 0 },
            { label: 'Mercedes 6519', color: theme.palette.base.colorNewRed, id: 1 },
            { label: 'Renault Master', color: theme.palette.base.color16, id: 2 },
            { label: 'Ford Transit', color: theme.palette.base.colorNewYellow01, id: 3 },
            { label: 'Scania 7788', color: theme.palette.base.colorNewYellow02, id: 4 },
        ];

        const data = {
            categories: ['2025-03-18', '2025-05-18', '2025-01-18', '2025-07-18', '2025-09-18'],
            series: [
                [120.1521251, 132, 101, 134, 90], // Volvo
                [220, 182, 191, 234, 290], // Mercedes
                [150, 232, 201, 154, 190], // Renault
                [98, 77, 101, 99, 40], // Ford
                [110, 140, 130, 120, 100], // Scania
            ],
        };

        return (
            <Box
                p={5}
                sx={{
                    width: '832px',
                    height: '356px',
                    background: 'gray',
                }}
            >
                <BarChartWidget
                    emptyFallbackMsg="No data"
                    isLoading={false}
                    renderLeftHeaderContent={<Typography>Top 5 vehicles by Fuel consumption</Typography>}
                    legendItems={legendItems}
                    data={data}
                    legendContainerSx={{ maxWidth: '518px', minHeight: '16px' }}
                />
            </Box>
        );
    },
};
