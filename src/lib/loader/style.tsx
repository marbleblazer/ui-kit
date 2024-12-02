import { keyframes, Stack, styled, Theme } from '@mui/material';

const fade = keyframes`
  0% {
    opacity: 0.05;
  }
  14.28% {
    opacity: 0.15;
  }
  28.56% {
    opacity: 0.25;
  }
  42.84% {
    opacity: 0.35;
  }
  57.12% {
    opacity: 0.45;
  }
  71.4% {
    opacity: 0.7;
  }
  85.68% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

interface LoaderElementProps {
    theme?: Theme;
    index: number;
}

export const LoaderElement = styled('div')<LoaderElementProps>(({ theme, index }) => ({
    position: 'absolute',
    width: '3px',
    height: '5px',
    backgroundColor: theme.palette.base.color6,
    borderRadius: '1.5px',
    animation: `${fade} 1.2s infinite`,
    transform: `rotate(${index * 45}deg) translate(0px, 10px)`,
    animationDelay: `${(index / 8) * 1.2}s`,
}));

export const LoaderContainer = styled(Stack)(() => ({
    position: 'relative',
    width: '24px',
    height: '24px',
    alignItems: 'center',
    justifyContent: 'center',
}));
