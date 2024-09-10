import { Stack, useTheme } from '@mui/material';
import { FC } from 'react';
import { Typography } from '../typogrphy';

interface IEmptyFallbackProps {
    title?: string;
    subTitle?: string;
}

export const EmptyFallback: FC<IEmptyFallbackProps> = ({ title, subTitle }) => {
    const theme = useTheme();

    const resolvedTitleColor =
        theme.palette.mode === 'dark' ? theme.palette.lightShades.ternary : theme.palette.lightShades.secondary;
    const resolvedSubTitleColor =
        theme.palette.mode === 'dark' ? theme.palette.lightShades.quaternary : theme.palette.lightShades.quaternary;
    return (
        <Stack spacing={1} alignItems="center">
            {title && (
                <Typography variant="body1" sx={{ color: resolvedTitleColor }}>
                    {title}
                </Typography>
            )}
            {subTitle && (
                <Typography variant="caption" sx={{ color: resolvedSubTitleColor }}>
                    {subTitle}
                </Typography>
            )}
        </Stack>
    );
};
