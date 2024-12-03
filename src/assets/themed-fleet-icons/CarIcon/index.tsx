import { useTheme } from '@mui/material';
import CarDark from './car-dark.svg?react';
import CarLight from './car-light.svg?react';

interface ICarIconProps {
    width?: string;
    height?: string;
}

export const CarIcon: React.FC<ICarIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const CarComponent = theme.palette.mode === 'dark' ? CarDark : CarLight;

    return <CarComponent width={width} height={height} title="Car" />;
};
