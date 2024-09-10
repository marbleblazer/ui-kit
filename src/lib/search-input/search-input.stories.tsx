import type { Meta, StoryObj } from '@storybook/react';
import { Button, SearchInput } from '@chirp/ui/lib';

const meta: Meta<typeof SearchInput> = {
    title: 'UI/SearchInput',
    component: SearchInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <SearchInput value="" onChange={() => {}} />,
};
