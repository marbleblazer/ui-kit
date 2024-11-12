import { Box, styled } from '@mui/material';
import { Typography } from '../../typogrpahy';
import { StarFilled } from '@chirp/ui/assets/fleet-icons';

export const Wrapper = styled(Box)(({ theme }) => ({
    background: theme.palette.background.primary,
    borderRadius: '12px',
    padding: '14px 18px 18px',
}));
export const WidgetTypeName = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary,
}));

export const Divider = styled(Box)(({ theme }) => ({
    height: '1px',
    width: '100%',
    borderRadius: '1px',
    background: theme.palette.border.secondary,
}));

export const StyledStarFilled = styled(StarFilled)(({ theme }) => ({
    color: theme.palette.accent.accent,
}));
