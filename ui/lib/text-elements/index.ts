import { styled } from '@mui/material';
import { Typography } from '@mui/material';

export const TextSecondary = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 500,
  color: theme.palette.lightShades.secondary,
}));

export const TextQuaternary = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 400,
  color: theme.palette.lightShades.quaternary,
}));
