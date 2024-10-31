import { IconButton, Typography } from '@chirp/ui/lib';
import { Stack } from '@mui/material';

import * as S from '../stacked-line-widget/styles';
import { FC } from 'react';
import { LeftArrowBlackIcon } from '@chirp/ui/assets/fleet-icons';

interface IBaseWidgetCustomHeaderProps {
    title: string;
    typeText: string;
    onBackClick: () => void;
}

export const BaseWidgetCustomHeader: FC<IBaseWidgetCustomHeaderProps> = ({ title, typeText, onBackClick }) => {
    return (
        <Stack direction="row" gap={2} alignItems="center">
            <IconButton variant="gray" onClick={onBackClick} size="small">
                <LeftArrowBlackIcon />
            </IconButton>
            <Stack gap={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <S.WidgetTypeName color="text.tertiary" variant="overline">
                        {typeText}
                    </S.WidgetTypeName>
                </Stack>
                <Typography variant="caption" fontWeight={500}>
                    {title}
                </Typography>
            </Stack>
        </Stack>
    );
};
