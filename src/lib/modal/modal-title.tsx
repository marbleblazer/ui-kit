import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface IModalTitleProps {
    title: string;
    subTitle?: string;
    margin?: string;
    size?: 'mini' | 'big';
    subTitleWidth?: string;
}

export const ModalTitle: FC<IModalTitleProps> = ({ title, subTitle, subTitleWidth, margin, size = 'mini' }) => (
    <Stack gap={title && subTitle ? '8px' : '0px'} sx={{ margin }}>
        <Typography variant={size === 'big' ? 'h3' : 'title16'} textAlign="center" color="text.text1">
            {title}
        </Typography>
        <Typography
            variant={size === 'big' ? 'subtitle1' : 'caption12'}
            textAlign="center"
            color="text.text8"
            width={subTitleWidth}
        >
            {subTitle}
        </Typography>
    </Stack>
);
