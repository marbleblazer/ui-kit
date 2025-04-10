import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { ProgressWidget } from '.';

const meta: Meta<typeof ProgressWidget> = {
    title: 'UI/Widgets/ProgressWidget',
    component: ProgressWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressWidget>;

export const Default: Story = {
    render: () => {
        const { palette } = useTheme();

        return (
            <Box
                p={5}
                sx={{
                    width: '700px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <ProgressWidget />
            </Box>
        );
    },
};
