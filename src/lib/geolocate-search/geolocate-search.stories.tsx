import type { Meta, StoryObj } from '@storybook/react';
import { GeolocateSearch } from '@chirp/ui/lib';
import { useState } from 'react';
import { GeocodeFeature } from '@mapbox/mapbox-sdk/services/geocoding';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof GeolocateSearch> = {
    title: 'UI/GeolocateSearch',
    component: GeolocateSearch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GeolocateSearch>;

export const Default: Story = {
    render: () => {
        const [selectedState, setSelectedState] = useState<GeocodeFeature['geometry']['coordinates'] | null>(null);

        return (
            <Stack>
                <p>{JSON.stringify(selectedState)}</p>
                <GeolocateSearch
                    selectedValue={selectedState}
                    sx={{
                        width: '400px',
                    }}
                    onSelect={(value) => setSelectedState(value ? value.geometry.coordinates : null)}
                    textFieldProps={{
                        label: 'Search input',
                        placeholder: 'Search',
                    }}
                />
            </Stack>
        );
    },
};
