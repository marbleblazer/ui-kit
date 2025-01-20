import { PropsWithChildren, useState, type JSX } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { Stack, Typography } from '@mui/material';
import { BaseWidgetCustomHeader } from '../base-widget/base-widget-custom-header';

export interface IListWidgetProps<T> extends IBaseWidgetProps {
    data: T[];
    nameKey: keyof T;
    valueKey: keyof T;
    renderFilters?: JSX.Element;
    renderSelectedContent: (item: T) => JSX.Element;
}

export const ListWidgetWithFilters = <T,>(props: PropsWithChildren<IListWidgetProps<T>>) => {
    const { data, nameKey, valueKey, renderSelectedContent, title, renderFilters, ...baseWidgetProps } = props;
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    return (
        <BaseWidget
            title={title}
            {...baseWidgetProps}
            customHeader={
                selectedItem !== null ? (
                    <BaseWidgetCustomHeader
                        typeText={title}
                        title={selectedItem?.[nameKey] as string}
                        onBackClick={() => setSelectedItem(null)}
                    />
                ) : undefined
            }
        >
            {selectedItem ? (
                renderSelectedContent(selectedItem)
            ) : (
                <Stack gap={3}>
                    {renderFilters}
                    <Stack
                        gap={3}
                        height={110}
                        overflow="auto"
                        pr={2}
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        {data.map((row, index) => (
                            <Stack
                                justifyContent="space-between"
                                direction="row"
                                height={16}
                                key={index}
                                onClick={() => setSelectedItem(row)}
                            >
                                <Typography
                                    sx={{
                                        color: 'text.text1',
                                    }}
                                    variant="caption12"
                                >
                                    {String(row[nameKey])}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'text.text1',
                                    }}
                                    variant="caption12"
                                    textAlign="end"
                                >
                                    {String(row[valueKey])}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            )}
        </BaseWidget>
    );
};
