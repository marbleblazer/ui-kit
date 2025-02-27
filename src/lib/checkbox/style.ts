import { CloseEyeIcon, OpenEyeIcon } from '@chirp/ui/assets/fleet-icons';
import { styled } from '@mui/material';

export const CheckboxIcon = styled('span')(({ theme }) => ({
    borderRadius: 4,
    width: 18,
    height: 18,
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: theme.palette.text.text8,
    'input:hover ~ &': {
        borderColor: theme.palette.base.color6,
    },
    'input:disabled ~ &': {
        borderColor: theme.palette.border.border3,
    },
}));

export const CheckboxCheckedIcon = styled(CheckboxIcon)(({ theme }) => ({
    backgroundColor: theme.palette.base.color6,
    borderColor: theme.palette.base.color6,
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundPosition: 'center',

        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M5.8125 9.5625L7.5 11.4375L12.1875 6.5625' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        content: '""',
    },
}));

export const CustomOpenEyeIcon = styled(OpenEyeIcon)(({ theme }) => ({
    color: theme.palette.text.text4,
}));

export const CustomCloseEyeIcon = styled(CloseEyeIcon)(({ theme }) => ({
    color: theme.palette.text.text4,
}));
