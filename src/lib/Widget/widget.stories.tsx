import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '@chirp/ui/lib';
import { WidgetTypes } from './types';

const meta: Meta<typeof Widget> = {
    title: 'UI/Widget',
    component: Widget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Widget>;

export const Default: Story = {
    render: () => (
        <>
            <Widget
                deviceId="123"
                attributeName="attributeName"
                currentValue={39}
                timequant="day"
                lastSeen={179}
                config={{
                    title: 'title',
                    units: '%',
                    type: WidgetTypes.Graphic,
                    color: '#fff',
                    sensor_type: 'humidity',
                    icon: 'none',
                    display_value: 'avg',
                    value_map: '0:0|100:100',
                    valueFrom: 0,
                    valueTo: 100,
                }}
                isLoading={false}
                isError={false}
                graphValues={{
                    '0': {
                        avg: 10,
                        count: 100,
                        max: 50,
                        min: 0,
                        first: '2022-01-01',
                        last: '2022-01-31',
                        delta: '10',
                        lastDate: '2022-01-31T14:30:00.000Z',
                    },
                    '2': {
                        avg: 20,
                        count: 200,
                        max: 100,
                        min: 10,
                        first: '2022-02-01',
                        last: '2022-02-28',
                        delta: '20',
                        lastDate: '2022-02-28T14:30:00.000Z',
                    },
                }}
                period="24h"
                switchView={() => alert('switchView')}
            />
        </>
    ),
};
