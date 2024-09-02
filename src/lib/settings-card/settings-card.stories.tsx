import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { SettingsCard, SettingsContainer } from '@chirp/ui/lib';

const meta: Meta<typeof SettingsCard> = {
    title: 'UI/SettingsCard',
    component: SettingsCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SettingsCard>;

export const SettingsContainerExample: Story = {
    render: () => (
        <SettingsContainer>
            <Typography color="primary.contrastText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis ipsum ad veritatis maxime,
                soluta minima porro expedita
            </Typography>
        </SettingsContainer>
    ),
};

export const SettingsCardExample: Story = {
    render: () => (
        <SettingsCard className="story-component">
            <Typography color="primary.contrastText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis ipsum ad veritatis maxime,
                soluta minima porro expedita
            </Typography>
        </SettingsCard>
    ),
};
