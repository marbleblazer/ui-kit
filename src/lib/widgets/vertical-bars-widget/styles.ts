import { MenuItem, styled } from '@mui/material';
import { Typography } from '../../typogrpahy';

export const ListWrapper = styled('div')(() => ({
    display: 'grid',
    paddingRight: '8px',
    gridTemplateColumns: 'auto min-content' /* Автоматическая ширина столбцов по содержимому */,
    gap: '12px',
    width: '100%',
    maxHeight: '140px',
    overflow: 'auto',
}));

export const HeaderWrapper = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    whiteSpace: 'nowrap',
    background: theme.palette.background.primary,
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 10px',
    height: '38px',
    '.MuiFormControlLabel-root': {
        margin: 0,
    },
    '&.Mui-selected': {
        background: 'transparent',
    },
}));

export const WidgetTypeName = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary,
}));
