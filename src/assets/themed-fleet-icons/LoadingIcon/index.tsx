import { useTheme } from '@mui/material';
import LoadingDark from './loading-dark-icon.svg?react';
import LoadingLight from './loading-light-icon.svg?react';

interface ILoadingIconProps {
    width?: string;
    height?: string;
}

export const LoadingIcon: React.FC<ILoadingIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const LoadingComponent = theme.palette.mode === 'dark' ? LoadingDark : LoadingLight;

    return <LoadingComponent width={width} height={height} title="Loading" />;
};
