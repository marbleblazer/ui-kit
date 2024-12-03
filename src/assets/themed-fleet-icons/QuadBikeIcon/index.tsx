import { useTheme } from '@mui/material';
import QuadBikeDark from './quad-bike-dark.svg?react';
import QuadBikeLight from './quad-bike-light.svg?react';

interface IQuadBikeIconProps {
    width?: string;
    height?: string;
}

export const QuadBikeIcon: React.FC<IQuadBikeIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const QuadBikeComponent = theme.palette.mode === 'dark' ? QuadBikeDark : QuadBikeLight;

    return <QuadBikeComponent width={width} height={height} title="Quad bike" />;
};
