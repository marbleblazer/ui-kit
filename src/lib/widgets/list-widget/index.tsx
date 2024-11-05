import { PropsWithChildren, useState } from 'react';
import * as S from './styles';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { Stack, Typography } from '@mui/material';
import { BaseWidgetCustomHeader } from '../base-widget/base-widget-custom-header';

export interface IListWidgetProps<T> extends IBaseWidgetProps {
    data: T[];
    nameKey: keyof T;
    valueKey: keyof T;
    columnNames: string[];
    renderSelectedContent?: (item: T) => JSX.Element;
}

export const ListWidget = <T,>(props: PropsWithChildren<IListWidgetProps<T>>) => {
    const { data, nameKey, valueKey, columnNames, renderSelectedContent, title, ...baseWidgetProps } = props;
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    return (
        <BaseWidget
            {...baseWidgetProps}
            title={title}
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
            {selectedItem && renderSelectedContent ? (
                renderSelectedContent(selectedItem)
            ) : (
                <>
                    <Stack justifyContent="space-between" direction="row" height={16}>
                        {columnNames.map((name, idx) => (
                            <S.HeaderWrapper key={`${name}-${idx}`}>
                                <Typography
                                    sx={{
                                        color: 'text.tertiary',
                                    }}
                                    variant="caption"
                                >
                                    {name}
                                </Typography>
                            </S.HeaderWrapper>
                        ))}
                    </Stack>
                    <Stack
                        gap={3}
                        height={110}
                        overflow="auto"
                        pr={2}
                        sx={{
                            cursor: renderSelectedContent ? 'pointer' : 'default',
                        }}
                    >
                        {data.map((row, index) => (
                            <Stack
                                justifyContent="space-between"
                                direction="row"
                                height={16}
                                key={index}
                                onClick={() => renderSelectedContent && setSelectedItem(row)}
                            >
                                <Typography
                                    sx={{
                                        color: 'text.primary',
                                    }}
                                    variant="body1"
                                >
                                    {String(row[nameKey])}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'text.primary',
                                    }}
                                    variant="body1"
                                    textAlign="end"
                                >
                                    {String(row[valueKey])}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </>
            )}
        </BaseWidget>
    );
};
