import { styled } from '@mui/material';
import { Menu, List, ListItem, ListItemButton } from '@mui/material';

export const RangePickerMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: '8px',
    width: '576px',
    height: 'auto',
    background: theme.palette.darkShades.secondary,
    opacity: 0.8,
    padding: '16px',

    '.MuiMenu-list': {
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      padding: 0,
    },

    '.MuiMenuItem-root': {
      label: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      },
      '&:hover': {
        background: theme.palette.darkShades.primary,
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '& .MuiPaper-root': {
      width: '100%',
      maxWidth: '100%',
      padding: '16px 20px',
      left: '0 !important',
      right: '0 !important',
      zIndex: '901',
      opacity: 1,
      background: theme.palette.darkShades.secondary,
    },
  },
  [theme.breakpoints.between('md', 'lg')]: {
    '& .MuiPaper-root': {
      width: '100%',
      maxWidth: '100%',
      padding: '16px 20px',
      left: '0 !important',
      right: '0 !important',
      zIndex: '901',
      opacity: 1,
      background: theme.palette.darkShades.secondary,
    },
  },
}));

export const CalendarQuickSelect = styled(List)(({ theme }) => ({
  width: '100%',
  borderLeft: `1px solid ${theme.palette.borders.primary}`,
  padding: 0,

  [theme.breakpoints.down('md')]: {
    border: 'none',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    border: 'none',
  },
}));

export const CalendarQuickSelectItem = styled(ListItem)(({ theme }) => ({
  padding: '0',
  margin: '0',
  textTransform: 'capitalize',
  borderBottom: `1px solid ${theme.palette.borders.primary}`,

  '&:last-of-type': {
    borderBottom: 'none',
  },
}));

export const CalendarQuickSelectButton = styled(ListItemButton)(({ theme }) => ({
  padding: '16px 8px 16px 27px',
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: theme.typography.fontFamily,
  fontSize: '12px',
  lineHeight: '16px',

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.lightShades.primary,
  },

  [theme.breakpoints.down('md')]: {
    padding: '16px 0',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    padding: '16px 0',
  },
}));
