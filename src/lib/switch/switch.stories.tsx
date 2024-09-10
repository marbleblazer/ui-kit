import type { Meta, StoryObj } from '@storybook/react';
import { Button, Switch } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
    title: 'UI/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => {
        const [checkedState, setCheckedState] = useState(false);

        return (
            <Switch
                activeText="Switch map"
                inactiveText="Switch list"
                checked={checkedState}
                onChange={setCheckedState}
            />
        );
    },
};
