import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@chirp/ui/lib';
import { EyeIcon } from '@chirp/ui/assets/icons';

const meta: Meta<typeof Tooltip> = {
    title: 'UI/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: () => (
        <Tooltip
            title={`Attribute is additional property of an element which can optionally be set by a user. The user can either select a system attribute from a dropdown list or create his own attribute available only within this user's account. To create a user's attribute the user shall print the name of new attribute in the field "Attribute name" and select data type in the field "Attribute type".`}
        >
            <EyeIcon />
        </Tooltip>
    ),
};
