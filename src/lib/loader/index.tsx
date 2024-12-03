import * as S from './style';
import { TLoaderSize } from './types';

interface ILoader {
    text?: string;
    size?: TLoaderSize;
}

export const Loader: React.FC<ILoader> = ({ text, size = 'small' }) => {
    return (
        <S.LoaderContainer text={text}>
            <S.LoaderSpan size={size}>
                {[...Array(8)].map((_, index) => (
                    <S.LoaderElement key={index} index={index} size={size} />
                ))}
            </S.LoaderSpan>
            {text && <S.LoaderText>{text}</S.LoaderText>}
        </S.LoaderContainer>
    );
};
