import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { GeneralInfoCard } from '@chirp/ui/lib';
import { DeviceIcon, PlusIcon, WarningIcon } from '@chirp/ui/assets/new-icons';
import { QuestionIcon } from '@chirp/ui/assets/new-icons/QuestionIcon';

const meta: Meta<typeof GeneralInfoCard> = {
    title: 'UI/GeneralInfoCard',
    component: GeneralInfoCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GeneralInfoCard>;

export const DeviceWidget: Story = {
    render: () => (
        <GeneralInfoCard
            key="Devices"
            header={
                <Stack alignItems="center" direction="row" color="lightShades.ternary" gap="8px">
                    <DeviceIcon />
                    <Typography color="lightShades.ternary" variant="body1">
                        Devices
                    </Typography>
                </Stack>
            }
            headerAction={() => alert('headerAction')}
            headerActionContent={<PlusIcon />}
            footer={
                <Stack alignItems="center" direction="row" color="alerts.warning" gap="8px">
                    <Stack alignItems="center" direction="row" color="alerts.warning" gap="8px">
                        <WarningIcon />
                        <Typography variant="h3">12</Typography>
                    </Stack>
                    <Typography color="lightShades.ternary" variant="overline">
                        1 device needs attention
                    </Typography>
                </Stack>
            }
        />
    ),
};

export const ClaimWidget: Story = {
    render: () => (
        <>
            <GeneralInfoCard
                key="Data Credits"
                header={
                    <Stack alignItems="center" direction="row" color="lightShades.ternary" gap="8px">
                        <Typography color="lightShades.ternary" variant="body1">
                            Available rewards
                        </Typography>
                        <QuestionIcon />
                    </Stack>
                }
                headerAction={() => alert('headerAction')}
                headerActionContent="Claim"
                footer={
                    <Stack alignItems="center" direction="row" color="text.primary" gap="8px">
                        <Typography variant="h3">500</Typography>
                    </Stack>
                }
                sx={{ width: '305px' }}
            />
        </>
    ),
};
