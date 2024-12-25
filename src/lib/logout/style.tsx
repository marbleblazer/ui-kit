import { Stack, styled, ListItem as MuiListItem } from '@mui/material';

export const ListItem = styled(MuiListItem)(({ theme }) => ({
    padding: '12px 8px',
    fontSize: '12px',
    lineHeight: '18px',
    color: theme.palette.text.text8,
    cursor: 'pointer',

    '&:last-of-type': {
        borderBottom: 'none',
        paddingBottom: '8px',
    },
    '.MuiStack-root': {
        '&:hover': {
            backgroundColor: theme.palette.background.background5,
            color: theme.palette.text.text6,
            '.MuiTypography-root': {
                color: theme.palette.text.text6,
            },
        },
    },
}));

export const ListItemContent = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: '8px',
    padding: '4px 8px',
    alignItems: 'center',
    width: '100%',
    borderRadius: '6px',
    height: '32px',
}));
