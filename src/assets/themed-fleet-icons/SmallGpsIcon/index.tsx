import { useTheme } from '@mui/material';
import SmallGpsDark from './gps-small-dark-icon.svg?react';
import SmallGpsLight from './gps-small-light-icon.svg?react';

interface ISmallGpsIconProps {
    width?: string;
    height?: string;
}

export const SmallGpsIcon: React.FC<ISmallGpsIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const SmallGpsComponent = theme.palette.mode === 'dark' ? SmallGpsDark : SmallGpsLight;

    return <SmallGpsComponent width={width} height={height} title="GPS" />;
};
