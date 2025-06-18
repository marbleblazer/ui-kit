import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '.';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof Pagination> = {
    title: 'UI/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => setPage(newPage);

        return (
            <Stack width="500px" height="100px" bgcolor="white" alignItems="center" justifyContent="center">
                <Pagination count={50} page={page} onChange={handlePageChange} />
            </Stack>
        );
    },
};
