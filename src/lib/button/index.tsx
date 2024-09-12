import * as S from './style';
import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
    <S.ButtonWrapper {...props} disableRipple>
        {children}
    </S.ButtonWrapper>
);
