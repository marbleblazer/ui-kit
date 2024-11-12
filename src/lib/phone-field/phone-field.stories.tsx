import type { Meta, StoryObj } from '@storybook/react';
import { PhoneField } from '@chirp/ui/lib';
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
        const [value, setValue] = useState<string>('');
        return (
            <PhoneField
                defaultCountry="us"
                value={value}
                onChange={setValue}
                placeholder="Номер телефона"
                onlyCountries={['us', 'de', 'pt', 'es', 'ru']}
            />
        );
    },
};
