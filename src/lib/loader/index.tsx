import { StackProps } from '@mui/material';
import * as S from './style';

export const Loader = (props: StackProps) => {
    const dots = Array.from({ length: 8 });

    return (
        <S.LoaderContainer {...props}>
            {dots.map((_, index) => (
                <S.LoaderElement index={index} />
            ))}
        </S.LoaderContainer>
    );
};
