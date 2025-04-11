import { Stack, SxProps } from '@mui/material';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import * as S from './style';
import { useTranslation } from 'react-i18next';
import React from 'react';

interface IListWithIconsWidgetProps extends IBaseWidgetProps {
    image: string | React.ReactNode;
    iconSx?: SxProps;
    rowSx?: SxProps;
    renderDescription: React.ReactNode;
    time: string;
}

export const ListWithIconsWidget: React.FC<React.PropsWithChildren<IListWithIconsWidgetProps>> = (props) => {
    const { image, iconSx, rowSx, renderDescription, time, ...baseWidgetProps } = props;

    const { t } = useTranslation('uiKit');

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderMainContent={
                <S.Row sx={{ ...rowSx }}>
                    <S.IconDescriptionContainer>
                        <S.IconContainer sx={{ ...iconSx }} title={t('Photo')}>
                            {image}
                        </S.IconContainer>
                        <Stack gap="4px">{renderDescription}</Stack>
                    </S.IconDescriptionContainer>
                    {time}
                </S.Row>
            }
        />
    );
};
