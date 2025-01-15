import { styled } from '@mui/material';
import { keyframes, SxProps, Theme, Box } from '@mui/material';
import { useRef, useEffect } from 'react';

const slideDiagonal = keyframes`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`;

export const SkeletonContainer = styled(Box)(({ theme: { palette } }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    background: `linear-gradient(240.16deg, ${palette.background.background6} 0%, rgba(53, 53, 53, 0) 100%)`,
    overflow: 'hidden',
    '--diagonal-length': '0px',
}));

export const SkeletonDiagonalStripe = styled('div')`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: white;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${slideDiagonal} 1s linear infinite;
    filter: blur(20px);
`;

export interface SkeletonProps {
    sx?: SxProps<Theme>;
}

export const Skeleton = ({ sx }: SkeletonProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const setDiagonalLength = () => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;
            const diagonal = Math.sqrt(width * width + height * height);

            containerRef.current.style.setProperty('--diagonal-length', `${diagonal}px`);
        }
    };

    useEffect(() => {
        setDiagonalLength();

        window.addEventListener('resize', setDiagonalLength);

        return () => {
            window.removeEventListener('resize', setDiagonalLength);
        };
    }, []);

    return (
        <SkeletonContainer ref={containerRef} sx={sx}>
            <SkeletonDiagonalStripe />
        </SkeletonContainer>
    );
};
