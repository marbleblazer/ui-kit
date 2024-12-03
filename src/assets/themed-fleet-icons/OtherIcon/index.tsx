import { useTheme } from '@mui/material';
import OtherDark from './other-dark.svg?react';
import OtherLight from './other-light.svg?react';

interface IOtherIconProps {
    width?: string;
    height?: string;
}

export const OtherIcon: React.FC<IOtherIconProps> = ({ width = '56px', height = '56px' }) => {
    const theme = useTheme();

    const OtherComponent = theme.palette.mode === 'dark' ? OtherDark : OtherLight;

    return <OtherComponent width={width} height={height} title="Other" />;
};
