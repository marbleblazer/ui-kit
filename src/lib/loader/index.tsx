import * as S from './style';

interface ILoader {
    text?: string;
}

export const Loader: React.FC<ILoader> = ({ text }) => {
    return (
        <S.LoaderContainer text={text}>
            <S.LoaderSpan>
                {[...Array(8)].map((_, index) => (
                    <S.LoaderElement key={index} index={index} />
                ))}
            </S.LoaderSpan>
            {text && <S.LoaderText>{text}</S.LoaderText>}
        </S.LoaderContainer>
    );
};
