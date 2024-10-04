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
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Polygon',
                            coordinates: [
                                [
                                    [20.088792508659395, 68.13399092206657],
                                    [17.617457342558332, 68.07080963900395],
                                    [15.205245808684479, 67.8828981207403],
                                    [12.90692945394302, 67.57501378499637],
                                    [10.7693514081488, 67.15464907527175],
                                    [8.82915501184907, 66.63146665653011],
                                    [7.111972496781832, 66.01665740841521],
                                    [5.632886082042022, 65.32231268458075],
                                    [4.397770894135714, 64.56087695482071],
                                    [3.4050860920804054, 63.74471520525307],
                                    [2.647751773951203, 62.8858017976263],
                                    [2.114869106540283, 61.995518932459774],
                                    [1.7931583787295453, 61.084543702573285],
                                    [1.6680784113261182, 60.16280066600811],
                                    [1.7246456748225232, 59.239459022553504],
                                    [1.947998365070106, 58.322957473637835],
                                    [2.3237586740037735, 57.42104415000939],
                                    [2.838243770097232, 56.54082281357565],
                                    [3.4785684247595463, 55.68879958815341],
                                    [4.232673343290995, 54.87092673753491],
                                    [5.089304930388511, 54.0926416020956],
                                    [6.037965205330421, 53.35889987615931],
                                    [7.06884504335588, 52.67420309753302],
                                    [8.172749731129361, 52.042620642432304],
                                    [9.341022752031925, 51.467806759640126],
                                    [10.565471514249356, 50.95301329864879],
                                    [11.83829718208895, 50.50109882979291],
                                    [13.15202969091988, 50.11453484779115],
                                    [14.499468282161033, 49.79540971151564],
                                    [15.873627386024287, 49.54543091335332],
                                    [17.267687333942632, 49.36592619806907],
                                    [18.674949149192607, 49.25784396785295],
                                    [20.088792508659388, 49.22175331994967],
                                    [21.502635868126177, 49.25784396785295],
                                    [22.909897683376148, 49.36592619806907],
                                    [24.303957631294498, 49.54543091335332],
                                    [25.678116735157747, 49.79540971151564],
                                    [27.025555326398905, 50.11453484779115],
                                    [28.33928783522984, 50.501098829792916],
                                    [29.612113503069427, 50.95301329864878],
                                    [30.836562265286855, 51.467806759640126],
                                    [32.00483528618943, 52.042620642432304],
                                    [33.1087399739629, 52.674203097533],
                                    [34.139619811988354, 53.358899876159306],
                                    [35.088280086930276, 54.0926416020956],
                                    [35.94491167402779, 54.87092673753491],
                                    [36.699016592559225, 55.6887995881534],
                                    [37.33934124722155, 56.540822813575645],
                                    [37.85382634331501, 57.42104415000939],
                                    [38.22958665224867, 58.322957473637814],
                                    [38.452939342496265, 59.239459022553504],
                                    [38.50950660599267, 60.16280066600811],
                                    [38.38442663858923, 61.084543702573285],
                                    [38.06271591077851, 61.995518932459774],
                                    [37.52983324336759, 62.8858017976263],
                                    [36.77249892523838, 63.74471520525307],
                                    [35.77981412318308, 64.56087695482071],
                                    [34.54469893527678, 65.32231268458075],
                                    [33.06561252053695, 66.01665740841521],
                                    [31.348430005469723, 66.63146665653011],
                                    [29.408233609169983, 67.15464907527175],
                                    [27.27065556337579, 67.57501378499637],
                                    [24.97233920863432, 67.8828981207403],
                                    [22.560127674760455, 68.07080963900395],
                                    [20.088792508659395, 68.13399092206657],
                                ],
                            ],
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
        const [drawState, setDrawState] = useState<GeoJSON.Feature | null>({
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

        console.log(drawState);
        return (
            <Box sx={{ width: '1200px', height: '1200px' }}>
                <button onClick={() => setDrawState(null)}>Давай, сотри все данные</button>
                <Map
                    onChange={setDrawState}
                    data={drawState}
                    coordinates={{ lon: 49.108891, lat: 55.796391 }}
                    // isDrawable
                />
            </Box>
        );
    },
};
