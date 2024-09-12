import { styled } from '@mui/material';
import { Box, TableRow } from '@mui/material';

export { Cell } from '../../style';

export const TableWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    overflowX: 'hidden',
    padding: '0 20px 20px',
    borderRadius: '12px',
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.between('md', 'lg')]: {
        overflowX: 'visible',
    },
    [theme.breakpoints.down('lg')]: {
        overflowX: 'visible',
    },
}));

export const GroupedRow = styled(TableRow)(({ theme }) => ({
    td: {
        padding: '24px 0 12px',
        border: 'none',
        letterSpacing: '0.06px',
        color: theme.palette.accent.accent,
        width: '50px',
    },

    '&:first-of-type': {
        td: {
            paddingTop: 0,
        },
    },
}));
