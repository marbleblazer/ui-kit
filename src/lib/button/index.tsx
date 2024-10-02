import { FC } from 'react';
import * as S from './style';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ children, ...props }) => (
    <S.ButtonWrapper {...props} disableRipple>
        {children}
    </S.ButtonWrapper>
);
