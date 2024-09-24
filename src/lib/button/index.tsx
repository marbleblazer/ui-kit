import { forwardRef } from 'react';
import * as S from './style';
import { IButtonProps } from './types';

export const Button = forwardRef(({ children, ...props }: IButtonProps) => (
    <S.ButtonWrapper {...props} disableRipple>
        {children}
    </S.ButtonWrapper>
));
