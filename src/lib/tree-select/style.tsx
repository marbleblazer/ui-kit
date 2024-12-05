import { TreeItemProps } from '@mui/lab';
import { alpha, styled } from '@mui/material';
import { TreeItem as MUITreeItem } from '@mui/x-tree-view';

export const TreeItem = styled(MUITreeItem)<TreeItemProps>(({ theme, level = 0 }) => {
    const paddingLeft = 16 + level * 24; // Базовый отступ + увеличение с каждым уровнем

    return {
        '.MuiTreeItem-content': {
            paddingLeft: paddingLeft,
            paddingRight: 16,
            paddingTop: 14,
            paddingBottom: 14,

            flexDirection: 'row-reverse',
            color: theme.palette.text.textInput80,
            background: 'transparent',
            borderRadius: '0px',
            ...theme.typography.text14,

            svg: {
                color: alpha(theme.palette?.text?.textInput80, 0.8),
            },

            '&.Mui-expanded': {
                svg: {
                    transform: 'rotateZ(180deg)',
                    transition: 'all 200ms',
                },
            },

            '&.MuiTreeItem-content.Mui-focused': {
                backgroundColor: 'transparent !important',
            },

            '&.Mui-selected': {
                backgroundColor: alpha(theme.palette?.base.color61, 0.1),
                color: theme.palette.base.color6,
            },

            '&:hover': {
                backgroundColor: alpha(theme.palette?.base.color61, 0.1),
                color: theme.palette?.base.color6,
            },
        },

        ul: {
            padding: 0,
        },
    };
});
