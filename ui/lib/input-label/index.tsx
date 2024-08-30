import { InputLabel as MuiInputLabel, SxProps, Theme, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
    label: ReactNode;
    labelId?: string;
    className?: string;
    sx?: SxProps<Theme>;
};

export const InputLabel: React.FC<Props> = ({ labelId, label, className, sx }) => {
    const { palette } = useTheme();

    return (
        <MuiInputLabel
            id={labelId}
            shrink
            className={className}
            sx={{
                padding: 0,
                backgroundColor: 'transparent',
                color: palette.lightShades.quaternary,
                ...sx,
            }}
        >
            {label}
        </MuiInputLabel>
    );
};
