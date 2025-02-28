import type { Meta, StoryObj } from '@storybook/react';
import { Button, Dropdown } from '@chirp/ui/lib';
import { useState } from 'react';
import { PopoverPaper } from '@mui/material/Popover';

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

export const Default: Story = {
    render: () => {
        const [openState, setOpenState] = useState(false);

        return (
            <Dropdown
                isOpened={openState}
                anchorEl={
                    <Button variant="tertiary" onClick={() => setOpenState(!openState)}>
                        button
                    </Button>
                }
            >
                <PopoverPaper>123</PopoverPaper>
            </Dropdown>
        );
    },
};
