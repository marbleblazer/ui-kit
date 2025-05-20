import { Stack, SxProps } from '@mui/material';
import React, { FC } from 'react';
import { Typography } from '../typogrpahy';
import emptyFallbackCoverIcon from '@chirp/ui/assets/fleet-icons/empty-fallback-cover.svg';

interface IEmptyFallbackProps {
    title?: string;
    subTitle?: string;
    withBackground?: boolean;
    action?: React.ReactNode;
    containerSx?: SxProps;
}

export const EmptyFallback: FC<IEmptyFallbackProps> = ({
    title,
    subTitle,
    action,
    containerSx,
    withBackground = true,
}) => {
    return (
        <Stack
            gap="8px"
            alignItems="center"
            height="100%"
            width="100%"
            justifyContent="center"
            sx={{
                ...containerSx,
                backgroundImage: withBackground ? `url("${emptyFallbackCoverIcon}")` : 'none',
                backgroundRepeat: 'repeat',
            }}
        >
            {title && (
                <Typography variant="text13" color="text.text4">
                    {title}
                </Typography>
            )}
            {subTitle && (
                <Typography variant="caption12" color="text.text8">
                    {subTitle}
                </Typography>
            )}
            {action}
        </Stack>
    );
};
