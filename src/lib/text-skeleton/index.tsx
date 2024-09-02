import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { Skeleton } from '../skeleton';

type TextSkeletonProps = {
    height?: number | string;
    sx?: SxProps<Theme>;
};

export const TextSkeleton: React.FC<TextSkeletonProps> = ({ height, sx }) => {
    const theme = useTheme();

    return (
        <Box
            width="120px"
            height={height ?? theme.typography.body1.lineHeight}
            display="inline-block"
            sx={{ borderRadius: '8px', overflow: 'hidden', ...sx }}
        >
            <Skeleton />
        </Box>
    );
};
