import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableVirtualized } from '@chirp/ui/lib';
import { Box, Stack } from '@mui/material';
import { EyeIcon } from '@chirp/ui/assets/icons';
import { CallIcon } from '@chirp/ui/assets/fleet-icons';
import { mockedData } from './mocked-data';

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
        <Box height="300px">
            <Table
                enableSorting
                data={[
                    {
                        id: 1,
                        first_name: 'John',
                        last_name: 'Doe',
                        age: 25,
                        occupation: 'Software Engineer',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                    {
                        id: 2,
                        first_name: 'Jane',
                        last_name: 'Doe',
                        age: 30,
                        occupation: 'Doctor',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                    {
                        id: 3,
                        first_name: 'Bob',
                        last_name: 'Smith',
                        age: 35,
                        occupation: 'Lawyer',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                    {
                        id: 4,
                        first_name: 'Alice',
                        last_name: 'Johnson',
                        age: 20,
                        occupation: 'Student',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                    {
                        id: 5,
                        first_name: 'Mike',
                        last_name: 'Brown',
                        age: 40,
                        occupation: 'Teacher',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                    {
                        id: 6,
                        first_name: 'Emily',
                        last_name: 'Davis',
                        age: 28,
                        occupation: 'Nurse',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                    {
                        id: 7,
                        first_name: 'David',
                        last_name: 'Wilson',
                        age: 32,
                        occupation: 'Engineer',
                        someKey: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
                    },
                ]}
                onRowDoubleClick={(data) => alert(data.id)}
                columns={[
                    { header: 'ID', accessorFn: ({ first_name, last_name }) => `${first_name} ${last_name}` },
                    {
                        header: 'Name',
                        accessorKey: 'name',

                        cell: (props) => (
                            <Stack direction={'row'} alignItems="center" gap={1}>
                                <EyeIcon />
                                <Box fontWeight="bold">{props.getValue<string>()}</Box>
                            </Stack>
                        ),
                    },
                    { header: 'Age', accessorKey: 'age' },
                    { header: 'Occupation', accessorKey: 'occupation' },
                    { header: 'someKey', accessorKey: 'someKey' },
                    { header: '', accessorKey: 'Age', enableSorting: false, cell: () => <CallIcon /> },
                ]}
            />
        </Box>
    ),
};

export const Virtualized: Story = {
    render: () => (
        <Box height="300px">
            <TableVirtualized
                hasNextPage={false}
                estimateSize={117}
                data={mockedData}
                onRowDoubleClick={(data) => alert(data.id)}
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
        </Box>
    ),
};
