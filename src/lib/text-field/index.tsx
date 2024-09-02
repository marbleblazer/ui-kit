import { FormControl, StandardTextFieldProps } from '@mui/material';
import { FC } from 'react';

import * as S from './style';

export const TextField: FC<StandardTextFieldProps> = (props) => {
  return (
    <FormControl fullWidth>
      <S.TextField {...props} InputLabelProps={{ shrink: true }} />
    </FormControl>
  );
};
