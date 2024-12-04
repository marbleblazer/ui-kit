import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface IModalTitleProps {
    title: string;
    subTitle?: string;
    margin?: string;
    size?: 'mini' | 'big';
}

export const ModalTitle: FC<IModalTitleProps> = ({ title, subTitle, margin, size = 'mini' }) => (
    <Stack gap="8px" sx={{ margin }}>
        <Typography variant={size === 'big' ? 'title20' : 'title16'} textAlign="center" color="text.text1">
            {title}
        </Typography>
        <Typography variant={size === 'big' ? 'title16' : 'title12'} textAlign="center" color="text.text8">
            {subTitle}
        </Typography>
    </Stack>
);
