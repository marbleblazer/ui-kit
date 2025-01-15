import { styled, alpha } from '@mui/material';
import { Menu } from '@mui/material';

export const RangePickerMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: '8px',
        width: '576px',
        height: 'auto',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: `${alpha(theme.palette.border.border3, 0.1)} !important`,
        background: `${theme.palette.background.background7} !important`,
        padding: '16px',

        '.MuiMenu-list': {
            borderRadius: '12px',
            backdropFilter: 'blur(20px)',
            padding: 0,
        },

        '.MuiMenuItem-root': {
            label: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            },
            // '&:hover': {
            // background: theme.palette.background.primary,
            // },
        },
    },

    [theme.breakpoints.down('md')]: {
        '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '100%',
            padding: '16px 20px',
            left: '0 !important',
            right: '0 !important',
            zIndex: '901',
            opacity: 1,
            background: theme.palette.background.background2,
        },
    },
    [theme.breakpoints.between('md', 'lg')]: {
        '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '100%',
            padding: '16px 20px',
            left: '0 !important',
            right: '0 !important',
            zIndex: '901',
            opacity: 1,
            background: theme.palette.background.background2,
        },
    },
}));
