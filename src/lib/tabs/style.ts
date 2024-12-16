import { styled, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

export const Tabs = styled(MuiTabs)(({ theme }) => ({
    minWidth: '200px',
    minHeight: 'auto',
    backgroundColor: theme.palette.background.background4,

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
    color: theme.palette.text.text1,
    ...theme.typography.caption12,

    '&:hover': {
        backgroundColor: theme.palette.background.background4,
    },

    '&.Mui-selected': {
        color: theme.palette.base.color1,
        backgroundColor: theme.palette.base.color6,
    },
}));
