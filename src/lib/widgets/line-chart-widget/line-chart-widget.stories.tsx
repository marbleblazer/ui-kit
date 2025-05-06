import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem, SelectChangeEvent, Stack, useTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { mockChartData } from './mock';
import { Typography, LineChartWidget, Select } from '@chirp/ui/lib';
import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';

const meta: Meta<typeof LineChartWidget> = {
    title: 'UI/Widgets/LineChartWidget',
    component: LineChartWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LineChartWidget>;

export const Default: Story = {
    render: () => {
        const theme = useTheme();

        const listData = [
            { label: 'Volvo 5864', color: theme.palette.base.color6, id: 0 },
            { label: 'Mercedes 6519', color: theme.palette.base.colorNewRed, id: 1 },
            { label: 'VW 345', color: theme.palette.base.color16, id: 2 },
            { label: 'Honda 1233', color: theme.palette.base.colorNewYellow01, id: 3 },
            { label: 'Volvo 58644', color: theme.palette.base.colorNewYellow02, id: 4 },
        ];

        const [selectedItems, setSelectedItems] = useState<typeof listData>(listData);

        const preparedData = useMemo(() => {
            if (!selectedItems?.length) {
                return mockChartData.map((elem) => elem.totalDistance) as StackedLineChartDataType[];
            }

            const selectedIds = selectedItems.map((item) => item.id);

            const filtered = mockChartData.filter((elem) => selectedIds.includes(elem.id));

            return filtered.map((elem) => elem.totalDistance) as StackedLineChartDataType[];
        }, [selectedItems]);

        const handleSelectItems = (event: SelectChangeEvent<unknown>) => {
            const value = event.target.value as string[];

            const selectedData = listData.filter((item) => value.includes(item.label));

            setSelectedItems(selectedData);
        };

        return (
            <Stack
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    width: '700px',
                    height: '487px',
                    background: 'gray',
                }}
            >
                <LineChartWidget
                    emptyFallbackMsg="No data"
                    isLoading={false}
                    mainContainerSx={{ width: '540px', height: '356px' }}
                    renderLeftHeaderContent={<Typography variant="body1">Top 5 vehicles by Total distance</Typography>}
                    selectedItems={selectedItems}
                    chartData={preparedData}
                    headerSubheaderContainerSx={{ gap: '16px' }}
                    colors={[
                        theme.palette.base.color6,
                        theme.palette.base.colorNewRed,
                        theme.palette.base.color16,
                        theme.palette.base.colorNewYellow01,
                        theme.palette.base.colorNewYellow02,
                    ]}
                    renderRightHeaderContent={
                        <Select
                            multiple
                            value={selectedItems.map((item) => item.label)}
                            onChange={handleSelectItems}
                            placeholder="Select truck"
                            sx={{
                                borderRadius: '6px',
                                border: `1px solid ${theme.palette.background.background12}`,
                                backgroundColor: 'transparent',
                                height: '28px',
                                width: '151px',
                                marginTop: 0,
                                '.MuiSelect-icon': { right: '12px' },
                            }}
                            MenuProps={{
                                autoFocus: false,
                                disableAutoFocusItem: true,
                            }}
                        >
                            {listData.map((item) => (
                                <MenuItem key={item.label} value={item.label}>
                                    <Typography variant="caption12">{item.label}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    }
                />
            </Stack>
        );
    },
};
