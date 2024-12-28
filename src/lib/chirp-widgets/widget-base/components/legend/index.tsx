import { Stack, Typography, useTheme } from '@mui/material';
import * as React from 'react';

interface LegendProps {
    color: string;
}

export const Legend: React.FC<LegendProps> = ({ color }) => {
    const { palette } = useTheme();
    const minColor = palette.additionalColors.blue;
    const maxColor = palette.alerts.alert;
    const avgColor = palette.additionalColors.air;

    return (
        <Stack alignItems="end" gap="4px" width="60px" color="lightShades.ternary">
            <Stack alignItems="center" direction="row" spacing="6px">
                <svg width="9" height="1" viewBox="0 0 9 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="9" y2="0.5" stroke={color} />
                </svg>
                <Typography fontSize="12px" lineHeight="16px">
                    Current
                </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing="6px">
                <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_15676_57625)">
                        <line
                            x1="4"
                            y1="0.75"
                            x2="13"
                            y2="0.75"
                            stroke={avgColor}
                            strokeWidth="0.5"
                            strokeDasharray="2 2"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_15676_57625"
                            x="0"
                            y="0.5"
                            width="17"
                            height="8.5"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15676_57625" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_15676_57625"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>

                <Typography fontSize="12px" lineHeight="16px">
                    Average
                </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing="6px">
                <svg width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9" height="4" fill="#50E0A4" fillOpacity="0.05" />
                    <rect
                        x="0.25"
                        y="0.25"
                        width="8.5"
                        height="3.5"
                        stroke="#50E093"
                        strokeOpacity="0.15"
                        strokeWidth="0.5"
                    />
                </svg>

                <Typography fontSize="12px" lineHeight="16px">
                    Normal
                </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing="6px">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="8" x2="12" y2="8" stroke={maxColor} />
                    <g filter="url(#filter0_d_15676_57631)">
                        <circle cx="7.5" cy="8" r="1.5" fill={maxColor} />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_15676_57631"
                            x="0"
                            y="0.5"
                            width="15"
                            height="15"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15676_57631" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_15676_57631"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>

                <Typography fontSize="12px" lineHeight="16px">
                    Max
                </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing="6px">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="8" x2="12" y2="8" stroke={minColor} />
                    <g filter="url(#filter0_d_15676_57637)">
                        <circle cx="7.5" cy="8" r="1.5" fill={minColor} />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_15676_57637"
                            x="0"
                            y="0.5"
                            width="15"
                            height="15"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.370833 0 0 0 0 0.458639 0 0 0 0 1 0 0 0 1 0"
                            />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15676_57637" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_15676_57637"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>

                <Typography fontSize="12px" lineHeight="16px">
                    Min
                </Typography>
            </Stack>
        </Stack>
    );
};
