import { FormControl, SelectProps } from '@mui/material';
import { FC } from 'react';

import { InputLabel } from '../input-label';
import * as S from './style';

export const Select: FC<SelectProps> = ({ label, labelId, ...props }) => {
    return (
        <FormControl fullWidth>
            <InputLabel
                labelId={labelId}
                label={label}
                className={props.error ? 'Mui-error' : undefined}
                sx={{
                    '&.MuiInputLabel-shrink': {
                        fontSize: '14px',
                        lineHeight: '20px',
                        top: '8px',
                        left: '-12px',
                    },
                }}
            />
            <S.Select
                {...props}
                sx={{
                    '.MuiPaper-root': {
                        margin: 2,
                        padding: '0px 14px',
                    },
                }}
            />
        </FormControl>
    );
};
