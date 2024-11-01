import { Stack, styled, ListItem as MuiListItem } from '@mui/material';

export const ListItem = styled(MuiListItem)(({ theme }) => ({
    padding: '12px 8px',
    borderBottom: `1px solid ${theme.palette.border.primary}`,
    fontSize: '12px',
    lineHeight: '18px',
    color: theme.palette.text.secondary,
    cursor: 'pointer',

    '&:last-of-type': {
        borderBottom: 'none',
        paddingBottom: '8px',
    },

    '&:hover': {
        backgroundColor: theme.palette.background.tertiary,
    },
}));

export const ListItemContent = styled(Stack)(() => ({
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: '8px',
    padding: '0 12px',
}));
