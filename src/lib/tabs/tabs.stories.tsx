import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, Tabs } from '@chirp/ui/lib';
import { useState } from 'react';
import { PlusIcon } from '@chirp/ui/assets/icons';
import { Stack } from '@mui/material';

const meta: Meta<typeof Tabs> = {
    title: 'UI/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => {
        const [activeTabState, setActiveTabState] = useState('One');

        return (
            <Tabs
                items={['One', 'Two', 'Three']}
                activeTab={activeTabState}
                setActiveTab={setActiveTabState}
                extraContent={
                    <Stack justifyContent="center">
                        <IconButton variant="primary">
                            <PlusIcon />
                        </IconButton>
                    </Stack>
                }
            />
        );
    },
};
