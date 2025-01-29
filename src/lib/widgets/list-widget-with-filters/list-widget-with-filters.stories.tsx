import type { Meta, StoryObj } from '@storybook/react';
import { ListWidgetWithFilters, SearchInput, Select, Typography } from '@chirp/ui/lib';
import { Box, Stack, MenuItem, useTheme } from '@mui/material';
import { Fragment, useState } from 'react';
import * as S from './styles';

const meta: Meta<typeof ListWidgetWithFilters> = {
    title: 'UI/Widgets/ListWidgetWithFilters',
    component: ListWidgetWithFilters,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListWidgetWithFilters>;

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
        const theme = useTheme();
        const [favoriteState, setFavoriteState] = useState(false);
        const [deleteState, setDeleteState] = useState(false);

        return (
            <Box
                p={5}
                sx={{
                    width: '762px',
                    height: '343px',
                    background: 'gray',
                }}
            >
                <ListWidgetWithFilters
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    data={mockedData}
                    nameKey="name"
                    valueKey="value"
                    renderFilters={
                        <Stack direction="row" gap={2}>
                            <SearchInput
                                sx={{
                                    backgroundColor: theme.palette.background.background2,
                                }}
                                placeholder="Search by name"
                                value=""
                                onChange={() => {}}
                            />
                            <Select
                                placeholder="All"
                                sx={{
                                    '&.MuiInputBase-root .MuiSelect-select': {
                                        py: 1.25,
                                        pl: 3,
                                    },
                                    height: 28,
                                    mt: 0,
                                    border: 'none',
                                    backgroundColor: theme.palette.background.background2,
                                }}
                                fullWidth
                                error={false}
                            >
                                <MenuItem sx={{ height: 20 }} value={1}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                                <MenuItem sx={{ height: 20 }} value={2}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                                <MenuItem sx={{ height: 20 }} value={3}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                                <MenuItem sx={{ height: 20 }} value={4}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                            </Select>
                        </Stack>
                    }
                    type="period"
                    renderSelectedContent={(item) => (
                        <S.ListWrapper>
                            {['Exceeding', 'Date'].map((name) => (
                                <S.HeaderWrapper>
                                    <Typography
                                        sx={{
                                            color: 'text.text8',
                                        }}
                                        variant="overline"
                                    >
                                        {name}
                                    </Typography>
                                </S.HeaderWrapper>
                            ))}
                            {mockedData.map((_, index) => (
                                <Fragment key={index}>
                                    <Typography
                                        sx={{
                                            color: 'text.text1',
                                        }}
                                        variant="caption12"
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'text.text1',
                                        }}
                                        variant="caption12"
                                        textAlign="end"
                                    >
                                        {new Date().toISOString().split('T')[0]}
                                    </Typography>
                                </Fragment>
                            ))}
                        </S.ListWrapper>
                    )}
                    title="Speed violations"
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
                    width: '762px',
                    height: '343px',
                    background: 'gray',
                }}
            >
                <ListWidgetWithFilters
                    isFavorite={favoriteState}
                    onFavoriteClick={() => setFavoriteState(!favoriteState)}
                    onDeleteClick={() => setDeleteState(!deleteState)}
                    data={mockedData}
                    nameKey="name"
                    deleteDisabled
                    valueKey="value"
                    renderFilters={
                        <Stack direction="row" gap={2}>
                            <SearchInput
                                sx={{
                                    backgroundColor: theme.palette.background.background2,
                                }}
                                placeholder="Search by name"
                                value=""
                                onChange={() => {}}
                            />
                            <Select
                                placeholder="All"
                                sx={{
                                    '&.MuiInputBase-root .MuiSelect-select': {
                                        py: 1.25,
                                        pl: 3,
                                    },
                                    height: 28,
                                    mt: 0,
                                    border: 'none',
                                    backgroundColor: theme.palette.background.background2,
                                }}
                                fullWidth
                                error={false}
                            >
                                <MenuItem sx={{ height: 20 }} value={1}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                                <MenuItem sx={{ height: 20 }} value={2}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                                <MenuItem sx={{ height: 20 }} value={3}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                                <MenuItem sx={{ height: 20 }} value={4}>
                                    Exceeding 1 - 10 km/h
                                </MenuItem>
                            </Select>
                        </Stack>
                    }
                    type="period"
                    renderSelectedContent={(item) => (
                        <S.ListWrapper>
                            {['Exceeding', 'Date'].map((name) => (
                                <S.HeaderWrapper>
                                    <Typography
                                        sx={{
                                            color: 'text.text8',
                                        }}
                                        variant="overline"
                                    >
                                        {name}
                                    </Typography>
                                </S.HeaderWrapper>
                            ))}
                            {mockedData.map((_, index) => (
                                <Fragment key={index}>
                                    <Typography
                                        sx={{
                                            color: 'text.text1',
                                        }}
                                        variant="caption12"
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'text.text1',
                                        }}
                                        variant="caption12"
                                        textAlign="end"
                                    >
                                        {new Date().toISOString().split('T')[0]}
                                    </Typography>
                                </Fragment>
                            ))}
                        </S.ListWrapper>
                    )}
                    title="Speed violations"
                />
            </Box>
        );
    },
};
