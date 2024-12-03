import { useTheme } from '@mui/material';
import TruckDark from './truck-dark.svg?react';
import TruckLight from './truck-light.svg?react';

interface ITruckIconProps {
    width?: string;
    height?: string;
}

export const TruckIcon: React.FC<ITruckIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const TruckComponent = theme.palette.mode === 'dark' ? TruckDark : TruckLight;

    return <TruckComponent width={width} height={height} title="Truck" />;
};
