import type { Meta, StoryObj } from '@storybook/react';
import { BaseCard } from '.';
import { Typography } from '../../typogrpahy';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const meta: Meta<typeof BaseCard> = {
    title: 'UI/Cards/BaseCard',
    component: BaseCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseCard>;

export const Default: Story = {
    render: () => {
        return (
            <BaseCard
                containerSx={{ width: '363px', height: '144px' }}
                headerChildren={<Typography variant="title16">Header</Typography>}
                contentChildren={
                    <Grid container spacing="8px">
                        <Grid item xs={6}>
                            <Stack>
                                <Typography>Column 1</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <Typography>Column 2</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                }
            />
        );
    },
};
