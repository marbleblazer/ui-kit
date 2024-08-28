import { SxProps, Avatar as MuiAvatar } from '@mui/material';
import { getStringAvatar } from '@ui/helpers/getStringAvatar';
import { FC } from 'react';

export interface AvatarProps {
    avatarUrl?: string;
    userName?: string;
    sx?: SxProps;
}

export const Avatar: FC<AvatarProps> = ({ avatarUrl, sx, userName }) => {
    if (avatarUrl) {
        return <MuiAvatar src={avatarUrl} sx={sx} />;
    }

    return <MuiAvatar sx={sx}>{userName ? getStringAvatar(userName) : ''}</MuiAvatar>;
};
