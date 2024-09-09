import { styled, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

export const Tabs = styled(MuiTabs)(({ theme }) => ({
    minWidth: '200px',
    minHeight: 'auto',
    backgroundColor: theme.palette.darkShades.primary,
    padding: '2px',
    borderRadius: '3px',
    '.MuiTabs-flexContainer': {
        columnGap: '4px',
        justifyContent: 'center',
    },

    '.MuiTabs-indicator': {
        display: 'none',
    },
}));

export const Tab = styled(MuiTab)(({ theme }) => ({
    minHeight: 'auto',
    padding: '8px 12px',
    borderRadius: '3px',
    ...theme.typography.body1,
    color: theme.palette.lightShades.primary,

    '&:hover': {
        backgroundColor: theme.palette.background.default,
    },

    '&.Mui-selected': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primaryColors.accent,
    },
}));
