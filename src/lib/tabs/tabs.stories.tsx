import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@chirp/ui/lib';
import { useState } from 'react';

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
        return <Tabs items={['One', 'Two', 'Three']} activeTab={activeTabState} setActiveTab={setActiveTabState} />;
    },
};
