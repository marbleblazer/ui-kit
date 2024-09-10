import type { Meta, StoryObj } from '@storybook/react';
import { Button, Dropdown } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
    title: 'UI/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const MOCK_DATA = [
    {
        id: 1,
        title: 'Send by Email',
    },
    {
        id: 2,
        title: 'Planned',
    },
    {
        id: 3,
        title: 'Export',
    },
];

export const Default: Story = {
    render: () => {
        const [openState, setOpenState] = useState(false);
        return (
            <Dropdown<{ title: string; id: number }>
                items={MOCK_DATA}
                resolveTitle={(item) => item.title}
                onClose={() => setOpenState(false)}
                onOpen={() => setOpenState(true)}
                isOpened={openState}
            >
                <Button variant="tertiary" onClick={() => setOpenState(!openState)}>
                    Show
                </Button>
            </Dropdown>
        );
    },
};
