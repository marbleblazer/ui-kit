import { styled } from '@mui/material';

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
