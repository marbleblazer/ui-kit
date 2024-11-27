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
                ? (lightTheme?.palette as { [key: string]: any })
                : (darkTheme?.palette as { [key: string]: any });
        return (
            <Stack gap={4} direction="row">
                {palette &&
                    Object.keys(palette).map((key: string) => (
                        <Stack gap={4}>
                            <Typography>{key}</Typography>
                            {Object.keys(palette[key]).map((color) => (
                                <Stack direction="row" gap={1}>
                                    <Typography>{color}</Typography>
                                    <ClickableColorCell color={palette[key][color]} />
                                </Stack>
                            ))}
                        </Stack>
                    ))}
            </Stack>
        );
    },
};
