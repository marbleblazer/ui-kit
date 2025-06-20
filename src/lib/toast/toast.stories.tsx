import type { Meta, StoryObj } from '@storybook/react';
import { Button, IconButton, Toast, ToastContainer } from '@chirp/ui/lib';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import { CrossIcon } from '@chirp/ui/assets/fleet-icons';

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
                    <Button
                        onClick={() =>
                            toast(<Toast message="Toast message" />, {
                                closeButton: ({ closeToast }) => (
                                    <IconButton
                                        variant="gray"
                                        onClick={closeToast}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <CrossIcon />
                                    </IconButton>
                                ),
                            })
                        }
                    >
                        Show
                    </Button>

                    <ToastContainer />
                </Box>
            </>
        );
    },
};
