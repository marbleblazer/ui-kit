import { FormControl, SelectProps, useTheme } from '@mui/material';
import { FC } from 'react';

import { InputLabel } from '../input-label';
import * as S from './style';

export const Select: FC<SelectProps> = ({ label, labelId, ...props }) => {
    const theme = useTheme();
    return (
        <FormControl fullWidth>
            <InputLabel
                labelId={labelId}
                label={label}
                className={props.error ? 'Mui-error' : undefined}
                sx={{
                    '&.MuiInputLabel-shrink': {
                        lineHeight: '20px',
                        transform: 'none',
                        left: 0,
                        top: '3.5px',
                        ...theme.typography.overline,
                    },
                }}
            />
            <S.Select {...props} />
        </FormControl>
    );
};
