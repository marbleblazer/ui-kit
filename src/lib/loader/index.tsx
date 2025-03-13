import * as S from './style';
import { TLoaderSize } from './types';

export interface ILoaderProps {
    text?: string;
    size?: TLoaderSize;
    color?: string;
}

export const Loader: React.FC<ILoaderProps> = ({ text, color, size = 'small' }) => {
    return (
        <S.LoaderContainer text={text}>
            <S.LoaderSpan size={size}>
                {[...(Array(8) as unknown[])].map((_, index) => (
                    <S.LoaderElement key={index} index={index} size={size} color={color} />
                ))}
            </S.LoaderSpan>
            {text && <S.LoaderText>{text}</S.LoaderText>}
        </S.LoaderContainer>
    );
};
