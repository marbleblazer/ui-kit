import MuiPagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

export const StyledPagination = styled(MuiPagination)(({ theme }) => ({
    ul: {
        gap: '2px',
    },
    '& .MuiPaginationItem-root': {
        ...theme.typography.body1,
        width: '36px',
        height: '28px',
        borderRadius: '8px',
        padding: '4px 8px',
        color: theme.palette.text.text4,
        '&:hover': {
            backgroundColor: 'transparent !important',
            border: `1px solid ${theme.palette.border.border5}`,
            color: theme.palette.text.text1,
        },
    },

    '& .MuiPaginationItem-root.Mui-selected': {
        ...theme.typography.body1,
        backgroundColor: theme.palette.base.color61,
        color: theme.palette.base.color6,
        border: `none`,
    },
    '& .MuiPaginationItem-previousNext': {
        borderRadius: '6px',
        width: '28px',
        height: '28px',
        padding: '4px',
        backgroundColor: theme.palette.background.background8,
        color: theme.palette.text.text1,
        '&:hover': {
            backgroundColor: theme.palette.background.background8 + ' !important',
        },
        '.MuiSvgIcon-root': {
            width: '20px',
            height: '20px',
        },
    },
    '& li:first-of-type': {
        paddingRight: '6px',
    },
    '& li:last-of-type': {
        paddingLeft: '6px',
    },
}));
