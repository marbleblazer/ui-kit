import { Palette } from '@mui/material';
import {
    mapMarkerDiffusion,
    mapMarkerFirstEndLayerSvgString,
    mapMarkerFirstStartLayerSvgString,
    mapMarkerSecondEndLayerSvgString,
    mapMarkerSecondStartLayerSvgString,
} from './mp-marker-string';

export const mapMarkerStartSvgContainer = (palette: Palette, color?: string) =>
    color
        ? `<svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.05" cx="40.2658" cy="40.2658" r="40.2658" fill=${color} />
    <g filter="url(#filter0_f_17128_234995)">
        <circle cx="39.2871" cy="40.2891" r="19" fill=${color} />
    </g>
    <circle cx="39" cy="40" r="22" fill=${color} />
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

export const mapMarkerWarehouseSvgContainer = (palette: Palette) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="49" fill="none">
    <g filter="url(#a)">
        <mask id="b" width="36" height="41" x="4.359" y=".617" fill="#000" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M4.359.617h36v41h-36z" />
            <path
                d="M22.36 2.617c8.836 0 16 6.965 16 15.556 0 7.418-5.342 13.623-12.49 15.179l-3.51 4.267-3.512-4.267C11.7 31.795 6.359 25.59 6.359 18.172c0-8.59 7.164-15.555 16-15.555Z" />
        </mask>
        <path fill="${palette.base.colorNewYellow}"
            d="M22.36 2.617c8.836 0 16 6.965 16 15.556 0 7.418-5.342 13.623-12.49 15.179l-3.51 4.267-3.512-4.267C11.7 31.795 6.359 25.59 6.359 18.172c0-8.59 7.164-15.555 16-15.555Z" />
        <path fill="#fff"
            d="M38.36 18.173h2-2ZM25.87 33.352l-.425-1.955-.678.148-.441.536 1.544 1.27Zm-3.51 4.267-1.545 1.271 1.545 1.877 1.544-1.877-1.545-1.27Zm-3.512-4.267 1.544-1.271-.44-.536-.679-.148-.425 1.955ZM6.359 18.172h-2 2Zm16-15.555v2c7.786 0 14 6.122 14 13.556h4c0-9.749-8.112-17.556-18-17.556v2Zm16 15.556h-2c0 6.42-4.629 11.856-10.914 13.224l.425 1.955.425 1.954c8.01-1.744 14.064-8.717 14.064-17.133h-2ZM25.87 33.352l-1.544-1.271-3.511 4.267 1.544 1.271 1.545 1.27 3.51-4.267-1.544-1.27Zm-3.51 4.267 1.544-1.27-3.512-4.268-1.544 1.27-1.545 1.271 3.512 4.268 1.544-1.27Zm-3.512-4.267.425-1.955C12.988 30.03 8.36 24.593 8.36 18.173h-4c0 8.416 6.054 15.389 14.063 17.133l.426-1.954ZM6.359 18.172h2c0-7.433 6.215-13.555 14-13.555v-4c-9.887 0-18 7.807-18 17.556h2Z"
            mask="url(#b)" />
        <g fill="#fff" clip-path="url(#c)">
            <path
                d="M27.984 26.619H22.36a.625.625 0 0 1-.625-.625V21.41c0-.345.28-.625.625-.625h5.625c.345 0 .625.28.625.625v4.584c0 .345-.28.625-.625.625Zm-5-1.25h4.375v-3.334h-4.375v3.334Z" />
            <path
                d="M25.069 22.035h-5.417a.625.625 0 0 1-.625-.625v-5c0-.345.28-.625.625-.625h5.417c.345 0 .625.28.625.625v5c0 .345-.28.625-.625.625Zm-4.792-1.25h4.167v-3.75h-4.167v3.75Z" />
            <path
                d="M22.36 26.619h-5.626a.625.625 0 0 1-.625-.625V21.41c0-.345.28-.625.625-.625h5.625c.345 0 .625.28.625.625v4.584c0 .345-.28.625-.625.625Zm-5-1.25h4.374v-3.334H17.36v3.334ZM22.36 18.285a.625.625 0 0 1-.626-.625v-1.25a.625.625 0 0 1 1.25 0v1.25c0 .345-.28.625-.625.625Z" />
            <path
                d="M19.652 23.285a.625.625 0 0 1-.625-.625v-1.25a.625.625 0 0 1 1.25 0v1.25c0 .345-.28.625-.625.625ZM25.066 23.285a.625.625 0 0 1-.625-.625v-1.25a.625.625 0 0 1 1.25 0v1.25c0 .345-.28.625-.625.625Z" />
            <path
                d="M30.901 26.618H13.818a1.46 1.46 0 0 1-1.459-1.458V13.7c0-.206.102-.398.271-.515l9.375-6.458a.624.624 0 0 1 .71 0l9.374 6.458c.169.117.27.31.27.515V25.16a1.46 1.46 0 0 1-1.458 1.458ZM13.609 14.03v11.13c0 .114.094.208.209.208H30.9a.208.208 0 0 0 .208-.208V14.03l-8.75-6.028-8.75 6.027Z" />
        </g>
    </g>
    <defs>
        <clipPath id="c">
            <path fill="#fff" d="M12.36 6.617h20v20h-20z" />
        </clipPath>
        <filter id="a" width="44" height="48.148" x=".359" y=".617" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_20933_62031" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_20933_62031" result="shape" />
        </filter>
    </defs>
</svg>
`;

export const mapMarkerEndSvgContainer = (palette: Palette, color?: string) =>
    color
        ? `<svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.05" cx="40.2658" cy="40.2658" r="40.2658" fill=${color} />
            <g filter="url(#filter0_f_17128_235026)">
            <circle cx="39.2871" cy="40.2891" r="19" fill=${color} />
            </g>
            <circle cx="39" cy="40" r="22" fill=${color} />
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
