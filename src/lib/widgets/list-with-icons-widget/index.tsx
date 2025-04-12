import { Stack, SxProps } from '@mui/material';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import * as S from './style';
import { useTranslation } from 'react-i18next';
import React from 'react';

interface IListWithIconsWidgetProps extends IBaseWidgetProps {
    rowsData: {
        id: number;
        image: string | React.ReactNode;
        renderDescription: React.ReactNode;
        time: string;
    }[];
    iconSx?: SxProps;
    rowSx?: SxProps;
}

export const ListWithIconsWidget: React.FC<React.PropsWithChildren<IListWithIconsWidgetProps>> = (props) => {
    const { rowsData, iconSx, rowSx, ...baseWidgetProps } = props;
    const { t } = useTranslation('uiKit');

    return (
        <BaseWidget
            {...baseWidgetProps}
            renderMainContent={
                <Stack sx={{ overflow: 'auto', gap: '20px' }}>
                    {rowsData.map((item) => (
                        <S.Row key={item.id} sx={{ ...rowSx }}>
                            <S.IconDescriptionContainer>
                                <S.IconContainer sx={{ ...iconSx }} title={t('Photo')}>
                                    {item.image}
                                </S.IconContainer>
                                <Stack gap="4px">{item.renderDescription}</Stack>
                            </S.IconDescriptionContainer>
                            {item.time}
                        </S.Row>
                    ))}
                </Stack>
            }
        />
    );
};
