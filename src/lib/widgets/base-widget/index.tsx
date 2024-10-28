import { Stack, SxProps } from '@mui/material';
import { IconButton } from '../../icon-button';
import { StarFilled, StarIcon, TrashIcon } from '@chirp/ui/assets/fleet-icons';
import { FC, PropsWithChildren } from 'react';
import * as S from './styles';
import { Typography } from '../../typogrpahy';

export interface IBaseWidgetProps {
    type: 'period' | 'online';
    title: string;
    isFavorite?: boolean;
    onFavoriteClick: () => void;
    onDeleteClick: () => void;
    wrapperSxProps?: SxProps;
}

export const BaseWidget: FC<PropsWithChildren<IBaseWidgetProps>> = ({
    title,
    type,
    isFavorite,
    wrapperSxProps,
    onFavoriteClick,
    onDeleteClick,
    children,
}) => {
    const resolveWidgetTypName = type === 'period' ? 'Data for period ' : 'Online data';
    return (
        <S.Wrapper sx={wrapperSxProps}>
            <Stack gap={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <S.WidgetTypeName color="text.tertiary" variant="button">
                        {resolveWidgetTypName}
                    </S.WidgetTypeName>
                    <Stack direction="row">
                        <IconButton size="small" variant="gray" onClick={onFavoriteClick}>
                            {isFavorite ? <StarFilled /> : <StarIcon />}
                        </IconButton>
                        <IconButton size="small" variant="gray" onClick={onDeleteClick}>
                            <TrashIcon />
                        </IconButton>
                    </Stack>
                </Stack>
                <Typography variant="h4">{title}</Typography>
                <S.Divider />
                {children}
            </Stack>
        </S.Wrapper>
    );
};
