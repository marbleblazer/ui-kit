import { FormControl, InputAdornment, SelectProps, useTheme } from '@mui/material';
import { FC } from 'react';

import { InputLabel } from '../input-label';
import * as S from './style';
import { CloseIcon } from '@chirp/ui/assets/icons';
import { IconButton } from '../icon-button';

export type SelectPropsType = SelectProps & {
    onClear?: () => void;
};

export const Select: FC<SelectPropsType> = ({
    label,
    labelId,
    disabled,
    value,
    onClear,
    endAdornment,
    MenuProps,
    ...props
}) => {
    const theme = useTheme();

    const mergedMenuProps = {
        ...MenuProps,
        MenuListProps: {
            ...MenuProps?.MenuListProps,
            sx: {
                padding: 0,
                ...MenuProps?.MenuListProps?.sx,
            },
        },
    };

    return (
        <FormControl fullWidth>
            <InputLabel
                labelId={labelId}
                label={label}
                className={props.error ? 'Mui-error' : undefined}
                sx={{
                    opacity: disabled ? 0.3 : 1,
                    '&.MuiInputLabel-shrink': {
                        transform: 'none',
                        left: 0,
                        color: theme.palette.text.titleInput,
                        ...theme.typography.caption12,
                    },
                }}
            />
            <S.Select
                {...props}
                value={value}
                disabled={disabled}
                MenuProps={mergedMenuProps}
                endAdornment={
                    endAdornment ? (
                        endAdornment
                    ) : onClear && value ? (
                        <InputAdornment sx={{ marginRight: '16px' }} position="end">
                            <IconButton variant="gray" onClick={onClear}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
            />
        </FormControl>
    );
};
