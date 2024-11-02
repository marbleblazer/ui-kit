import type { Meta, StoryObj } from '@storybook/react';
import { StackedLineChartWidget } from '@chirp/ui/lib';
import { Box } from '@mui/system';
import { useState } from 'react';
import { mockStackedData } from '../../charts/stacked-chart/mock-data';

const meta: Meta<typeof StackedLineChartWidget> = {
    title: 'UI/Widgets/StackedLineChartWidget',
    component: StackedLineChartWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StackedLineChartWidget>;

const listData = [
    {
        value: 0,
        label: 'Volvo 5864',
    },
    { value: 1, label: 'Mercedes 6519' },
    { value: 2, label: 'VW 345' },
    { value: 3, label: 'Honda 1233' },
    { value: 4, label: 'Volvo 5864' },
    { value: 5, label: 'Mercedes 6519' },
    { value: 6, label: 'VW 345' },
    { value: 7, label: 'Honda 1233' },
    { value: 8, label: 'VW 343' },
    { value: 9, label: 'Mercedes 6519' },
];

export const Default: Story = {
    render: () => {
        const [favoriteState, setFavoriteState] = useState(false);
        const [deleteState, setDeleteState] = useState(false);

        return (
            <Box
                p={5}
                sx={{
                    width: '802px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <StackedLineChartWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    selectOptions={listData}
                    collection={mockStackedData}
                    idKey="id"
                    dataKey="fuel_consumption"
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
                    chartStyles={{ width: '100%', height: '290px' }}
                    type="period"
                    title="Milleage"
                />
            </Box>
        );
    },
};

export const Empty: Story = {
    render: () => {
        const [favoriteState, setFavoriteState] = useState(false);
        const [deleteState, setDeleteState] = useState(false);

        return (
            <Box
                p={5}
                sx={{
                    width: '802px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <StackedLineChartWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    selectOptions={listData}
                    collection={[]}
                    idKey="id"
                    dataKey="fuel_consumption"
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
                    chartStyles={{ width: '100%', height: '290px' }}
                    type="period"
                    title="Milleage"
                />
            </Box>
        );
    },
};
