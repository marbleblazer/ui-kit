import type { Meta, StoryObj } from '@storybook/react';
import { PhoneField, TextField } from '@chirp/ui/lib';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { applyInternationalPhoneMask } from './helpers';

const meta: Meta<typeof PhoneField> = {
    title: 'UI/PhoneField',
    component: PhoneField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PhoneField>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string>('79083350556');

        console.log(value);

        return (
            <Stack>
                {applyInternationalPhoneMask(value)}
                <PhoneField
                    countries={['us', 'de', 'pt', 'es', 'ru', 'fr']}
                    defaultCountry="us"
                    value={value}
                    onChange={setValue}
                    label="Phone number"
                    placeholder="Phone number"
                    PaperPropsSx={{ sx: { width: '257px' } }}
                    sx={{
                        width: '257px',
                    }}
                />
            </Stack>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = useState<string>('491512125694');

        return (
            <PhoneField
                isDisabled
                countries={['us', 'de', 'pt', 'es', 'ru', 'fr']}
                defaultCountry="us"
                value={value}
                onChange={setValue}
                label="Phone number"
                placeholder="Phone number"
                PaperPropsSx={{ sx: { width: '257px' } }}
                sx={{
                    width: '257px',
                }}
            />
        );
    },
};

export const Error: Story = {
    render: () => {
        const [value, setValue] = useState<string>('491512125694');

        return (
            <PhoneField
                error
                countries={['us', 'de', 'pt', 'es', 'ru', 'fr']}
                defaultCountry="us"
                value={value}
                onChange={setValue}
                label="Phone number"
                placeholder="Phone number"
                // PaperPropsSx={{ sx: { width: '' } }}
                // sx={{
                // width: 'auto',
                // }}
            />
        );
    },
};

export const Empty: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');

        return (
            <>
                <TextField fullWidth label="Last name" placeholder="Last name" />
                <TextField fullWidth label="First name" placeholder="First name" />
                <PhoneField
                    countries={['us', 'de', 'pt', 'es', 'ru', 'fr']}
                    defaultCountry="us"
                    label="Phone number"
                    value={value}
                    onChange={setValue}
                    placeholder="Phone number"
                    PaperPropsSx={{ sx: { width: '257px' } }}
                    sx={{
                        width: '257px',
                    }}
                />
            </>
        );
    },
};
