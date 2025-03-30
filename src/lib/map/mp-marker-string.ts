import { Palette } from '@mui/material';

export const mapMarkerSvgString = (theme: Palette) =>
    `<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="76.9788" cy="76.9788" r="76.9788" fill="${theme.base.color6}"/>
        <circle opacity="0.05" cx="76.9787" cy="76.9787" r="40.2658" fill="${theme.base.color6}"/>
        <g class="marker-interactive">
            <g filter="url(#filter0_f_6_3784)">
                <circle cx="76.8285" cy="76.8295" r="19.391" fill="${theme.base.color6}"/>
            </g>
            <circle cx="76.3866" cy="76.3868" r="11.5468" fill="${theme}" stroke="${theme.background.background1}" stroke-width="0.592144"/>
            <path d="M79.6839 74.605C79.5225 72.9449 78.1789 71.6499 76.5459 71.6499C75.6775 71.6499 74.9345 71.9708 74.3204 72.6089C73.7063 73.247 72.2085 74.9419 71.6494 80.5283L78.527 80.5321C78.6505 79.3002 78.8607 78.2311 79.1131 77.3135L82.308 76.507L79.6839 74.605ZM76.7082 76.1446C76.0752 76.1446 75.5621 75.6091 75.5621 74.9485C75.5621 74.2878 76.0752 73.7523 76.7082 73.7523C77.3412 73.7523 77.8543 74.2878 77.8543 74.9485C77.8534 75.6091 77.3403 76.1446 76.7082 76.1446Z" fill="${theme.background.background1}"/>
            <defs>
            <filter id="filter0_f_6_3784" x="46.3569" y="46.3579" width="60.9431" height="60.9429" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5.54028" result="effect1_foregroundBlur_6_3784"/>
            </filter>
            </defs>
        </g>
    </svg>
`;

export const mapMarkerArrowSvgString = (theme: Palette) =>
    `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8243 14.632L1.42518 1.42334L17.6316 1.8293L11.1376 6.58752L10.8243 14.632Z" fill="${theme.base.color6}" stroke="${theme.base.color6}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

export const mapMarkerFirstStartLayerSvgString = (theme: Palette) =>
    `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_6_3771)">
        <circle cx="18.0389" cy="18.0331" r="6.74204" fill="${theme.base.color9}"/>
    </g>
    <defs>
        <filter id="filter0_f_6_3771" x="0.216312" y="0.210453" width="35.6452" height="35.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5.54028" result="effect1_foregroundBlur_6_3771"/>
        </filter>
    </defs>
    </svg>
`;

export const mapMarkerSecondStartLayerSvgString = (theme: Palette) =>
    `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="14" cy="13.9941" r="14" fill="${theme.base.color9}"/>
    </svg>
`;

export const mapMarkerFirstEndLayerSvgString = (theme: Palette) =>
    `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_6_3767)">
            <circle cx="18.0389" cy="18.0331" r="6.74204" fill="${theme.base.color7}"/>
        </g>
        <defs>
            <filter id="filter0_f_6_3767" x="0.216312" y="0.210453" width="35.6452" height="35.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5.54028" result="effect1_foregroundBlur_6_3767"/>
            </filter>
        </defs>
    </svg>
`;

export const mapMarkerSecondEndLayerSvgString = (theme: Palette) =>
    `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="14" cy="13.9941" r="14" fill="${theme.base.color7}"/>
    </svg>
`;
