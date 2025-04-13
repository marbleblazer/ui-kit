import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { LineChartWidget } from '.';
import { Typography } from '../../typogrpahy';
import { useState } from 'react';
import { mockChartData } from './mock';

const meta: Meta<typeof LineChartWidget> = {
    title: 'UI/Widgets/LineChartWidget',
    component: LineChartWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LineChartWidget>;

export const Default: Story = {
    render: () => {
        const [selectedItems, setSelectedItems] = useState();

        const theme = useTheme();

        const listData = [
            { label: 'Volvo 5864', color: theme.palette.base.color6 },
            { label: 'Mercedes 6519', color: '#F74C14' },
            { label: 'VW 345', color: theme.palette.base.color16 },
            { label: 'Honda 1233', color: '#F9FB82' },
            { label: 'Volvo 58644', color: '#FDD061' },
        ];

        return (
            <Box
                p={5}
                sx={{
                    width: '700px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <LineChartWidget
                    renderLeftHeaderContent={<Typography variant="body1">Top 5 vehicles by Total distance</Typography>}
                    legendItems={listData}
                    chartData={mockChartData}
                    chartStyles={{ marginTop: '45px' }}
                    colors={[
                        theme.palette.base.color12,
                        theme.palette.base.color18,
                        theme.palette.base.color13,
                        theme.palette.base.color16,
                        theme.palette.base.color17,
                        theme.palette.base.color19,
                        theme.palette.base.color15,
                        theme.palette.base.color9,
                        theme.palette.base.color20,
                        theme.palette.base.color14,
                    ]}
                />
            </Box>
        );
    },
};
