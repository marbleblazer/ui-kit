import { Typography as MUITypography, styled } from '@mui/material';

export const Typography = styled(MUITypography)(({ theme }) => ({
    color: theme.palette.text.secondary,
})) as typeof MUITypography;
