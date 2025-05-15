import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, useTheme } from '@mui/material';
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
                    isLoading={false}
                    mainContainerSx={{ height: '300px', padding: '20px 8px' }}
                    headerSx={{ height: '28px', padding: '0px 12px' }}
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

export const WithDividers: Story = {
    render: () => {
        const theme = useTheme();

        const data = [
            {
                id: 1,
                image: 'https://chirpwireless.io/images/footer/tim-lg.png',
                driver: 'Gregory Jones',
                car: 'Volvo 5678',
                speed: 'Speed violation: 101 km/h',
                limit: '(limit 90 km/h)',
                time: '10:00',
            },
            {
                id: 2,
                image: '',
                driver: 'Ken Hudson',
                car: 'Chevrolet Express 2500',
                speed: 'Speed violation: 120 km/h',
                limit: '(limit 110 km/h)',
                time: '12:00',
            },
            {
                id: 3,
                image: 'https://chirpwireless.io/images/footer/tim-lg.png',
                driver: 'Alice Smith',
                car: 'Toyota Camry',
                speed: 'Speed violation: 110 km/h',
                limit: '(limit 100 km/h)',
                time: '14:00',
            },
        ];

        const items = data.map((item) => ({
            id: item.id,
            image: item.image,
            renderDescription: (
                <>
                    <Stack direction="row" alignItems="center" gap="4px">
                        <Typography variant="body1" color={theme.palette.text.text1}>
                            {item.driver}
                        </Typography>
                        <Typography variant="caption12" color={theme.palette.text.text8}>
                            {item.car}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap="4px">
                        <Typography variant="caption12" color={theme.palette.text.textInput80}>
                            {item.speed}
                        </Typography>
                        <Typography variant="caption12" color={theme.palette.text.text8}>
                            {item.limit}
                        </Typography>
                    </Stack>
                </>
            ),
            time: item.time,
            isUnread: true,
        }));

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
                    isLoading={false}
                    mainContainerSx={{ height: '300px', padding: '20px 8px' }}
                    headerSx={{ height: '28px', padding: '0px 12px' }}
                    rowsData={items}
                    leftHeaderContentSx={{ gap: '4px' }}
                    renderLeftHeaderContent={<Typography variant="body1">Speed violations</Typography>}
                    emptyFallbackMsg="No speed violations"
                    dividerSx={{ margin: '0px 8px 0px 12px' }}
                    isDivider={true}
                />
            </Box>
        );
    },
};
