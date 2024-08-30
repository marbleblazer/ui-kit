import { Box, Stack, useTheme } from '@mui/material';
import React, { useRef } from 'react';

import { CalculatedValue } from './components/CalculatedValue';
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
      <Stack direction='row' justifyContent='space-between' width='100%'>
        <CalculatedValue value={min} postfix={postfix} label='min' color={palette.widgetValues.min} />
        <CalculatedValue value={avg} postfix={postfix} label='avg' color={palette.widgetValues.avg} />
        <CalculatedValue value={max} postfix={postfix} label='max' color={palette.widgetValues.max} />
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
