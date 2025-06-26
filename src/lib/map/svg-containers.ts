import { Palette } from '@mui/material';
import {
    mapMarkerDiffusion,
    mapMarkerFirstEndLayerSvgString,
    mapMarkerFirstStartLayerSvgString,
    mapMarkerSecondEndLayerSvgString,
    mapMarkerSecondStartLayerSvgString,
} from './mp-marker-string';

export const mapMarkerStartSvgContainer = (palette: Palette, isTrip?: boolean) =>
    isTrip
        ? `<svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.05" cx="40.2658" cy="40.2658" r="40.2658" fill=${palette.mode === 'light' ? '#FFA824' : '#FFD262'} />
    <g filter="url(#filter0_f_17128_234995)">
        <circle cx="39.2871" cy="40.2891" r="19" fill=${palette.mode === 'light' ? '#FFA824' : '#FFD262'} />
    </g>
    <circle cx="39" cy="40" r="22" fill=${palette.mode === 'light' ? '#FFA824' : '#FFD262'} />
    <circle cx="39" cy="40" r="21" stroke="white" stroke-opacity="0.6" stroke-width="2" />
    <path
        d="M33.3636 50H31L37.8364 30H40.1636L47 50H44.6364L39.0727 33.1641H38.9273L33.3636 50ZM34.2364 42.1875H43.7636V44.3359H34.2364V42.1875Z"
        fill="white" />
    <defs>
        <filter id="filter0_f_17128_234995" x="4.28711" y="5.28906" width="70" height="70" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_17128_234995" />
        </filter>
    </defs>
</svg>`
        : `<div class="svg-container">
                                            ${mapMarkerFirstStartLayerSvgString(palette)}
                                            ${mapMarkerSecondStartLayerSvgString(palette)}
                                        </div>`;

export const mapMarkerEndSvgContainer = (palette: Palette, isTrip?: boolean) =>
    isTrip
        ? `<svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.05" cx="40.2658" cy="40.2658" r="40.2658" fill=${palette.base.color9} />
            <g filter="url(#filter0_f_17128_235026)">
            <circle cx="39.2871" cy="40.2891" r="19" fill=${palette.base.color9} />
            </g>
            <circle cx="39" cy="40" r="22" fill=${palette.base.color9} />
            <circle cx="39" cy="40" r="21" stroke="white" stroke-opacity="0.6" stroke-width="2"/>
            <path d="M33 50V30H39.5365C40.839 30 41.9132 30.2409 42.7591 30.7227C43.6051 31.1979 44.235 31.8392 44.6489 32.6465C45.0627 33.4473 45.2697 34.3359 45.2697 35.3125C45.2697 36.1719 45.1266 36.8815 44.8406 37.4414C44.5606 38.0013 44.1894 38.444 43.7268 38.7695C43.2704 39.0951 42.7743 39.3359 42.2388 39.4922V39.6875C42.8109 39.7266 43.386 39.9414 43.9642 40.332C44.5424 40.7227 45.0262 41.2826 45.4157 42.0117C45.8052 42.7409 46 43.6328 46 44.6875C46 45.6901 45.787 46.5918 45.361 47.3926C44.9349 48.1934 44.2624 48.8281 43.3434 49.2969C42.4244 49.7656 41.2285 50 39.7556 50H33ZM35.264 47.8516H39.7556C41.2346 47.8516 42.2844 47.5456 42.9052 46.9336C43.5321 46.3151 43.8455 45.5664 43.8455 44.6875C43.8455 44.0104 43.6842 43.3854 43.3617 42.8125C43.0391 42.2331 42.5796 41.7708 41.9831 41.4258C41.3867 41.0742 40.6807 40.8984 39.8652 40.8984H35.264V47.8516ZM35.264 38.7891H39.4635C40.1451 38.7891 40.7598 38.6458 41.3076 38.3594C41.8614 38.0729 42.2996 37.6693 42.6222 37.1484C42.9508 36.6276 43.1152 36.0156 43.1152 35.3125C43.1152 34.4336 42.8291 33.6882 42.257 33.0762C41.6849 32.4577 40.7781 32.1484 39.5365 32.1484H35.264V38.7891Z" fill="white"/>
            <defs>
            <filter id="filter0_f_17128_235026" x="4.28711" y="5.28906" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_17128_235026"/>
            </filter>
            </defs>
            </svg>
            `
        : `<div class="svg-container">
                                            ${mapMarkerFirstEndLayerSvgString(palette)}
                                            ${mapMarkerSecondEndLayerSvgString(palette)}
                                        </div>`;

export const specificMarkerIconWithDiffusion = (theme: Palette, specificMarkerIcon: (theme: Palette) => string) =>
    `<div style="position: relative; width: 154px; height: 154px;">
        <div style="position: absolute; top: 0; left: 0;">
            ${mapMarkerDiffusion(theme)}
        </div>
        <div style="position: absolute; top: 60px; left: 60px;">
            ${specificMarkerIcon(theme)}
        </div>
    </div>
    `;
