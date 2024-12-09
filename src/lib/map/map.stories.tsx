import type { Meta, StoryObj } from '@storybook/react';
import { DrawableMap, FeatureMap, TripMap } from '@chirp/ui/lib';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { mockSecondTripData, mockTripData } from './mock';
import { useTheme } from '@emotion/react';

const meta: Meta<typeof FeatureMap> = {
    title: 'UI/Map',
    component: FeatureMap,
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
            <Box sx={{ width: '500px', height: '500px' }}>
                <FeatureMap
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
        const theme = useTheme();

        return (
            <Box sx={{ width: '500px', height: '500px' }}>
                <FeatureMap
                    sx={{
                        '.mapboxgl-popup-content': {
                            width: '334px',
                            minHeight: '290px',
                            fontSize: '12px',
                            padding: '20px !important',

                            label: {
                                color: theme.palette.text.tertiary,
                            },
                        },
                    }}
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
                                    popupMarkup: '',
                                },
                            },
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
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [45.687, 55.4745],
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

export const LineWithPolygons: Story = {
    render: () => {
        const [data, setData] = useState<{ [key: number]: boolean }>({ 1: true, 2: true, 3: true });

        const handleVisibilityChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setData((prev) => ({
                ...prev,
                [id]: event.target.checked,
            }));
        };

        const features = [
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [37.707938391380537, 50.629305557231135],
                        [38.36757031342043, 49.58805663850933],
                        [38.988345205065315, 51.172665398308254],
                        [39.904827800820726, 52.33581991843607],
                    ],
                },
                properties: {},
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [36.707938391380537, 50.629305557231135],
                        [37.36757031342043, 49.58805663850933],
                        [37.988345205065315, 51.172665398308254],
                        [38.904827800820726, 52.33581991843607],
                    ],
                },
                properties: {},
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [35.707938391380537, 50.629305557231135],
                        [36.36757031342043, 49.58805663850933],
                        [36.988345205065315, 51.172665398308254],
                        [38.904827800820726, 52.33581991843607],
                    ],
                },
                properties: {},
            },
        ];

        const visibleData = {
            type: 'FeatureCollection',
            features: features.filter((_, index) => data[index + 1]),
        };

        return (
            <Box sx={{ width: '500px', height: '500px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                    <label>
                        <input type="checkbox" checked={data[1]} onChange={handleVisibilityChange(1)} />
                        Line 1
                    </label>
                    <label>
                        <input type="checkbox" checked={data[2]} onChange={handleVisibilityChange(2)} />
                        Line 2
                    </label>
                    <label>
                        <input type="checkbox" checked={data[3]} onChange={handleVisibilityChange(3)} />
                        Line 3
                    </label>
                </Box>
                {visibleData.features.length > 0 ? (
                    <FeatureMap data={visibleData as GeoJSON.FeatureCollection} />
                ) : (
                    <Box>No features to display</Box>
                )}
            </Box>
        );
    },
};

