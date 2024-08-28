import * as S from './style';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <S.Button {...props} disableRipple>
        {children}
    </S.Button>
);
