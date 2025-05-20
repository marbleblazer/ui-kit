import type { Meta, StoryObj } from '@storybook/react';
import { Button, EmptyFallback } from '@chirp/ui/lib';
import { Box } from '@mui/material';

const meta: Meta<typeof EmptyFallback> = {
    title: 'UI/EmptyFallback',
    component: EmptyFallback,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyFallback>;

export const Default: Story = {
    render: () => (
        <Box width="1200px" height="1200px">
            <EmptyFallback
                title="You don’t have favourite widgets"
                subTitle="texttexttexttexttexttexttexttexttexttext"
            />
        </Box>
    ),
};

export const WithoutBackground: Story = {
    render: () => (
        <Box width="1200px" height="1200px">
            <EmptyFallback
                title="You don’t have favourite widgets"
                subTitle="texttexttexttexttexttexttexttexttexttext"
                withBackground={false}
            />
        </Box>
    ),
};

export const WithAction: Story = {
    render: () => (
        <Box width="1200px" height="1200px">
            <EmptyFallback
                title="You don’t have favourite widgets"
                subTitle="texttexttexttexttexttexttexttexttexttext"
                action={<Button variant="primary">Add something</Button>}
                containerSx={{ gap: '12px' }}
            />
        </Box>
    ),
};
