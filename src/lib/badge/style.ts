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
    '&.primary': {
        background: theme.palette.info.main,
    },
    '&.danger': {
        background: theme.palette.base.color7,
    },
    '&.success': {
        background: theme.palette.base.color9,
    },
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
    '&.primary': {
        background: theme.palette.info.main,
    },
    '&.danger': {
        background: theme.palette.base.color7,
    },
    '&.success': {
        background: theme.palette.base.color9,
    },
}));
