import { SxProps } from '@mui/system/index.js';
import { Typography } from '../typogrpahy/index.tsx';
import * as S from './style.ts';

type Props = {
    message: React.ReactNode;
    sx?: SxProps;
};

export const Toast: React.FC<Props> = ({ message, sx }) => {
    return (
        <S.Root direction="row" gap={2} sx={{ ...sx }}>
            <Typography
                variant="inputText"
                sx={{
                    color: 'text.textInput60',
                }}
            >
                {message}
            </Typography>
        </S.Root>
    );
};