export const Drawable: Story = {
    render: () => {
        const [drawState, setDrawState] = useState<GeoJSON.GeoJSON | null>({
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [8.376014817619648, 52.61575340976171],
                        [8.311435070258037, 52.61380954535838],
                        [8.247494241110466, 52.607997187449236],
                        [8.184824420234879, 52.598373836101636],
                        [8.124044135081768, 52.585034641489266],
                        [8.065751801292686, 52.568111388876424],
                        [8.010519446060664, 52.547771097140966],
                        [7.958886785226915, 52.52421424983335],
                        [7.911355727484822, 52.49767268243943],
                        [7.868385369891107, 52.46840715366091],
                        [7.830387538683497, 52.43670463207489],
                        [7.797722918535344, 52.402875332435954],
                        [7.7706978022060245, 52.367249538110315],
                        [7.74956148142351, 52.330174247679636],
                        [7.734504289085374, 52.292009684638565],
                        [7.725656292768188, 52.25312570936716],
                        [7.723086630323593, 52.21389817224156],
                        [7.72680347018659, 52.17470524591095],
                        [7.736754572044137, 52.13592377348922],
                        [7.752828417768482, 52.097925667757934],
                        [7.774855878016213, 52.06107439452974],
                        [7.802612376589004, 52.025721571149475],
                        [7.835820512465341, 51.992203708784395],
                        [7.874153098231921, 51.96083912473521],
                        [7.917236573334769, 51.931925048539775],
                        [7.964654750984423, 51.905734943188406],
                        [8.015952858531355, 51.882516060355854],
                        [8.070641832520948, 51.862487246210186],
                        [8.12820283129168, 51.845837012098606],
                        [8.18809192975446, 51.8327218822446],
                        [8.249744962758088, 51.82326502852272],
                        [8.312582485093138, 51.8175552004015],
                        [8.376014817619648, 51.81564595625262],
                        [8.439447150146158, 51.8175552004015],
                        [8.502284672481208, 51.82326502852272],
                        [8.563937705484836, 51.8327218822446],
                        [8.623826803947614, 51.845837012098606],
                        [8.681387802718346, 51.862487246210186],
                        [8.73607677670794, 51.882516060355854],
                        [8.787374884254872, 51.905734943188406],
                        [8.834793061904527, 51.931925048539775],
                        [8.877876537007374, 51.96083912473521],
                        [8.916209122773955, 51.992203708784395],
                        [8.949417258650291, 52.025721571149475],
                        [8.977173757223081, 52.06107439452974],
                        [8.999201217470814, 52.097925667757934],
                        [9.015275063195158, 52.13592377348922],
                        [9.025226165052704, 52.17470524591095],
                        [9.028943004915703, 52.21389817224156],
                        [9.026373342471107, 52.25312570936716],
                        [9.017525346153922, 52.292009684638565],
                        [9.002468153815785, 52.330174247679636],
                        [8.98133183303327, 52.367249538110315],
                        [8.95430671670395, 52.402875332435954],
                        [8.921642096555798, 52.43670463207489],
                        [8.883644265348188, 52.46840715366091],
                        [8.840673907754473, 52.49767268243943],
                        [8.79314285001238, 52.52421424983333],
                        [8.741510189178632, 52.547771097140966],
                        [8.68627783394661, 52.568111388876424],
                        [8.627985500157527, 52.585034641489266],
                        [8.56720521500442, 52.598373836101636],
                        [8.504535394128828, 52.607997187449236],
                        [8.440594564981257, 52.61380954535838],
                        [8.376014817619648, 52.61575340976171],
                    ],
                ],
            },
            properties: {},
        });

        return (
            <Box sx={{ width: '500px', height: '500px' }}>
                <DrawableMap
                    onChange={setDrawState}
                    data={drawState}
                    coordinates={{ lon: 49.108891, lat: 55.796391 }}
                />
            </Box>
        );
    },
};

export const TripMapExample: Story = {
    render: () => {
        const [shouldAnimate, setShouldAnimate] = useState<number>();
        const [checkedState, setCheckedState] = useState(true);
        const [isPaused, setIsPaused] = useState(false);

        const handleStartAnimation = () => {
            setShouldAnimate(1176);
            setIsPaused(false);
        };

        const handlePauseAnimation = () => {
            setIsPaused(!isPaused);
        };

        return (
            <Box sx={{ width: '500px', height: '500px' }}>
                <Stack>
                    <Stack direction="row">
                        <button onClick={handleStartAnimation}>Start Animation</button>
                        <button onClick={handlePauseAnimation}>{isPaused ? 'Play' : 'Pause'} Animation</button>
                    </Stack>
                    <Stack>
                        <label>
                            <input type="checkbox" onChange={() => setCheckedState(!checkedState)} />
                            firstData
                        </label>
                    </Stack>
                </Stack>

                <TripMap
                    data={checkedState ? mockTripData : mockSecondTripData}
                    animateLineId={shouldAnimate}
                    onAnimationEnd={() => setShouldAnimate(undefined)}
                    animationDuration={30000}
                    isLineMarkersNeeded={false}
                    isPaused={isPaused}
                />
            </Box>
        );
    },
};
