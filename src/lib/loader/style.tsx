import { keyframes, Stack, styled, Theme } from '@mui/material';
import { Typography } from '../typogrpahy';

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

// Стиль для одного оранжевого элемента
export const LoaderElement = styled('div')<LoaderElementProps>(({ theme, index }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1px',
    height: '1.5px',
    backgroundColor: theme.palette.base.color6,
    borderRadius: '1.5px',
    animation: `${fade} 1.2s infinite`,
    transformOrigin: 'center',
    transform: `translate(-50%, -50%) rotate(${index * 45}deg) translate(0, 5px)`,
    animationDelay: `${(index / 8) * 1.2}s`,
}));

// Контейнер для лоадера
export const LoaderContainer = styled(Stack)<{ text?: string }>(({ text }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: text ? 'row' : 'column',
    flexGrow: 1,
}));

// Span для центрирования дочерних элементов
export const LoaderSpan = styled('span')(() => ({
    position: 'relative',
    display: 'inline-block',
    width: '24px',
    height: '24px',
}));

export const LoaderText = styled(Typography)(({ theme }) => ({
    marginLeft: '20px',
    color: theme.palette.text.primary,
}));
