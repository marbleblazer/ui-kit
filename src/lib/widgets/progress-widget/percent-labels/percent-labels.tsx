import { useTheme } from '@mui/material';
import { IProgressSegment } from '..';
import { Typography } from '../../../typogrpahy';

interface IPercentLabels {
    data: IProgressSegment[];
    total: number;
}

export const PercentLabels: React.FC<IPercentLabels> = ({ data, total }) => {
    const theme = useTheme();

    let acc = 0;

    return data
        .map((item) => {
            if (item.value === 0) return null;

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
        })
        .filter(Boolean);
};
