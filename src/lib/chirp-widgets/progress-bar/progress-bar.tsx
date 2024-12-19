import { Box, Stack, useTheme } from '@mui/material';
import React, { useRef } from 'react';

import { CalculatedValue } from './calculated-value';
import * as S from './style';

type Props = {
    current: number;
    min: number;
    max: number;
    avg: number;
    postfix: string;
    gradientColors: string;
    currentColor: string;
};

export const ProgressBar: React.FC<Props> = ({ current, min, max, avg, postfix, gradientColors, currentColor }) => {
    const { palette } = useTheme();
    const sliderRef = useRef<HTMLElement>(null);

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" width="100%">
                {/* <CalculatedValue value={min} postfix={postfix} label='min' color={palette.additionalColors.blue} />
        <CalculatedValue value={avg} postfix={postfix} label='avg' color={palette.additionalColors.yellow} />
        <CalculatedValue value={max} postfix={postfix} label='max' color={palette.alerts.alert} /> */}
                <CalculatedValue value={min} postfix={postfix} label="min" color="#5F75FF" />
                <CalculatedValue value={avg} postfix={postfix} label="avg" color="#FFA824" />
                <CalculatedValue value={max} postfix={postfix} label="max" color="#FF4D14" />
            </Stack>
            <S.Slider
                ref={sliderRef}
                value={current}
                min={Math.min(min, current)}
                max={Math.max(max, current) || 100}
                track={false}
                disabled
                sx={{
                    '--gradient': `linear-gradient(90deg, ${gradientColors}`,
                    '& .MuiSlider-thumb': { backgroundColor: currentColor },
                }}
            />
        </Box>
    );
};
