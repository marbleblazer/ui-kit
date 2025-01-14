import { Box, styled } from '@mui/material';
import { Typography } from '../../typogrpahy';
import { StarFilled } from '@chirp/ui/assets/fleet-icons';

export const Wrapper = styled(Box)(({ theme }) => ({
    background: theme.palette.background.background7,
    borderRadius: '12px',
    padding: '14px 18px 18px',
}));

export const WidgetTypeName = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.text8,
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.text4,
}));

// export const Divider = styled(Box)(({ theme }) => ({
//     height: '1px',
//     width: '100%',
//     borderRadius: '1px',
//     background: theme.palette.border.border3,
// }));

export const StyledStarFilled = styled(StarFilled)(({ theme }) => ({
    color: theme.palette.base.color6,
}));
