import { SxProps } from '@mui/material';
import { getStringAvatar } from '@chirp/ui/helpers/getStringAvatar';
import { FC } from 'react';
import { UserBoardIcon } from '@chirp/ui/assets/fleet-icons';
import * as S from './styles';

export interface AvatarProps {
    avatarUrl?: string;
    userName?: string;
    sx?: SxProps;
}

export const Avatar: FC<AvatarProps> = ({ avatarUrl, sx, userName }) => {
    if (avatarUrl) {
        return <S.StyledAvatar src={avatarUrl} sx={sx} />;
    }

    return <S.StyledAvatar sx={sx}>{userName ? getStringAvatar(userName) : <UserBoardIcon />}</S.StyledAvatar>;
};
