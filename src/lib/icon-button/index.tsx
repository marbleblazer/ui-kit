import * as S from './style';
import { IIconButtonProps } from './types';

export const IconButton: React.FC<IIconButtonProps> = ({ children, ...props }) => (
    <S.ButtonWrapper {...props} disableRipple>
        {children}
    </S.ButtonWrapper>
);
