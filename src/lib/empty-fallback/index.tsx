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
            gap="8px"
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
                <Typography variant="text13" sx={{ color: theme.palette.text.text4 }}>
                    {title}
                </Typography>
            )}
            {subTitle && (
                <Typography variant="text12" sx={{ color: theme.palette.text.text8 }}>
                    {subTitle}
                </Typography>
            )}
        </Stack>
    );
};
