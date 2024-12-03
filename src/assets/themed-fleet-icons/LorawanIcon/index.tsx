import { useTheme } from '@mui/material';
import LorawanDark from './lorawan-dark.svg?react';
import LorawanLight from './lorawan-light.svg?react';

interface ILorawanIconProps {
    width?: string;
    height?: string;
}

export const LorawanIcon: React.FC<ILorawanIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const LorawanComponent = theme.palette.mode === 'dark' ? LorawanDark : LorawanLight;

    return <LorawanComponent width={width} height={height} title="LoRaWan" />;
};
