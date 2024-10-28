import { Fragment, PropsWithChildren } from 'react';
import * as S from './styles';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { Typography } from '@mui/material';

export interface IListWidgetProps<T> extends IBaseWidgetProps {
    data: T[];
    nameKey: keyof T;
    valueKey: keyof T;
    columnNames: string[];
}

export const ListWidget = <T,>(props: PropsWithChildren<IListWidgetProps<T>>) => {
    const { data, nameKey, valueKey, columnNames, ...baseWidgetProps } = props;

    return (
        <BaseWidget {...baseWidgetProps}>
            <S.ListWrapper>
                {columnNames.map((name) => (
                    <S.HeaderWrapper>
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
                {data.map((row, index) => (
                    <Fragment key={index}>
                        <Typography
                            sx={{
                                color: 'text.primary',
                            }}
                            variant="button"
                        >
                            {String(row[nameKey])}
                        </Typography>
                        <Typography
                            sx={{
                                color: 'text.primary',
                            }}
                            variant="button"
                        >
                            {String(row[valueKey])}
                        </Typography>
                    </Fragment>
                ))}
            </S.ListWrapper>
        </BaseWidget>
    );
};
