import { FC } from 'react';
import * as S from './style';
import { IButtonProps } from './types';
import { Loader } from '../loader';
import { Box, useTheme } from '@mui/material';

export const Button: FC<IButtonProps> = ({ children, isLoading, variant, disabled, ...props }) => {
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
