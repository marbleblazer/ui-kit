import { styled } from '@mui/material';
import { TableCell as MuiTableCell } from '@mui/material';

export { Row } from '../../style';

export const HeadCell = styled(MuiTableCell)(({ theme }) => ({
    padding: '18px 12px 12px',
    border: 'none',
    backgroundColor: theme.palette.background.background7,
    color: theme.palette.text.text8,
    whiteSpace: 'nowrap',
    cursor: 'auto',
    ...theme.typography.body1,

    span: {
        svg: {
            stroke: theme.palette.text.text8,
        },
    },

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
