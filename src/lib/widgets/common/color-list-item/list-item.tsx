import { Stack } from '@mui/material';
import * as S from './styles';
import { FC } from 'react';
import { Typography } from '@chirp/ui/lib/typogrpahy';

export interface IColorListItemProps {
    color: string;
    name: string;
    value: number | null;
    onClick?: () => void;
}

export const ColorListItem: FC<IColorListItemProps> = ({ color, name, value, onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (onClick) {
            onClick();
        }
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                cursor: onClick && 'pointer',
            }}
            onClick={handleClick}
        >
            <Stack direction="row" gap={1} alignItems="center">
                <S.Marker sx={{ backgroundColor: color }} />
                <Typography variant="text12" sx={{ color: 'text.text1' }}>
                    {name}
                </Typography>
            </Stack>
            {value === null ? null : (
                <Typography variant="text12" sx={{ color: 'text.text1' }}>
                    {value}
                </Typography>
            )}
        </Stack>
    );
};
