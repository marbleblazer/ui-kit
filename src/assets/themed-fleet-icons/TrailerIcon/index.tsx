import { useTheme } from '@mui/material';
import TrailerDark from './trailer-dark.svg?react';
import TrailerLight from './trailer-light.svg?react';

interface ITrailerIconProps {
    width?: string;
    height?: string;
}

export const TrailerIcon: React.FC<ITrailerIconProps> = ({ width = '56px', height = '56px' }) => {
    const theme = useTheme();

    const TrailerComponent = theme.palette.mode === 'dark' ? TrailerDark : TrailerLight;

    return <TrailerComponent width={width} height={height} title="Trailer" />;
};
