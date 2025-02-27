import { Stack, SxProps } from '@mui/material';
import { IconButton } from '../../icon-button';
import { StarIcon, TrashIcon } from '@chirp/ui/assets/fleet-icons';
import { FC, PropsWithChildren } from 'react';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

export interface IBaseWidgetProps {
    type: 'period' | 'online';
    title: string;
    isFavorite?: boolean;
    customHeader?: React.ReactNode;
    onFavoriteClick: () => void;
    onDeleteClick: () => void;
    wrapperSxProps?: SxProps;
    deleteDisabled?: boolean;
    makeFavouriteDisabled?: boolean;
}

export const BaseWidget: FC<PropsWithChildren<IBaseWidgetProps>> = ({
    title,
    type,
    isFavorite,
    wrapperSxProps,
    customHeader,
    onFavoriteClick,
    onDeleteClick,
    deleteDisabled = false,
    makeFavouriteDisabled = false,
    children,
}) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });
    const resolveWidgetTypName = type === 'period' ? t('Data for period') : t('Online data');

    return (
        <S.Wrapper sx={wrapperSxProps}>
            <Stack gap={2}>
                {customHeader ? (
                    customHeader
                ) : (
                    <>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                            <Stack gap={1}>
                                <S.Title variant="title12">{title}</S.Title>
                                <S.WidgetTypeName variant="overline">{resolveWidgetTypName}</S.WidgetTypeName>
                            </Stack>
                            <Stack direction="row">
                                <IconButton
                                    disabled={makeFavouriteDisabled}
                                    size="small"
                                    variant="gray"
                                    onClick={onFavoriteClick}
                                >
                                    {isFavorite ? <S.StyledStarFilled /> : <StarIcon />}
                                </IconButton>
                                <IconButton
                                    disabled={deleteDisabled}
                                    size="small"
                                    variant="gray"
                                    onClick={onDeleteClick}
                                >
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
