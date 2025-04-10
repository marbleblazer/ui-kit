import { styled, Box } from '@mui/material';

export const ProgressContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '6px',
    borderRadius: '6px',
    overflow: 'hidden',
    backgroundColor: theme.palette.text.text9,
}));

export const ProgressSegment = styled(Box)<{ widthPercent: number; color: string }>(({ widthPercent, color }) => ({
    position: 'absolute',
    height: '100%',
    width: `${widthPercent}%`,
    backgroundColor: color,
}));
