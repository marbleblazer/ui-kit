import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { ListWithIconsWidget } from '.';
import { Typography } from '../../typogrpahy';
import { NotificationIcon } from '@chirp/ui/assets/fleet-icons';

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

        const items = [
            {
                id: 1,
                image: <NotificationIcon width="20px" height="20px" color={theme.palette.text.text1} />,
                renderDescription: (
                    <>
                        <Typography variant="body1">Notification 1</Typography>
                        <Typography variant="caption12">This is the first notification.</Typography>
                    </>
                ),
                time: '10:00',
                isUnread: true,
            },
            {
                id: 2,
                image: <NotificationIcon width="20px" height="20px" color={theme.palette.text.text1} />,
                renderDescription: (
                    <>
                        <Typography variant="body1" color={theme.palette.alerts.alert}>
                            Notification 2
                        </Typography>
                        <Typography variant="caption12" color={theme.palette.alerts.alert}>
                            This is the second notification.
                        </Typography>
                    </>
                ),
                time: '11:00',
                isAlert: true,
            },
        ];

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
                    mainContainerSx={{ height: '300px' }}
                    rowsData={items}
                    leftHeaderContentSx={{ gap: '4px' }}
                    renderLeftHeaderContent={
                        <>
                            <NotificationIcon width="16px" height="16px" color={theme.palette.text.text1} />
                            <Typography variant="body1">Notifications and events</Typography>
                        </>
                    }
                    emptyFallbackMsg="No notifications available"
                />
            </Box>
        );
    },
};
