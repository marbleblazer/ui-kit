import { Stack, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

interface TimeElapsedProps {
    startDate: number;
}

const CURRENT_EPOCH_LENGTH = 1;

const EPOCH_UNIT = 'hours';

const epochBeginningText = 'Next epoch is beginning soon…';

const TimeElapsed: React.FC<TimeElapsedProps> = ({ startDate }) => {
    const [timeElapsed, setTimeElapsed] = useState<string>('');
    const [isEpochBeginning, setIsEpochBeginning] = useState<boolean>(false);

    useEffect(() => {
        const updateTimer = () => {
            const now = moment();
            const end = moment(startDate).add(CURRENT_EPOCH_LENGTH, EPOCH_UNIT);
            const duration = moment.duration(end.diff(now));

            const days = duration.days();
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            setTimeElapsed(`${days} d ${hours} h ${minutes} m ${seconds} s `);

            if (duration.asMilliseconds() > 0) {
                setIsEpochBeginning(false);
            } else {
                setIsEpochBeginning(true);
            }
        };

        updateTimer();

        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, [startDate]);

    if (isEpochBeginning) {
        return (
            <Stack maxWidth="120px">
                <Typography
                    lineHeight="18px"
                    fontSize="12px"
                    color="lightShades.primary"
                    component="span"
                    sx={{ opacity: 0.5 }}
                >
                    {epochBeginningText}
                </Typography>
            </Stack>
        );
    }

    return (
        <Typography
            lineHeight="18px"
            color="lightShades.primary"
            component="span"
            sx={{ opacity: 0.5, minWidth: '125px' }}
        >
            {timeElapsed}
        </Typography>
    );
};

export default TimeElapsed;
