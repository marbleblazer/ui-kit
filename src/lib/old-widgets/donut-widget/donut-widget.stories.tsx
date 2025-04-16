import type { Meta, StoryObj } from '@storybook/react';
import { DonutWidget } from '@chirp/ui/lib';
import { Box, Stack, useTheme } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof DonutWidget> = {
    title: 'UI/OldWidgets/DonutWidget',
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
                    colors={['#ff00ff', '#ff0000']}
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
        const theme = useTheme();
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
                    colors={[
                        theme.palette.base.color9,
                        theme.palette.base.color14,
                        theme.palette.base.color11,
                        theme.palette.base.color12,
                        theme.palette.base.color13,
                    ]}
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

export const Disabled: Story = {
    render: () => {
        const theme = useTheme();
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
                    deleteDisabled
                    colors={[
                        theme.palette.base.color9,
                        theme.palette.base.color14,
                        theme.palette.base.color11,
                        theme.palette.base.color12,
                        theme.palette.base.color13,
                    ]}
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
