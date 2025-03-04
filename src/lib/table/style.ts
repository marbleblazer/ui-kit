import { alpha, styled } from '@mui/material';
import { TableCell, TableRow } from '@mui/material';

export const Row = styled(TableRow)(({ theme }) => ({
    position: 'relative',

    '&.hoverable:hover': {
        cursor: 'pointer',
        paddingLeft: '12px',
        backgroundColor: alpha(theme.palette.base.color61, 0.1),
        borderRadius: '8px',
        '& .MuiTypography-root.MuiTypography-body1': {
            color: theme.palette.base.color6,
        },
    },

    '&:hover': {
        'td:first-of-type': {
            position: 'relative',
        },

        'td:last-of-type': {
            paddingRight: 0,
            position: 'relative',
        },

        'td:first-of-type:before, td:last-of-type:after': {
            content: '""',
            position: 'absolute',
            top: '-1px',
            bottom: '-1px',
            width: '12px',
        },

        'td:first-of-type:before': {
            left: '-12px',
            borderTopLeftRadius: '12px',
            borderBottomLeftRadius: '12px',
        },

        'td:last-of-type:after': {
            right: '-12px',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
        },
    },

    'td:first-of-type': {
        paddingLeft: 0,
    },

    'td:last-of-type': {
        paddingRight: 0,
    },
}));

export const Cell = styled(TableCell)(({ theme }) => ({
    height: theme.spacing(5),
    padding: '12px',
    borderBottom: `1px solid ${alpha(theme.palette.border.border3, 0.1)}`,
    opacity: 1,
    color: `${theme.palette.text.text4} !important`,
    ...theme.typography.body1,

    [theme.breakpoints.down('lg')]: {
        padding: '8px 6px',
    },
}));
