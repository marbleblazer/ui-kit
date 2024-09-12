import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface IModalTitleProps {
    title: string;
    subTitle?: string;
    margin?: string;
    size?: 'medium' | 'big';
}

export const ModalTitle: FC<IModalTitleProps> = ({ title, subTitle, margin, size = 'medium' }) => (
    <Stack gap="8px" sx={{ margin }}>
        <Typography variant={size === 'big' ? 'h3' : 'subtitle1'} textAlign="center" color="text.primary">
            {title}
        </Typography>
        <Typography variant={size === 'big' ? 'subtitle1' : 'caption'} textAlign="center" color="text.tertiary">
            {subTitle}
        </Typography>
    </Stack>
);
