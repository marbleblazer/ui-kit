import type { Meta, StoryObj } from '@storybook/react';
import { DonutWidget } from '@chirp/ui/lib';
import { Box, Stack } from '@mui/system';
import { useState } from 'react';

const meta: Meta<typeof DonutWidget> = {
    title: 'UI/Widgets/DonutWidget',
    component: DonutWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DonutWidget>;

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
                <DonutWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    data={[
                        { name: 'Online', value: 5 },
                        { name: 'Offline', value: 1 },
                    ]}
                    centerText="5/1"
                    colors={['#50D24C', '#E85A2D']}
                    type="online"
                    title="Connection state"
                    renderSelectedContent={({ name }) => (
                        <Stack>
                            any dynamic content
                            <Box>{name}</Box>
                        </Stack>
                    )}
                />
            </Box>
        );
    },
};

export const FiveItems: Story = {
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
                <DonutWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    data={[
                        { name: 'Stationary ', value: 5 },
                        { name: 'Stationary with ignition on', value: 0 },
                        { name: 'Moving', value: 1 },
                        { name: 'No actual state', value: 0 },
                        { name: 'No coordinates', value: 0 },
                    ]}
                    colors={['#50D24C', '#E9C05A', '#7AD9EA', '#586DEC', '#E85A2D']}
                    type="online"
                    title="Motion state"
                    renderSelectedContent={({ name }) => (
                        <Stack>
                            any dynamic content
                            <Box>{name}</Box>
                        </Stack>
                    )}
                />
            </Box>
        );
    },
};
