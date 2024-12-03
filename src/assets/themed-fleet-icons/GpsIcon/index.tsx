import { useTheme } from '@mui/material';
import GpsDark from './gps-dark.svg?react';
import GpsLight from './gps-light.svg?react';

interface IGpsIconProps {
    width?: string;
    height?: string;
}

export const GpsIcon: React.FC<IGpsIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const GpsComponent = theme.palette.mode === 'dark' ? GpsDark : GpsLight;

    return <GpsComponent width={width} height={height} title="GPS" />;
};
