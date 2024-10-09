import { styled } from '@mui/material';
import * as S from './style';
import { FC } from 'react';

interface ISwitchProps {
    width?: string;
    activeText?: string;
    inactiveText?: string;
    checked?: boolean;
    onChange?: (val: boolean) => void;
}

export const Switch: FC<ISwitchProps> = ({
    width = '124px',
    activeText = '',
    inactiveText = '',
    checked = false,
    onChange,
}) => {
    const StyledSwitch = styled(S.Switch)(() => ({
        '& .MuiSwitch-track': {
            '&::before': {
                content: `"${activeText}"`,
                display: checked ? 'block' : 'none',
            },
            '&::after': {
                content: `"${inactiveText}"`,
                display: !checked ? 'block' : 'none',
            },
        },
    }));

    return (
        <StyledSwitch
            onClick={() => onChange && onChange(!checked)}
            sx={{ width }}
            checked={checked}
            onChange={(_, checked) => onChange && onChange(checked)}
            inputProps={{
                style: {
                    width,
                },
            }}
        />
    );
};
