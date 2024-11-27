import type { Meta, StoryObj } from '@storybook/react';
import { PhoneField, TextField } from '@chirp/ui/lib';
import { useState } from 'react';

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
        const [value, setValue] = useState<string>('71565654565');

        return (
            <PhoneField
                countries={['us', 'de', 'pt', 'es', 'ru']}
                defaultCountry="us"
                value={value}
                onChange={setValue}
                label="Phone number"
                placeholder="Phone number"
                sx={{ width: '257px' }}
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
                    countries={['us', 'de', 'pt', 'es', 'ru']}
                    defaultCountry="us"
                    label="Phone number"
                    value={value}
                    onChange={setValue}
                    placeholder="Phone number"
                />
            </>
        );
    },
};
