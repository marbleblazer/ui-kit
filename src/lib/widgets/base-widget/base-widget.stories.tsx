import type { Meta, StoryObj } from '@storybook/react';
import { BaseWidget, Typography } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof BaseWidget> = {
    title: 'UI/Widgets/BaseWidget',
    component: BaseWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseWidget>;

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
                <BaseWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    type="online"
                    title="Geofences with units"
                >
                    <Typography variant="overline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </BaseWidget>
            </Box>
        );
    },
};

export const Disabled: Story = {
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
                <BaseWidget
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    type="online"
                    title="Geofences with units"
                    deleteDisabled
                >
                    <Typography variant="overline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </BaseWidget>
            </Box>
        );
    },
};
