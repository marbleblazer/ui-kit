import * as S from './style';

export const Loader = () => {
    return (
        <S.LoaderContainer>
            <S.LoaderSpan>
                {[...Array(8)].map((_, index) => (
                    <S.LoaderElement key={index} index={index} />
                ))}
            </S.LoaderSpan>
        </S.LoaderContainer>
    );
};
