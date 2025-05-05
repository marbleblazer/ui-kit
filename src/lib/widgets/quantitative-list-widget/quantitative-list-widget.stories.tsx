import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { QuantitativeListWidget } from '.';
import { Typography } from '../../typogrpahy';
import { QuestionIcon } from '@chirp/ui/assets/icons';

const meta: Meta<typeof QuantitativeListWidget> = {
    title: 'UI/Widgets/QuantitativeListWidget',
    component: QuantitativeListWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof QuantitativeListWidget>;

const data = [
    { label: 'Active', value: 144, status: 'Active', color: '#55E050' },
    { label: 'Available', value: 18, status: 'Available', color: '#85EDFF' },
    { label: 'In transit', value: 6, status: 'In transit', color: '#CCA6FF' },
    { label: 'Require maintenance', value: 3, status: 'Require maintenance', color: '#FFD262' },
    { label: 'Under maintenance', value: 1, status: 'Under maintenance', color: '#678AFB' },
];

export const Default: Story = {
    render: () => {
        const { palette } = useTheme();

        return (
            <Box
                p={5}
                sx={{
                    width: '700px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <QuantitativeListWidget
                    data={data}
                    isLoading={false}
                    leftHeaderContentSx={{ gap: '4px' }}
                    renderLeftHeaderContent={
                        <>
                            <Typography variant="body1">Units</Typography>
                            <Typography variant="body1" color={palette.text.text8}>
                                166
                            </Typography>
                        </>
                    }
                    renderRightHeaderContent={<QuestionIcon />}
                />
            </Box>
        );
    },
};
