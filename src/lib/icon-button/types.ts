import { IconButtonProps } from '@mui/material';

export interface IIconButtonProps extends IconButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'gray';
}
