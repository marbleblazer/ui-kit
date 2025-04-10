import type { Meta } from '@storybook/react';
import { lightTheme } from './theme/light';
import { Stack } from '@mui/material';
import { ClickableColorCell, Typography } from '../lib';
import { useTheme } from '@emotion/react';
import { darkTheme } from './theme/dark';

const meta: Meta = {
    title: 'UI/Colors',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Default = {
    render: () => {
        const theme = useTheme();
        const palette =
            theme.palette.mode === 'light'
                ? (lightTheme()?.palette as unknown as Record<string, Record<string, string>>)
                : (darkTheme()?.palette as unknown as Record<string, Record<string, string>>);

        return (
            <Stack gap={4} direction="row" sx={{ backgroundColor: 'white' }}>
                {palette &&
                    Object.keys(palette).map((key) => (
                        <Stack gap={4}>
                            <Typography>{key}</Typography>
                            {key in palette &&
                                Object.keys(palette[key]).map((color) => (
                                    <Stack direction="row" gap={1}>
                                        <Typography>{color}</Typography>
                                        <ClickableColorCell color={palette?.[key]?.[color]} />
                                    </Stack>
                                ))}
                        </Stack>
                    ))}
            </Stack>
        );
    },
};
