import type { Meta, StoryObj } from '@storybook/react';
import { Button, Toast, ToastContainer } from '@chirp/ui/lib';
import { toast } from 'react-toastify';

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
                <Button onClick={() => toast(<Toast message="Toast message" />)}>Show</Button>
                <ToastContainer />
            </>
        );
    },
};
