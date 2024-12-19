import type { Meta, StoryObj } from '@storybook/react';
import { SystemWidget } from '@chirp/ui/lib';
import { Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof SystemWidget> = {
    title: 'UI/SystemWidget',
    component: SystemWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SystemWidget>;

export const Default: Story = {
    render: () => {
        const [selectedNodeState, setSelectedNodeState] = useState<boolean>(false);
        return (
            <Box sx={{ width: '400px' }}>
                <SystemWidget
                    attributeName="allgateways"
                    title="All gateways"
                    value={selectedNodeState}
                    units={null}
                    date={0}
                    switchView={() => setSelectedNodeState(!selectedNodeState)}
                />
            </Box>
        );
    },
};
