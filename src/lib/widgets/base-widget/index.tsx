import { Stack, SxProps } from '@mui/material';
import { IconButton } from '../../icon-button';
import { StarIcon, TrashIcon } from '@chirp/ui/assets/fleet-icons';
import { FC, PropsWithChildren } from 'react';
import * as S from './styles';
import { Typography } from '../../typogrpahy';

export interface IBaseWidgetProps {
    type: 'period' | 'online';
    title: string;
    isFavorite?: boolean;
    customHeader?: React.ReactNode;
    onFavoriteClick: () => void;
    onDeleteClick: () => void;
    wrapperSxProps?: SxProps;
}

export const BaseWidget: FC<PropsWithChildren<IBaseWidgetProps>> = ({
    title,
    type,
    isFavorite,
    wrapperSxProps,
    customHeader,
    onFavoriteClick,
    onDeleteClick,
    children,
}) => {
    const resolveWidgetTypName = type === 'period' ? 'Data for period ' : 'Online data';
    return (
        <S.Wrapper sx={wrapperSxProps}>
            <Stack gap={2}>
                {customHeader ? (
                    customHeader
                ) : (
                    <>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                            <Stack gap={2}>
                                <Typography variant="caption" fontWeight={500}>
                                    {title}
                                </Typography>
                                <S.WidgetTypeName color="text.tertiary" variant="overline">
                                    {resolveWidgetTypName}
                                </S.WidgetTypeName>
                            </Stack>
                            <Stack direction="row">
                                <IconButton size="small" variant="gray" onClick={onFavoriteClick}>
                                    {isFavorite ? <S.StyledStarFilled /> : <StarIcon />}
                                </IconButton>
                                <IconButton size="small" variant="gray" onClick={onDeleteClick}>
                                    <TrashIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </>
                )}
                {children}
            </Stack>
        </S.Wrapper>
    );
};
