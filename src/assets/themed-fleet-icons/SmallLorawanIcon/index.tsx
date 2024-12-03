import { useTheme } from '@mui/material';
import SmallLorawanDark from './lora-small-dark-icon.svg?react';
import SmallLorawanLight from './lora-small-light-icon.svg?react';

interface ISmallLorawanIconProps {
    width?: string;
    height?: string;
}

export const SmallLorawanIcon: React.FC<ISmallLorawanIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const SmallLorawanComponent = theme.palette.mode === 'dark' ? SmallLorawanDark : SmallLorawanLight;

    return <SmallLorawanComponent width={width} height={height} title="LoRaWan" />;
};
