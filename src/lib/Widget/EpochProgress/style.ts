import { alpha, styled } from '@mui/material';
import { Box, keyframes } from '@mui/material';

import { CurrentTheme } from '@/const/theme';

const gradient = keyframes`
  0% {
    background-position: left bottom;
  }

  100% {
    background-position: right bottom;
  }
`;

export const Container = styled(Box)(({ theme: { palette } }) => ({
  height: '100%',
  width: '100%',
  minHeight: '99px',
  borderRadius: '12px',
  background: `linear-gradient(122deg, ${
    palette.mode === CurrentTheme.Dark ? palette.darkShades.ternary : palette.secondary.main
  } 8.75%, ${palette.mode === CurrentTheme.Dark ? palette.primary.dark : palette.secondary.main} 92.14%)`,
  position: 'relative',
  boxShadow: palette.mode === CurrentTheme.Dark ? `1px 2px 2px 0px rgba(0, 0, 0, 0.25) inset` : 'unset',
  overflow: 'hidden',
  boxSizing: 'border-box',
}));

export const Progress = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRadius: '5px',
  background:
    theme.palette.mode === CurrentTheme.Dark
      ? `linear-gradient(90deg,rgba(255, 92, 0, 0.10) 0%, rgba(255, 92, 0, 0.40) 50%, rgba(255, 92, 0, 0.20) 100%)`
      : `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.08)} 0.08%, ${alpha(
          theme.palette.primary.main,
          0.2
        )} 20%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,

  position: 'absolute',
  backgroundSize: '50% 100%',
  animation: `${gradient} 6s infinite`,
  boxShadow: theme.palette.mode === CurrentTheme.Dark ? `1px 2px 2px 0px rgba(0, 0, 0, 0.25) inset` : 'unset',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  transition: 'width 0.5s ease',
  boxSizing: 'border-box',
}));

export const Tick = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '1px',
  height: '4px',
  background: theme.palette.primaryColors.accent,
  bottom: 0,
}));
