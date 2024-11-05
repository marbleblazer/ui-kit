import { IconButton, Typography } from '@chirp/ui/lib';
import { Stack } from '@mui/material';

import * as S from './styles';
import { FC } from 'react';
import { LeftArrowBlackIcon } from '@chirp/ui/assets/fleet-icons';

interface ICustomHeaderProps {
    title: string;
    typeText: string;
    onBackClick: () => void;
}

export const CustomHeader: FC<ICustomHeaderProps> = ({ title, typeText, onBackClick }) => {
    return (
        <Stack direction="row" gap={2} alignItems="center">
            <IconButton variant="gray" onClick={onBackClick} size="small">
                <LeftArrowBlackIcon />
            </IconButton>
            <Stack gap={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <S.WidgetTypeName color="text.tertiary" variant="button">
                        {typeText}
                    </S.WidgetTypeName>
                </Stack>
                <Typography variant="h4">{title}</Typography>
            </Stack>
        </Stack>
    );
};
