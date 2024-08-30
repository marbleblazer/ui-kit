import { CircularProgress, Stack, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect } from 'react';

import { Epoch } from '@/entities/gateway';
import { useEpochs } from '@/hooks/useEpochs';
import { EPOCH_UNIT } from '@/services/constants';

import * as S from './style';
import TimeElapsed from './TimeElapsed';

const getTicks = (count: number) => new Array(count).fill(null).map((_, index) => `tick-${index + 1}`);

export const EpochProgress: React.FC = () => {
  const { currentEpoch, isLoading, refetch } = useEpochs({
    useErrorBoundary: false,
  });

  const epochStart = (currentEpoch as Epoch)?.from;
  const epochEnd = (currentEpoch as Epoch)?.till;
  const todayMoment = moment();
  const epochStartMoment = moment(epochStart);
  const epochEndMoment = moment(epochEnd);
  const epochDuration = Math.ceil(epochEndMoment.diff(epochStartMoment, EPOCH_UNIT, true));
  const epochDurationMinutes = epochEndMoment.diff(epochStartMoment, 'minutes');
  const minutesSinceStart = todayMoment.diff(epochStartMoment, 'minutes');

  const ticks = getTicks(epochDuration);

  const progress = (minutesSinceStart * 100) / epochDurationMinutes;

  useEffect(() => {
    if (!epochEnd) {
      return;
    }

    const now = Date.now();

    const timeLeft = epochEnd - now;

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        void refetch();
      }, timeLeft);

      return () => clearTimeout(timer);
    } else {
      const timer = setInterval(refetch, 60000);

      return () => clearInterval(timer);
    }
  }, [epochEnd, refetch]);

  if (isLoading || !currentEpoch) {
    return (
      <S.Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading ? <CircularProgress size={40} /> : null}
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Progress width={`${progress > 100 ? 100 : progress}%`} />
      {ticks.map((tick, i) => (
        <S.Tick left={`${(100 / ticks.length) * (i + 1)}%`} key={tick} />
      ))}

      <Stack
        width='100%'
        gap='12px'
        alignItems='flex-end'
        justifyContent='space-between'
        direction='row'
        padding='62px 20px 14px'
        position='relative'
        boxSizing='border-box'
        maxHeight='99px'
      >
        <Typography variant='h4' fontWeight={500} color='lightShades.primary'>
          Epoch {currentEpoch.number}
        </Typography>
        <Stack alignItems='flex-end' direction='row' gap='12px' lineHeight='28px' fontSize='20px' fontWeight={500}>
          <TimeElapsed startDate={epochStart} />
          <Typography
            lineHeight='18px'
            color='lightShades.primary'
            sx={{ opacity: 0.5 }}
            component='span'
            fontWeight={400}
          >
            |{' '}
          </Typography>
          <Typography lineHeight='18px' color='lightShades.primary' sx={{ opacity: 0.5 }} component='span'>
            {epochDuration} {EPOCH_UNIT}
          </Typography>
        </Stack>
      </Stack>
    </S.Container>
  );
};
