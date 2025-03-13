import { Box, useTheme } from '@mui/material';
import * as S from './style';
import { IIconButtonProps } from './types';
import { Loader } from '../loader';

export const IconButton: React.FC<IIconButtonProps> = ({ children, isLoading, variant, disabled, ...props }) => {
    const theme = useTheme();

    return (
        <Box position="relative">
            {isLoading && (
                <S.LoaderWrapper>
                    <Loader size="small" color={theme.palette.base.color1} />
                </S.LoaderWrapper>
            )}
            <S.ButtonWrapper
                {...props}
                variant={variant}
                isLoading={isLoading}
                disabled={isLoading || disabled}
                disableRipple
            >
                {isLoading && <S.Backdrop variant={variant} />}
                {children}
            </S.ButtonWrapper>
        </Box>
    );
};
