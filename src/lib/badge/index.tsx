import { Typography } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

import * as S from './style';

type BadgeVariant = 'primary' | 'danger' | 'success';

interface BadgeProps {
    index?: number;
    text: string;
    getRef?: (index: number) => React.RefObject<HTMLElement | null>;
    variant?: BadgeVariant;
}

export const Badge = forwardRef(({ index, getRef, text, variant = 'primary' }: BadgeProps, ref) => {
    if (!text) return null;

    return (
        <S.Badge ref={getRef ? getRef(index ?? 0) : ref} className={variant}>
            <Typography noWrap fontSize="12px" lineHeight="16px">
                {text}
            </Typography>
        </S.Badge>
    );
});

interface SimpleBadgeProps {
    text: string | ReactNode;
    variant?: BadgeVariant;
}

export const SimpleBadge = ({ text, variant = 'primary' }: SimpleBadgeProps) => (
    <S.SimpleBadge className={variant}>
        <Typography noWrap fontSize="12px" lineHeight="16px">
            {text}
        </Typography>
    </S.SimpleBadge>
);

Badge.displayName = 'Badge';
