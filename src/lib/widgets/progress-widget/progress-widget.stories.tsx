import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { ProgressWidget } from '.';
import { Typography } from '../../typogrpahy';

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
                <ProgressWidget
                    mainContainerSx={{ height: '144px' }}
                    data={[
                        { label: 'Done', value: 59, color: palette.base.colorNewGreen },
                        { label: 'In progress', value: 12, color: palette.base.color6 },
                        { label: 'To do', value: 24, color: palette.text.text9 },
                    ]}
                    renderLeftHeaderContent={<Typography variant="body1">Routes status</Typography>}
                />
            </Box>
        );
    },
};
