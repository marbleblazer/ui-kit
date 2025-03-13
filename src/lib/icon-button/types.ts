import { IconButtonProps } from '@mui/material';

export interface IIconButtonProps extends IconButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'gray';
    isLoading?: boolean;
}

export interface IIconButtonLoaderProps {
    variant: IIconButtonProps['variant'];
}
