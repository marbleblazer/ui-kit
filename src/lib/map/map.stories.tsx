import type { Meta, StoryObj } from '@storybook/react';
import { Map } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Map> = {
    title: 'UI/Map',
    component: Map,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Default: Story = {
    render: () => {
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map
                    data={{
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [49.687, 55.4745],
                                },
                                properties: {
                                    title: 'Mapbox',
                                    description: 'Washington, D.C.',
                                },
                            },
                        ],
                    }}
                    coordinates={{ lon: 9.56413004748697, lat: 51.65120378622913 }}
                />
            </Box>
        );
    },
};
export const ThreeMarkers: Story = {
    render: () => {
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map
                    data={{
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [47.687, 53.4745],
                                },
                                properties: {
                                    title: 'Mapbox',
                                    description: 'Washington, D.C.',
                                    device_id: 1,
                                    popupData: {
                                        lastUpdate: '1 minute ago',
                                        address: '18 Rüdesheimer Straße, 53175 Bonn, Nordrhein-Westfalen, Germany',
                                        motion: 'Stationary',
                                        unitName: 'Car_2',
                                        uniqueId: '1344214',
                                        model: 'Tesla model 1',
                                        speed: '1 minute ago',
                                        driver: 'Anton Driver',
                                    },
                                },
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [49.687, 55.4745],
                                },
                                properties: {
                                    device_id: 2,
                                    title: 'Mapbox',
                                    description: 'Washington, D.C.',
                                },
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [45.687, 55.4745],
                                },
                                properties: {
                                    device_id: 3,
                                    title: 'Mapbox',
                                    description: 'Washington, D.C.',
                                },
                            },
                        ],
                    }}
                    coordinates={{ lon: 9.56413004748697, lat: 51.65120378622913 }}
                />
            </Box>
        );
    },
};

export const Drawable: Story = {
    render: () => {
        const [drawState, setDrawState] = useState<GeoJSON.GeoJSON | null>({
            id: '60c44ec4be05c62bd01c761fa375b33a',
            type: 'Feature',
            properties: {},
            geometry: {
                coordinates: [
                    [13.707938391380537, 50.629305557231135],
                    [18.36757031342043, 49.58805663850933],
                    [22.78341174564946, 52.400439823673565],
                    [33.85483956914348, 51.714528001238534],
                    [38.988345205065315, 51.172665398308254],
                    [39.904827800820726, 52.33581991843607],
                ],
                type: 'LineString',
            },
        });

        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map
                    onChange={setDrawState}
                    data={drawState}
                    coordinates={{ lon: 49.108891, lat: 55.796391 }}
                    isDrawable
                />
            </Box>
        );
    },
};
export const ClearData: Story = {
    render: () => {
        const [drawState, setDrawState] = useState<GeoJSON.GeoJSON | null>({
            id: '60c44ec4be05c62bd01c761fa375b33a',
            type: 'Feature',
            properties: {},
            geometry: {
                coordinates: [
                    [13.707938391380537, 50.629305557231135],
                    [18.36757031342043, 49.58805663850933],
                    [22.78341174564946, 52.400439823673565],
                    [33.85483956914348, 51.714528001238534],
                    [38.988345205065315, 51.172665398308254],
                    [39.904827800820726, 52.33581991843607],
                ],
                type: 'LineString',
            },
        });

        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <button onClick={() => setDrawState(null)}>Clear data</button>
                <Map onChange={setDrawState} data={drawState} coordinates={{ lon: 49.108891, lat: 55.796391 }} />
            </Box>
        );
    },
};
