import { styled } from '@mui/material';
import { TableCell as MuiTableCell } from '@mui/material';

export { Row } from '../../style';

export const HeadCell = styled(MuiTableCell)(({ theme }) => ({
    padding: '18px 12px 12px',
    border: 'none',
    zIndex: 1,
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.text.tertiary,
    whiteSpace: 'nowrap',
    cursor: 'auto',

    [theme.breakpoints.down('lg')]: {
        padding: '8px 6px',
    },

    '&:first-of-type:before, &:last-of-type:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '12px',
        background: 'inherit',
    },

    '&:first-of-type': {
        paddingLeft: 0,

        '&:before': {
            left: '-12px',
        },
    },

    '&:last-of-type': {
        paddingRight: 0,

        '&:after': {
            right: '-12px',
        },
    },
}));
