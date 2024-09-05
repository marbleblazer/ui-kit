import { styled } from '@mui/material';
import { TreeItem as MUITreeItem } from '@mui/x-tree-view';

export const TreeItem = styled(MUITreeItem)(({ theme }) => ({
    '.MuiTreeItem-content': {
        padding: '14px 16px',
        '&:hover': {
            backgroundColor: theme.palette?.additionalColors.buttonSecondary,
            color: theme.palette?.primaryColors.accent,
        },
    },
}));
