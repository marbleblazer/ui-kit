import { styled } from '@mui/material';
import { Typography } from '../../typogrpahy';
import { Tooltip } from '../../tooltip';

export const TitleTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.text1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
}));

export const CustomTooltip = styled(Tooltip)(() => ({
    width: '77px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
}));
