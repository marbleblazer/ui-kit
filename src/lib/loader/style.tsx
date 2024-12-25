import { keyframes, Stack, styled } from '@mui/material';
import { Typography } from '../typogrpahy';
import { ILoaderElementProps, ILoaderSpanProps, ISizeConfig, TLoaderSize } from './types';

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

// Конфигурация размеров
const sizeConfig: Record<TLoaderSize, ISizeConfig> = {
    small: {
        element: {
            width: '1px',
            height: '1.5px',
            translate: 'translate(0, 5px)',
        },
        span: {
            width: '24px',
            height: '24px',
        },
    },
    large: {
        element: {
            width: '1.5px',
            height: '7.5px',
            translate: 'translate(0, 11px)',
        },
        span: {
            width: '40px',
            height: '40px',
        },
    },
};

// Стиль для одного оранжевого элемента
export const LoaderElement = styled('div')<ILoaderElementProps>(({ theme, index, size }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: sizeConfig[size].element.width,
    height: sizeConfig[size].element.height,
    backgroundColor: theme.palette.base.color6,
    borderRadius: '1.5px',
    animation: `${fade} 1.2s infinite`,
    transformOrigin: 'center',
    transform: `translate(-50%, -50%) rotate(${index * 45}deg) ${sizeConfig[size].element.translate}`,
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
export const LoaderSpan = styled('span')<ILoaderSpanProps>(({ size }) => ({
    position: 'relative',
    display: 'inline-block',
    width: sizeConfig[size].span.width,
    height: sizeConfig[size].span.height,
}));

export const LoaderText = styled(Typography)(({ theme }) => ({
    marginLeft: '20px',
    color: theme.palette.text.text1,
}));
