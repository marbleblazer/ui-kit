import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { ListWithIconsWidget } from '.';
import { Typography } from '../../typogrpahy';
import { FleetSuccessIcon, NotificationIcon } from '@chirp/ui/assets/fleet-icons';

const meta: Meta<typeof ListWithIconsWidget> = {
    title: 'UI/Widgets/ListWithIconsWidget',
    component: ListWithIconsWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListWithIconsWidget>;

export const Default: Story = {
    render: () => {
        const theme = useTheme();

        return (
            <Box
                p={5}
                sx={{
                    width: '700px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <ListWithIconsWidget
                    image={<FleetSuccessIcon />}
                    leftHeaderContentSx={{ gap: '4px' }}
                    renderLeftHeaderContent={
                        <>
                            <NotificationIcon width="20px" height="20px" color={theme.palette.text.text1} />
                            <Typography variant="body1">Notifications and events</Typography>
                        </>
                    }
                    renderMainContent={
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    }
                    time="12:49"
                    renderDescription={
                        <>
                            <Typography variant="body1">Something</Typography>
                            <Typography variant="body1">Something too</Typography>
                        </>
                    }
                />
            </Box>
        );
    },
};
