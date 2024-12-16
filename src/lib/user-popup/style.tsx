import { alpha, Stack, styled, List as MuiList, ListItem as MuiListItem } from '@mui/material';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

export const Popup = styled(BasePopup)(() => ({
    zIndex: 1,
    borderRadius: '12px',
}));

export const PopupBody = styled(Stack)(({ theme }) => ({
    minWidth: '220px',
    alignItems: 'center',
    borderRadius: '12px',
    padding: 0,
    border: `1px solid ${alpha(theme.palette.border.border3, theme.palette.mode === 'dark' ? 0.1 : 0.6)}`,
    backgroundColor: theme.palette.background.background7,
    overflow: 'hidden',
    maxWidth: '220px',
}));

export const List = styled(MuiList)(() => ({
    width: '100%',
    padding: 0,
}));

export const ListItem = styled(MuiListItem)(({ theme }) => ({
    padding: '12px 8px',
    borderBottom: `1px solid ${theme.palette.border.border3}`,
    fontSize: '12px',
    lineHeight: '18px',
    color: theme.palette.text.text8,
    cursor: 'pointer',

    '&:last-of-type': {
        borderBottom: 'none',
        paddingBottom: '8px',
    },

    '&:hover': {
        backgroundColor: theme.palette.background.background2,
    },
}));

export const ListItemContent = styled(Stack)(() => ({
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: '8px',
    padding: '0 12px',
}));
