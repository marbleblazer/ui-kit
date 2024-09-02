import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, TextField } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof Autocomplete> = {
    title: 'UI/Autocomplete',
    component: Autocomplete,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [inputValue, setInputValue] = useState('');

        return (
            <Autocomplete
                fullWidth
                freeSolo
                open={isOpen}
                disabled={false}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                options={['lorem', 'ipsum', 'not', 'know']}
                onChange={(_, newValue) => setInputValue(newValue as string)}
                inputValue={inputValue}
                onInputChange={(_, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderOption={(props, option) => (
                    <li {...props} key={option as string}>
                        {String(option)}
                    </li>
                )}
                renderInput={(params) => <TextField {...params} />}
            />
        );
    },
};
