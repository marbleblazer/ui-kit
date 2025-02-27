import type { Meta, StoryObj } from '@storybook/react';
import { VerticalBarsChartWidget } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';
import { mockBarsData } from '../../charts/vertical-bar-chart/mock-data';

const meta: Meta<typeof VerticalBarsChartWidget> = {
    title: 'UI/Widgets/VerticalBarsChartWidget',
    component: VerticalBarsChartWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VerticalBarsChartWidget>;

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
                <VerticalBarsChartWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    collection={mockBarsData}
                    listLabel="Units"
                    valueKey="total"
                    nameKey="name"
                    chartStyles={{ width: '100%', height: '290px' }}
                    type="period"
                    unit="lt"
                    title="Top units by fuel consumption "
                />
            </Box>
        );
    },
};

export const TwoValue: Story = {
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
                <VerticalBarsChartWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    collection={mockBarsData.slice(0, 2)}
                    listLabel="Units"
                    valueKey="total"
                    nameKey="name"
                    chartStyles={{ width: '100%', height: '290px' }}
                    type="period"
                    unit="lt"
                    title="Top units by fuel consumption "
                />
            </Box>
        );
    },
};

export const Single: Story = {
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
                <VerticalBarsChartWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    collection={mockBarsData.slice(0, 1)}
                    listLabel="Units"
                    valueKey="total"
                    nameKey="name"
                    chartStyles={{ width: '100%', height: '290px' }}
                    type="period"
                    unit="lt"
                    title="Top units by fuel consumption "
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
                <VerticalBarsChartWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    collection={[]}
                    listLabel="Units"
                    valueKey="total"
                    nameKey="name"
                    chartStyles={{ width: '100%', height: '290px', aspectRatio: '2/3' }}
                    type="period"
                    unit="lt"
                    title="Top units by fuel consumption "
                />
            </Box>
        );
    },
};
