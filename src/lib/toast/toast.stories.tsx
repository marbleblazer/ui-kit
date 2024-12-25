import type { Meta, StoryObj } from '@storybook/react';
import { Button, Toast, ToastContainer } from '@chirp/ui/lib';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';

const meta: Meta<typeof Toast> = {
    title: 'UI/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    render: () => {
        return (
            <>
                <Box width="400px" height="400px">
                    <Button onClick={() => toast(<Toast message="Toast message" />)}>Show</Button>
                    <ToastContainer />
                </Box>
            </>
        );
    },
};
