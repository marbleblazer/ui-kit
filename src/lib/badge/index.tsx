import { Typography } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

import * as S from './style';

interface BadgeProps {
    index?: number;
    text: string;
    getRef?: (index: number) => React.RefObject<HTMLElement | null>;
}

export const Badge = forwardRef(({ index, getRef, text }: BadgeProps, ref) => {
    if (!text) return null;

    return (
        <S.Badge ref={getRef ? getRef(index ?? 0) : ref}>
            <Typography noWrap fontSize="12px" lineHeight="16px">
                {text}
            </Typography>
        </S.Badge>
    );
});

interface SimpleBadgeProps {
    text: string | ReactNode;
}

export const SimpleBadge = ({ text }: SimpleBadgeProps) => (
    <S.SimpleBadge>
        <Typography noWrap fontSize="12px" lineHeight="16px">
            {text}
        </Typography>
    </S.SimpleBadge>
);

Badge.displayName = 'Badge';
