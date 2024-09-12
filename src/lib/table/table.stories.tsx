import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@chirp/ui/lib';
import { Box, Stack } from '@mui/material';
import { EyeIcon } from '@chirp/ui/assets/icons';

const meta: Meta<typeof Table> = {
    title: 'UI/Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: () => (
        <Table
            enableSorting
            data={[
                {
                    id: 1,
                    name: 'John Doe',
                    age: 25,
                    occupation: 'Software Engineer',
                    someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    age: 30,
                    occupation: 'Doctor',
                    someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                },
                {
                    id: 3,
                    name: 'Bob Smith',
                    age: 35,
                    occupation: 'Lawyer',
                    someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                },
                {
                    id: 4,
                    name: 'Alice Johnson',
                    age: 20,
                    occupation: 'Student',
                    someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                },
                {
                    id: 5,
                    name: 'Mike Brown',
                    age: 40,
                    occupation: 'Teacher',
                    someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                },
                {
                    id: 6,
                    name: 'Emily Davis',
                    age: 28,
                    occupation: 'Nurse',
                    someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                },
            ]}
            columns={[
                { header: 'ID', accessorKey: 'id' },
                {
                    header: 'Name',
                    accessorKey: 'name',

                    cell: (props) => (
                        <Stack direction={'row'} alignItems="center" gap={1}>
                            <EyeIcon />
                            <Box fontWeight="bold">{props.renderValue?.() as string}</Box>
                        </Stack>
                    ),
                },
                { header: 'Age', accessorKey: 'age' },
                { header: 'Occupation', accessorKey: 'occupation' },
                { header: 'someKey', accessorKey: 'someKey' },
            ]}
        />
    ),
};
