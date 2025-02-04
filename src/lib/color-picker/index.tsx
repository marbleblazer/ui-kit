import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Box, Popover, Stack } from '@mui/material';
import { hex2rgba } from '@chirp/ui/helpers/colors';
import { CloseIcon } from '@chirp/ui/assets/icons';

import { ClickableColorCell } from './clickable-color-cell/clickable-color-cell';
import { HEX_REGEXP, INITIAL_PREVIOUS_COLORS } from './constants';
import { IconButton } from '../icon-button';
import { Typography } from '../typogrpahy';
import * as S from './style';
import { TextField } from '../text-field';
import { useTranslation } from 'react-i18next';

interface IColorPickerProps {
    color: string;
    onChange: (value: string) => void;
    label?: ReactNode;
    previousColors?: string[];
    isError?: boolean;
    setError?: (value: boolean) => void;
}

export const ColorPicker: FC<IColorPickerProps> = ({
    previousColors = INITIAL_PREVIOUS_COLORS,
    color,
    onChange,
    label,
    setError,
    isError,
}) => {
    const { t } = useTranslation('uiKit');

    const controlRef = useRef(null);
    const [popoverState, setPopoverState] = useState(false);

    const [alphaState, setAlphaState] = useState<number | string>(100);

    const handleChangeAlpha = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isValid = !isNaN(Number(value));

        if (!isValid) return;

        if (Number(value) > 100) {
            setAlphaState(100);
        } else setAlphaState(value ? Number(value) : '');

        const hexedAlpha = (((Number(value) / 100) * 255) | (1 << 8)).toString(16).slice(1);
        if (Number(value) === 0) return;

        if (color.length === 7) {
            onChange(`${color}${hexedAlpha}`);
        } else {
            const curentValue = color.slice(0, 7);
            onChange(`${curentValue}${hexedAlpha}`);
        }
    };

    useEffect(() => {
        if (!setError) return;

        const isValid = HEX_REGEXP.test(color);

        if (!isValid) setError(true);
        else setError(false);
    }, [color]);

    const handleChange = (value: string) => {
        onChange(value);

        const rgbaColor = hex2rgba(value);

        setAlphaState(Math.round(rgbaColor[3] * 100));
    };
    return (
        <>
            <S.Control direction="row" gap={0.5} ref={controlRef} alignItems="flex-end">
                <TextField
                    value={color}
                    onChange={(e) => handleChange(e.target.value)}
                    label={label}
                    inputProps={{
                        style: {
                            textTransform: 'uppercase',
                        },
                    }}
                    error={isError}
                    sx={{ border: 'none' }}
                />
                <ClickableColorCell color={color} size="large" onClick={() => setPopoverState(true)} />
            </S.Control>
            <Popover
                open={popoverState}
                anchorEl={controlRef.current}
                onClose={() => setPopoverState(false)}
                sx={{
                    transform: 'translateX(44px)',
                    '.MuiPaper-root': {
                        borderRadius: '10px',
                    },
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <S.Wrapper>
                    <Box p={3}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography fontWeight={500}>{t('colorPicker.Color')}</Typography>
                            <IconButton size="small" onClick={() => setPopoverState(false)} variant="gray">
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box position="relative">
                        <HexAlphaColorPicker color={color} onChange={handleChange} />
                    </Box>

                    <Stack gap={4}>
                        <Box p={4} pb={0}>
                            <Stack direction="row" gap={2}>
                                <S.StyledTextField width="66px" borderRadius={2} justifyContent="center">
                                    Hex
                                </S.StyledTextField>
                                <Stack direction="row" gap="1px" width="194px" borderRadius={2} overflow="hidden">
                                    <S.StyledTextField width="136px">
                                        <input value={color} onChange={(e) => onChange(e.target.value)} />
                                    </S.StyledTextField>
                                    <S.StyledTextField width="58px">
                                        <input
                                            value={alphaState}
                                            onChange={handleChangeAlpha}
                                            style={{ width: '24px' }}
                                        />
                                        %
                                    </S.StyledTextField>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box pl={4} pr="13px" pb={4}>
                            <Stack direction="row" gap={2} flexWrap="wrap">
                                {previousColors.slice(0, 9).map((color, idx) => (
                                    <ClickableColorCell
                                        key={`${color}-${idx}`}
                                        color={color}
                                        size="small"
                                        onClick={() => handleChange(color)}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </S.Wrapper>
            </Popover>
        </>
    );
};
