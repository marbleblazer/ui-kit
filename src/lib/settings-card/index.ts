import { Box, Stack, styled } from '@mui/material';

export const SettingsCard = styled(Box)(({ theme }) => ({
    width: '100%',
    paddingTop: '40px',
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.text.primary}1A`,
    padding: '20px',
    borderRadius: '12px',
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'auto',

    [theme.breakpoints.between('md', 'lg')]: {
        overflow: 'auto',
        marginTop: '8px',

        '&.non-scrollable': {
            overflow: 'hidden',
        },
    },

    [theme.breakpoints.down('md')]: {
        padding: '24px 12px',
        overflow: 'auto',

        '&.non-scrollable': {
            overflow: 'hidden',
        },
    },
}));

export const SettingsContainer = styled(Stack)(({ theme }) => ({
    background: `linear-gradient(180deg, ${theme.palette.darkShades.ternary} 0%, rgba(255, 77, 20, 0.10) 100%)`,
    width: '100%',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: `inset 0px 0px 0px 1px ${theme.palette.border.primary}`,

    [theme.breakpoints.down('sm')]: {
        padding: '12px',
    },
}));
