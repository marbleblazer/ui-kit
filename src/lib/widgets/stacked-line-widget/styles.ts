import { MenuItem, styled } from '@mui/material';

export const ListWrapper = styled('div')(() => ({
    display: 'grid',
    paddingRight: '8px',
    gridTemplateColumns: 'auto min-content' /* Автоматическая ширина столбцов по содержимому */,
    gap: '12px',
    width: '100%',
    maxHeight: '140px',
    overflow: 'auto',
}));

export const HeaderWrapper = styled('div')(() => ({
    position: 'sticky',
    top: 0,
    whiteSpace: 'nowrap',
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
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
    ...theme.typography.text12,
    color: theme.palette.text.text1,
}));
