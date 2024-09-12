import { Stack, useTheme } from '@mui/material';
import { FC } from 'react';
import { Typography } from '../typogrphy';

interface IEmptyFallbackProps {
    title?: string;
    subTitle?: string;
}

export const EmptyFallback: FC<IEmptyFallbackProps> = ({ title, subTitle }) => {
    const theme = useTheme();

    return (
        <Stack spacing={1} alignItems="center">
            {title && (
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {title}
                </Typography>
            )}
            {subTitle && (
                <Typography variant="caption" sx={{ color: theme.palette.text.tertiary }}>
                    {subTitle}
                </Typography>
            )}
        </Stack>
    );
};
