import type { Meta, StoryObj } from '@storybook/react';
import { ListWidget } from '@chirp/ui/lib';
import { Box } from '@mui/system';
import { useState } from 'react';

const meta: Meta<typeof ListWidget> = {
    title: 'UI/Widgets/ListWidget',
    component: ListWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListWidget>;

const mockedData = [
    {
        name: 'Geofence 1',
        value: '7',
    },
    {
        name: 'Geofence 2',
        value: '17',
    },
    {
        name: 'Geofence 3',
        value: '3',
    },
    {
        name: 'Geofence 4',
        value: '24',
    },
    {
        name: 'Geofence 5',
        value: '14',
    },
    {
        name: 'Geofence 6',
        value: '74',
    },
];

export const Default: Story = {
    render: () => {
        const [favoriteState, setFavoriteState] = useState(false);
        const [deleteState, setDeleteState] = useState(false);

        return (
            <Box
                p={5}
                sx={{
                    width: '440px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <ListWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    columnNames={['Geofence name', 'Number of units']}
                    data={mockedData}
                    nameKey="name"
                    valueKey="value"
                    type="online"
                    title="Geofences with units"
                />
            </Box>
        );
    },
};
