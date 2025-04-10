import { Box, Theme } from '@mui/material';
import { IProgressSegment } from '..';
import { Typography } from '../../../typogrpahy';

export const PercentLabels: React.FC<{ data: IProgressSegment[]; total: number; theme: Theme }> = ({
    data,
    total,
    theme,
}) => {
    let acc = 0;

    return (
        <Box position="relative" height="16px">
            {data.map((item) => {
                const percent = (item.value / total) * 100;
                const leftPosition = acc;
                acc += percent;

                return (
                    <Typography
                        key={item.label}
                        variant="caption"
                        color={theme.palette.base.colorNewGrey}
                        sx={{
                            position: 'absolute',
                            left: `${leftPosition + percent / 2}%`,
                            transform: 'translateX(-50%)',
                        }}
                    >
                        {Math.round(percent)}%
                    </Typography>
                );
            })}
        </Box>
    );
};
