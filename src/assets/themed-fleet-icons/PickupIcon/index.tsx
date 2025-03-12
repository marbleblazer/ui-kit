import { useTheme } from '@mui/material';
import PickupDark from './pickup-dark.svg?react';
import PickupLight from './pickup-light.svg?react';

interface IPickupIconProps {
    width?: string;
    height?: string;
}

export const PickupIcon: React.FC<IPickupIconProps> = ({ width = '56px', height = '56px' }) => {
    const theme = useTheme();

    const PickupComponent = theme.palette.mode === 'dark' ? PickupDark : PickupLight;

    return <PickupComponent width={width} height={height} title="Pickup" />;
};
