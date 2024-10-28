import { Stack } from '@mui/material';
import * as S from './styles';
import { FC } from 'react';
import { Typography } from '../../typogrpahy';

export interface IDonutWidgetListItemProps {
    color: string;
    name: string;
    value: number;
}

export const DonutWidgetListItem: FC<IDonutWidgetListItemProps> = ({ color, name, value }) => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" gap={1} alignItems="center">
                <S.Marker sx={{ backgroundColor: color }} />
                <Typography variant="body1">{name}</Typography>
            </Stack>
            <Typography variant="body1">{value}</Typography>
        </Stack>
    );
};
