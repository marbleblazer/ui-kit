import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { BaseWidget } from '.';
import { Typography } from '../../typogrpahy';
import { QuestionIcon } from '@chirp/ui/assets/icons';

const meta: Meta<typeof BaseWidget> = {
    title: 'UI/Widgets/BaseWidget',
    component: BaseWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseWidget>;

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
                <BaseWidget
                    isLoading={false}
                    leftHeaderContentSx={{ gap: '4px' }}
                    renderLeftHeaderContent={
                        <>
                            <Typography variant="body1">Units</Typography>
                            <Typography variant="body1" color={palette.text.text8}>
                                166
                            </Typography>
                        </>
                    }
                    renderRightHeaderContent={<QuestionIcon />}
                    renderMainContent={
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    }
                />
            </Box>
        );
    },
};
