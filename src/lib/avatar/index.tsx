import { SxProps, useTheme } from '@mui/material';
import { getStringAvatar } from '@chirp/ui/helpers/getStringAvatar';
import { FC } from 'react';
import { UserBoardIcon } from '@chirp/ui/assets/fleet-icons';
import * as S from './styles';
import { Typography } from '../typogrpahy';

export interface AvatarProps {
    avatarUrl?: string;
    userName?: string;
    sx?: SxProps;
}

export const Avatar: FC<AvatarProps> = ({ avatarUrl, sx, userName }) => {
    const theme = useTheme();

    if (avatarUrl) {
        return <S.StyledAvatar src={avatarUrl} sx={sx} />;
    }

    return (
        <S.StyledAvatar sx={sx}>
            {userName ? (
                <Typography variant="h2" color={theme.palette.base.color1}>
                    {getStringAvatar(userName)}
                </Typography>
            ) : (
                <UserBoardIcon />
            )}
        </S.StyledAvatar>
    );
};
