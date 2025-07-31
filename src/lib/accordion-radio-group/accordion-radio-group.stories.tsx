import type { Meta, StoryObj } from '@storybook/react';
import { AccordionRadioGroup } from '.';
import { useState } from 'react';
import Box from '@mui/material/Box';

const meta: Meta<typeof AccordionRadioGroup> = {
    title: 'UI/AccordionRadioGroup',
    component: AccordionRadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AccordionRadioGroup>;

export const Default: Story = {
    render: () => {
        const [childreValuesState, setChilrenValuesState] = useState<Record<string, boolean>>({
            OverviewSomeBodyElse: false,
            Settings: false,
            Fines: false,
            Documents: true,
            Alerts: false,
            Maintenance: false,
        });

        return (
            <Box width="400px">
                <AccordionRadioGroup
                    label="View tabs"
                    positiveLabel="Allowed"
                    negativeLabel="No access"
                    childrens={childreValuesState}
                    onChange={setChilrenValuesState}
                />
            </Box>
        );
    },
};
