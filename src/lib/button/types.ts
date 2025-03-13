import { ButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {
    isLoading?: boolean;
}

export interface IButtonLoaderProps {
    variant: ButtonProps['variant'];
}
