import { Typography } from '../typogrpahy/index.tsx';
import * as S from './style.ts';

type Props = {
    message: React.ReactNode;
};

export const Toast: React.FC<Props> = ({ message }) => {
    return (
        <S.Root direction="row" gap={2}>
            <Typography
                variant="button"
                sx={{
                    color: 'text.tertiary',
                }}
            >
                {message}
            </Typography>
        </S.Root>
    );
};
