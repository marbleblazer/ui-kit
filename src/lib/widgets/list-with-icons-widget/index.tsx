import { Stack, SxProps, useTheme } from '@mui/material';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import * as S from './style';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';
import { getAlertStyles, getHoverStyles } from './helpers/helpers';
import { Typography } from '../../typogrpahy';

interface IListWithIconsWidgetProps extends IBaseWidgetProps {
    rowsData: {
        id: number;
        image: string | React.ReactNode;
        renderDescription: React.ReactNode;
        time: string;
        isAlert?: boolean;
        isUnread?: boolean;
    }[];
    iconSx?: SxProps;
    rowSx?: SxProps;
    dividerSx?: SxProps;
    onRowClick?: (id: number) => void;
    emptyFallbackMsg: string;
    isDivider?: boolean;
}

export const ListWithIconsWidget: React.FC<React.PropsWithChildren<IListWithIconsWidgetProps>> = (props) => {
    const { rowsData, iconSx, rowSx, dividerSx, onRowClick, emptyFallbackMsg, isDivider, ...baseWidgetProps } = props;

    const theme = useTheme();

    const { t } = useTranslation('uiKit');

    const handleRowCLick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        event.stopPropagation();

        if (onRowClick) onRowClick(id);
    };

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderMainContent={
                rowsData.length > 0 ? (
                    <Stack sx={{ overflow: 'auto', gap: '12px' }}>
                        {rowsData.map((item, index) => (
                            <Fragment key={item.id}>
                                <S.Row
                                    key={item.id}
                                    onClick={(event) => handleRowCLick(event, item.id)}
                                    sx={{
                                        ...rowSx,
                                        '&:hover': getHoverStyles(theme, item.isAlert),
                                    }}
                                >
                                    <S.IconDescriptionContainer>
                                        <S.IconContainer
                                            sx={{
                                                ...iconSx,
                                                ...getAlertStyles(theme, item.isAlert),
                                            }}
                                        >
                                            {item.image && typeof item.image === 'string' ? (
                                                <S.Image src={item.image} title={t('Photo')} />
                                            ) : (
                                                item.image
                                            )}
                                            {item.isUnread && (
                                                <S.Circle
                                                    sx={{
                                                        backgroundColor: item.isAlert
                                                            ? theme.palette.base.color7
                                                            : theme.palette.base.color6,
                                                    }}
                                                />
                                            )}
                                        </S.IconContainer>
                                        <Stack gap="4px">{item.renderDescription}</Stack>
                                    </S.IconDescriptionContainer>
                                    <Typography
                                        variant="caption12"
                                        color={item.isAlert ? theme.palette.alerts.alert : theme.palette.text.text8}
                                    >
                                        {item.time}
                                    </Typography>
                                </S.Row>
                                {isDivider && index < rowsData.length - 1 && <S.CustomDivider sx={{ ...dividerSx }} />}
                            </Fragment>
                        ))}
                    </Stack>
                ) : (
                    <Stack width="100%" height="100%" justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" color={theme.palette.text.text8}>
                            {emptyFallbackMsg}
                        </Typography>
                    </Stack>
                )
            }
        />
    );
};
