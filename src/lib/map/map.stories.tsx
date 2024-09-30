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
                        id: 'e98f4bcac3fbd361e59542c162c9e5ee',
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            coordinates: [
                                [7.5333004314530285, 53.02844680432449],
                                [8.499295123471938, 52.418317358787476],
                                [10.36688486144891, 52.9176444081551],
                                [10.325485088933874, 53.356406407921014],
                                [8.904092899248468, 53.430468526658615],
                                [8.614294491643108, 52.970310967610146],
                                [7.882898510542873, 53.05333820467669],
                                [7.809298914961147, 52.83157706764234],
                                [7.179102377786904, 52.60309095943762],
                                [10.960281600831394, 52.63660272761598],
                            ],
                            type: 'LineString',
                        },
                    }}
                    coordinates={{ lon: 9.56413004748697, lat: 51.65120378622913 }}
                />
            </Box>
        );
    },
};

export const Drawable: Story = {
    render: () => {
        const [drawState, setDrawState] = useState<GeoJSON.Feature[] | null>(null);

        console.log(drawState);
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <Map
                    onChange={setDrawState}
                    data={{
                        id: '7944e994f83571f4143fae525adfe088',
                        type: 'Feature',
                        properties: {
                            circleRadius: 1051.4738887815142,
                        },
                        geometry: {
                            coordinates: [
                                [
                                    [20.088792508659395, 58.677872121008136],
                                    [20.088792508659395, 58.677872121008136],
                                    [20.088792508659395, 58.677872121008136],
                                    [20.088792508659395, 58.677872121008136],
                                ],
                            ],
                            type: 'Polygon',
                        },
                    }}
                    coordinates={{ lon: 49.108891, lat: 55.796391 }}
                    isDrawable
                />
            </Box>
        );
    },
};
