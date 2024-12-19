import { Box } from '@mui/material';

import { Skeleton as SkeletonGradient } from '@chirp/ui/lib/skeleton';
import * as S from './style';

export const Skeleton: React.FC = () => (
    <S.Wrapper>
        <Box sx={{ width: '100%', height: '100%', clipPath: 'url(#flat-chart-skeleton)' }}>
            <SkeletonGradient />
        </Box>
        <svg width="0" height="0">
            <clipPath id="flat-chart-skeleton" clipPathUnits="objectBoundingBox">
                <path d="M0.222,0.193 L0,0.057 V1 H1 V0.266 H0.785 L0.765,0.104 H0.648 L0.64,0 H0.515 L0.426,0.542 H0.273 L0.222,0.193"></path>
            </clipPath>
        </svg>
    </S.Wrapper>
);
