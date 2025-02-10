import { styled } from '@mui/material';
import * as S from './style';
import { FC, useEffect, useRef, useState } from 'react';

interface ISwitchProps {
    width?: string;
    activeText?: string;
    inactiveText?: string;
    checked?: boolean;
    onChange?: (val: boolean) => void;
}

export const Switch: FC<ISwitchProps> = ({ width, activeText = '', inactiveText = '', checked = false, onChange }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [widthState, setWidthState] = useState<string>('117px');
    const StyledSwitch = styled(S.Switch)(() => ({
        '& .MuiSwitch-track': {
            '&::before': {
                content: `"${activeText}"`,
                whiteSpace: 'nowrap',
                display: checked ? 'block' : 'none',
            },
            '&::after': {
                content: `"${inactiveText}"`,
                whiteSpace: 'nowrap',
                display: !checked ? 'block' : 'none',
            },
        },
    }));

    useEffect(() => {
        if (!containerRef.current) return;

        const element = containerRef.current.querySelector('.MuiSwitch-track');

        if (element) {
            const beforeStyles = window.getComputedStyle(element, '::before');
            const afterStyles = window.getComputedStyle(element, '::after');

            const beforeWidth = beforeStyles.getPropertyValue('width');
            const afterWidth = afterStyles.getPropertyValue('width');

            return checked ? setWidthState(beforeWidth) : setWidthState(afterWidth);
        }
    }, [checked, activeText, inactiveText]);

    const currentWidth = width ?? (widthState ? `calc(${widthState} + 50px)` : checked ? '127.3px' : '117.3px');

    return (
        <div ref={containerRef}>
            <StyledSwitch
                onClick={() => onChange && onChange(!checked)}
                sx={{
                    width: currentWidth,
                }}
                checked={checked}
                onChange={(_, checked) => onChange && onChange(checked)}
                inputProps={{
                    style: {
                        width: currentWidth,
                    },
                }}
            />
        </div>
    );
};
