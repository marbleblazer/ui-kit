import { FormControl, SelectProps, useTheme } from '@mui/material';
import { FC } from 'react';

import * as S from './style';

export type BadgeSelectPropsType = SelectProps;

export const BadgeSelect: FC<BadgeSelectPropsType> = ({ disabled, value, endAdornment, MenuProps, ...props }) => {
    const theme = useTheme();
    const mergedMenuProps = {
        ...MenuProps,
        MenuListProps: {
            ...MenuProps?.MenuListProps,
            sx: {
                padding: 0,
                '.MuiMenuItem-root': {
                    ...theme.typography.caption12,
                    padding: '6px 12px',
                    color: 'text.text1',
                    height: '28px',
                },
                ...MenuProps?.MenuListProps?.sx,
            },
        },
    };

    return (
        <FormControl fullWidth>
            <S.BadgeSelect
                {...props}
                value={value}
                disabled={disabled}
                MenuProps={mergedMenuProps}
                endAdornment={endAdornment}
            />
        </FormControl>
    );
};
