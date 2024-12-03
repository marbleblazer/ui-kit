import { useTheme } from '@mui/material';
import MotorbikeDark from './motorbike-dark.svg?react';
import MotorbikeLight from './motorbike-light.svg?react';

interface IMotorbikeIconProps {
    width?: string;
    height?: string;
}

export const MotorbikeIcon: React.FC<IMotorbikeIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const MotorbikeComponent = theme.palette.mode === 'dark' ? MotorbikeDark : MotorbikeLight;

    return <MotorbikeComponent width={width} height={height} title="Motorbike" />;
};
