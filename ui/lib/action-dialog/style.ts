import { alpha, styled, Dialog as MuiDialog, Stack } from '@mui/material';

export const Dialog = styled(MuiDialog)(({ theme }) => ({
  backdropFilter: 'blur(4px)',

  '.MuiPaper-root': {
    width: '360px',
    minWidth: '360px',
    padding: '40px',
    borderRadius: '12px',
    background: theme.palette.background.default,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: 'auto',
      margin: '8px',
      padding: '20px',
    },
  },
}));

export const Card = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  maxWidth: '360px',
  width: '100%',
  background: theme.palette.background.default,
}));

export const IconWrapper = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '72px',
  height: '72px',
  borderRadius: '50%',
  backgroundImage: `linear-gradient(180deg, ${alpha(theme.palette.primaryColors.accent, 0.2)} 0%, ${alpha(
    theme.palette.primaryColors.accent,
    0
  )} 100%)`,
  color: theme.palette.primaryColors.accent,
}));
