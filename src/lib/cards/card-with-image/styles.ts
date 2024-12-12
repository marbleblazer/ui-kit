import { styled } from '@mui/material/styles';
import { Typography } from '../../typogrpahy';
import { Tooltip } from '../../tooltip';

export const SubtitleTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.text8,
}));

export const CustomTooltip = styled(Tooltip)(() => ({
    width: '77px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
}));
