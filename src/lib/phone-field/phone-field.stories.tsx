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
        const [value, setValue] = useState<string>('7(922) 555-5555');
        const [_, setIsValid] = useState<boolean>();

        return (
            <PhoneField
                defaultCountry="us"
                value={value}
                onChange={setValue}
                onValidate={setIsValid}
                placeholder="Номер телефона"
                onlyCountries={['us', 'de', 'pt', 'es', 'ru']}
            />
        );
    },
};

export const Empty: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');
        const [_, setIsValid] = useState<boolean>();

        return (
            <>
                <TextField fullWidth label="Last name" placeholder="Last name" />
                <TextField fullWidth label="First name" placeholder="First name" />
                <PhoneField
                    defaultCountry="us"
                    value={value}
                    label="Phone number"
                    onChange={setValue}
                    onValidate={setIsValid}
                    placeholder="Номер телефона"
                    onlyCountries={['us', 'de', 'pt', 'es', 'ru']}
                />
            </>
        );
    },
};
