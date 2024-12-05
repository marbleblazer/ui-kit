import { FormControl, InputAdornment, SelectProps, useTheme } from '@mui/material';
import { FC } from 'react';

import { InputLabel } from '../input-label';
import * as S from './style';
import { CloseIcon } from '@chirp/ui/assets/icons';
import { IconButton } from '../icon-button';

type SelectPropsType = SelectProps & {
    onClear?: () => void;
};

export const Select: FC<SelectPropsType> = ({ label, labelId, disabled, value, onClear, endAdornment, ...props }) => {
    const theme = useTheme();
    return (
        <FormControl fullWidth>
            <InputLabel
                labelId={labelId}
                label={label}
                className={props.error ? 'Mui-error' : undefined}
                sx={{
                    opacity: disabled ? 0.3 : 1,
                    '&.MuiInputLabel-shrink': {
                        lineHeight: '20px',
                        transform: 'none',
                        left: 0,
                        top: '3.5px',
                        ...theme.typography.overline,
                    },
                }}
            />
            <S.Select
                {...props}
                value={value}
                disabled={disabled}
                MenuProps={{
                    MenuListProps: {
                        sx: {
                            padding: 0,
                        },
                    },
                }}
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
