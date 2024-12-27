import type { Meta, StoryObj } from '@storybook/react';
import { ChirpWidget, SystemWidget } from '@chirp/ui/lib';
import { Settings, WidgetTypes } from './types';
import { Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof ChirpWidget> = {
    title: 'UI/ChirpWidget',
    component: ChirpWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ChirpWidget>;

export const String: Story = {
    render: () => {
        const [configTypeState, setConfigTypeState] = useState<boolean>(false);

        const handleSwitchView = () => {
            setConfigTypeState((prev) => !prev);
        };

        return (
            <Box width="414px">
                {configTypeState ? (
                    <SystemWidget
                        attributeName="allgateways"
                        title="All gateways"
                        value={true}
                        units={null}
                        date={0}
                        switchView={handleSwitchView}
                    />
                ) : (
                    <ChirpWidget
                        deviceId="28584348-d0b1-4d74-8182-7c2343ba30be"
                        lastSeen={1734513384}
                        graphValues={null}
                        attributeName="allgateways"
                        isLoading={false}
                        isError={false}
                        timequant="hour"
                        currentValue="nanitaki: -110"
                        switchView={handleSwitchView}
                        config={{
                            type: WidgetTypes.Text,
                            sensor_type: 'none',
                            display_value: 'avg',
                            color: 'text.text1',
                            title: '',
                            units: '',
                            icon: '',
                            value_map: '',
                        }}
                    />
                )}
            </Box>
        );
    },
};

export const Boolean: Story = {
    render: () => {
        const [configTypeState, setConfigTypeState] = useState<boolean>(false);

        const handleSwitchView = () => {
            setConfigTypeState((prev) => !prev);
        };

        return (
            <Box width="414px">
                {configTypeState ? (
                    <SystemWidget
                        attributeName="allgateways"
                        title="All gateways"
                        value={true}
                        units={null}
                        date={0}
                        switchView={handleSwitchView}
                    />
                ) : (
                    <ChirpWidget
                        deviceId="28584348-d0b1-4d74-8182-7c2343ba30be"
                        lastSeen={1734513384}
                        graphValues={null}
                        attributeName="valveState"
                        isLoading={false}
                        isError={false}
                        timequant="hour"
                        currentValue={true}
                        switchView={handleSwitchView}
                        config={{
                            type: WidgetTypes.Boolean,
                            sensor_type: 'none',
                            display_value: 'avg',
                            alertColor: '',
                            color: 'text.text1',
                            title: '',
                            units: '',
                            icon: '',
                            value_map: '',
                        }}
                    />
                )}
            </Box>
        );
    },
};

export const Graphic: Story = {
    render: () => {
        const [configTypeState, setConfigTypeState] = useState<boolean>(false);
        const [_, setSettings] = useState<Settings>();

        const handleSwitchView = () => {
            setConfigTypeState((prev) => !prev);
        };

        return (
            <Box width="414px">
                {configTypeState ? (
                    <SystemWidget
                        attributeName="allgateways"
                        title="All gateways"
                        value={true}
                        units={null}
                        date={0}
                        switchView={handleSwitchView}
                    />
                ) : (
                    <ChirpWidget
                        deviceId="28584348-d0b1-4d74-8182-7c2343ba30be"
                        attributeName="rssi"
                        timequant="hour"
                        lastSeen={1734511879}
                        isLoading={false}
                        currentValue={-110}
                        isError={false}
                        switchView={handleSwitchView}
                        onSettingsChange={setSettings}
                        graphValues={{
                            '1734469200': {
                                avg: -110.33333333333333,
                                count: 12,
                                delta: '-549',
                                first: '-106.00',
                                last: '-112.00',
                                lastDate: '2024-12-17 21:58:27',
                                max: 0,
                                min: -113,
                            },
                            '1734472800': {
                                avg: -112.08333333333333,
                                count: 12,
                                delta: '-1105',
                                first: '-113.00',
                                last: '-112.00',
                                lastDate: '2024-12-17 22:58:41',
                                max: 0,
                                min: -114,
                            },
                            '1734476400': {
                                avg: -111.66666666666667,
                                count: 12,
                                delta: '-1770',
                                first: '-113.00',
                                last: '-111.00',
                                lastDate: '2024-12-17 23:58:55',
                                max: 0,
                                min: -113,
                            },
                            '1734480000': {
                                avg: -111.08333333333333,
                                count: 12,
                                delta: '-2210',
                                first: '-113.00',
                                last: '-110.00',
                                lastDate: '2024-12-18 00:59:08',
                                max: 0,
                                min: -113,
                            },
                            '1734483600': {
                                avg: -110.45454545454545,
                                count: 11,
                                delta: '-2757',
                                first: '-112.00',
                                last: '-111.00',
                                lastDate: '2024-12-18 01:59:34',
                                max: 0,
                                min: -112,
                            },
                            '1734487200': {
                                avg: -108.75,
                                count: 12,
                                delta: '-224',
                                first: '-104.00',
                                last: '-113.00',
                                lastDate: '2024-12-18 02:59:49',
                                max: 0,
                                min: -113,
                            },
                            '1734490800': {
                                avg: -112.18181818181819,
                                count: 11,
                                delta: '-668',
                                first: '-112.00',
                                last: '-112.00',
                                lastDate: '2024-12-18 03:55:01',
                                max: 0,
                                min: -114,
                            },
                            '1734494400': {
                                avg: -111.58333333333333,
                                count: 12,
                                delta: '-438',
                                first: '-111.00',
                                last: '-109.00',
                                lastDate: '2024-12-18 04:55:15',
                                max: 0,
                                min: -113,
                            },
                            '1734498000': {
                                avg: -111.66666666666667,
                                count: 12,
                                delta: '-992',
                                first: '-113.00',
                                last: '-112.00',
                                lastDate: '2024-12-18 05:55:34',
                                max: 0,
                                min: -113,
                            },
                            '1734501600': {
                                avg: -110.33333333333333,
                                count: 12,
                                delta: '1',
                                first: '-111.00',
                                last: '-111.00',
                                lastDate: '2024-12-18 06:55:48',
                                max: 0,
                                min: -112,
                            },
                            '1734505200': {
                                avg: -110.3,
                                count: 10,
                                delta: '-329',
                                first: '-110.00',
                                last: '-110.00',
                                lastDate: '2024-12-18 07:56:06',
                                max: 0,
                                min: -112,
                            },
                            '1734508800': {
                                avg: -109.5,
                                count: 10,
                                delta: '-873',
                                first: '-111.00',
                                last: '-110.00',
                                lastDate: '2024-12-18 08:51:19',
                                max: 0,
                                min: -111,
                            },
                            '1734512400': {
                                avg: 0,
                                count: 0,
                                delta: '0',
                                first: '',
                                last: '',
                                lastDate: '',
                                max: 0,
                                min: 0,
                            },
                        }}
                        period="Last 24h"
                        config={{
                            title: 'RSSI',
                            units: '°C',
                            type: WidgetTypes.Graphic,
                            color: '#fff',
                            // whitecolor: 'none',
                            // whitealertColor: 'none',
                            // valueFrom: 2,
                            // valueTo: 4,
                            sensor_type: 'none',
                            icon: 'none',
                            value_map: 'none',
                            display_value: 'avg',
                            // isNested: false,
                        }}
                    />
                )}
            </Box>
        );
    },
};
