import { Box, styled } from '@mui/material';

export const Badge = styled(Box)(({ theme }) => ({
    borderRadius: '12px',
    padding: '4px 12px',
    background: theme.palette.info.main,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    width: 'min-content',
    color: theme.palette.text.text1,
}));

export const SimpleBadge = styled(Box)(({ theme }) => ({
    borderRadius: '12px',
    padding: '4px 12px',
    background: theme.palette.info.main,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    width: 'min-content',
    color: theme.palette.text.text1,
    float: 'left',
    margin: '2px',
}));
