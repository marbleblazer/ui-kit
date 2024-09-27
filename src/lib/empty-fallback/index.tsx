import { Stack, useTheme } from '@mui/material';
import { FC } from 'react';
import { Typography } from '../typogrpahy';
import emptyFallbackCoverIcon from '@chirp/ui/assets/fleet-icons/empty-fallback-cover.svg';

interface IEmptyFallbackProps {
    title?: string;
    subTitle?: string;
    withBackground?: boolean;
}

export const EmptyFallback: FC<IEmptyFallbackProps> = ({ title, subTitle, withBackground = true }) => {
    const theme = useTheme();

    return (
        <Stack
            spacing={1}
            alignItems="center"
            height="100%"
            width="100%"
            justifyContent="center"
            sx={{
                backgroundImage: withBackground ? `url("${emptyFallbackCoverIcon}")` : 'none',
                backgroundRepeat: 'repeat',
            }}
        >
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
