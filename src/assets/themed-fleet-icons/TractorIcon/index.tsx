import { useTheme } from '@mui/material';
import TractorDark from './tractor-dark.svg?react';
import TractorLight from './tractor-light.svg?react';

interface ITractorIconProps {
    width?: string;
    height?: string;
}

export const TractorIcon: React.FC<ITractorIconProps> = ({ width, height }) => {
    const theme = useTheme();

    const TractorComponent = theme.palette.mode === 'dark' ? TractorDark : TractorLight;

    return <TractorComponent width={width} height={height} title="Tractor" />;
};
