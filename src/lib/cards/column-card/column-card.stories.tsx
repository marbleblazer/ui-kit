import type { Meta, StoryObj } from '@storybook/react';
import { ColumnCard } from '.';

const meta: Meta<typeof ColumnCard> = {
    title: 'UI/Cards/ColumnCard',
    component: ColumnCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColumnCard>;

export const Default: Story = {
    render: () => {
        return (
            <ColumnCard
                title="Notifications"
                columns={[
                    {
                        title: 'Name',
                        data: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5'],
                    },
                    {
                        title: 'Description',
                        data: ['Data 1', 'Data 2', 'Data 333333'],
                    },
                ]}
                tooltipColumnIndex={1}
            />
        );
    },
};
