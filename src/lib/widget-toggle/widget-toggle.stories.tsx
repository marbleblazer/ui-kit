import type { Meta, StoryObj } from '@storybook/react';
import { WidgetToggle } from '@chirp/ui/lib';
import { useState } from 'react';

const meta: Meta<typeof WidgetToggle> = {
    title: 'UI/WidgetToggle',
    component: WidgetToggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WidgetToggle>;

export const Default: Story = {
    render: () => {
        const [checkedState, setCheckedState] = useState(false);

        return (
            <>
                <WidgetToggle
                    isLoading={false}
                    name="toggle"
                    label="Toggle"
                    checked={checkedState}
                    onChange={() => setCheckedState(!checkedState)}
                />
            </>
        );
    },
};
