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

export const mapMarkerFirstStartLayerSvgString = (palette: Palette) =>
    `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_6_3771)">
        <circle cx="18.0389" cy="18.0331" r="6.74204" fill="${palette.base.color9}"/>
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

export const mapMarkerSecondStartLayerSvgString = (palette: Palette) =>
    `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="14" cy="13.9941" r="14" fill="${palette.base.color9}"/>
    </svg>
`;

export const mapMarkerFirstEndLayerSvgString = (palette: Palette) =>
    `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_6_3767)">
            <circle cx="18.0389" cy="18.0331" r="6.74204" fill="${palette.base.color7}"/>
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

export const mapMarkerWarehouseLayerSvgString = (palette: Palette) =>
    `<svg xmlns="http://www.w3.org/2000/svg" style="position: relative; top: -12px; left: 0;" width="45" height="49" fill="none">
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

export const mapMarkerSecondEndLayerSvgString = (palette: Palette) =>
    `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="14" cy="13.9941" r="14" fill="${palette.base.color7}"/>
    </svg>
`;

export const mapMarkerDiffusion = (palette: Palette) =>
    `<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.08" cx="76.9788" cy="76.9788" r="76.9788" fill="${palette.base.color6}"/>
        <g filter="url(#filter0_f_16195_206183)">
            <circle cx="77" cy="77" r="24" fill="${palette.base.color6}"/>
        </g>
        <defs>
            <filter id="filter0_f_16195_206183" x="27" y="27" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="13" result="effect1_foregroundBlur_16195_206183"/>
            </filter>
        </defs>
    </svg>
    `;

export const mapMarkerNumberedSvgString = (backgroundColor: string, text: string) =>
    `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_17440_208960)">
            <mask id="path-1-outside-1_17440_208960" maskUnits="userSpaceOnUse" x="4.23438" y="0.234375" width="36" height="41" fill="black">
            <rect fill="white" x="4.23438" y="0.234375" width="36" height="41"/>
            <path d="M22.2344 2.23438C31.0709 2.23438 38.2344 9.19894 38.2344 17.79C38.2343 25.2084 32.8928 31.4129 25.7451 32.9688L22.2344 37.2363L18.7227 32.9688C11.5755 31.4126 6.23443 25.2081 6.23438 17.79C6.23438 9.19894 13.3978 2.23438 22.2344 2.23438Z"/>
            </mask>
            <path d="M22.2344 2.23438C31.0709 2.23438 38.2344 9.19894 38.2344 17.79C38.2343 25.2084 32.8928 31.4129 25.7451 32.9688L22.2344 37.2363L18.7227 32.9688C11.5755 31.4126 6.23443 25.2081 6.23438 17.79C6.23438 9.19894 13.3978 2.23438 22.2344 2.23438Z" fill="${backgroundColor}"/>
            <path d="M38.2344 17.79L40.2344 17.7901V17.79H38.2344ZM25.7451 32.9688L25.3197 31.0145L24.6415 31.1621L24.2006 31.6981L25.7451 32.9688ZM22.2344 37.2363L20.69 38.5071L22.2346 40.3842L23.7789 38.5069L22.2344 37.2363ZM18.7227 32.9688L20.267 31.6979L19.8261 31.1622L19.1482 31.0145L18.7227 32.9688ZM6.23438 17.79H4.23438V17.7901L6.23438 17.79ZM22.2344 2.23438V4.23438C30.0198 4.23438 36.2344 10.3562 36.2344 17.79H38.2344H40.2344C40.2344 8.04165 32.122 0.234375 22.2344 0.234375V2.23438ZM38.2344 17.79L36.2344 17.79C36.2343 24.2108 31.6051 29.6464 25.3197 31.0145L25.7451 32.9688L26.1705 34.923C34.1804 33.1795 40.2343 26.2061 40.2344 17.7901L38.2344 17.79ZM25.7451 32.9688L24.2006 31.6981L20.6899 35.9657L22.2344 37.2363L23.7789 38.5069L27.2896 34.2394L25.7451 32.9688ZM22.2344 37.2363L23.7787 35.9655L20.267 1.6979L18.7227 32.9688L17.1783 34.2396L20.69 38.5071L22.2344 37.2363ZM18.7227 32.9688L19.1482 31.0145C12.8632 29.6461 8.23442 24.2106 8.23438 17.79L6.23438 17.79L4.23438 17.7901C4.23443 26.2057 10.2877 33.179 18.2972 34.923L18.7227 32.9688ZM6.23438 17.79H8.23438C8.23438 10.3562 14.4489 4.23438 22.2344 4.23438V2.23438V0.234375C12.3467 0.234375 4.23438 8.04165 4.23438 17.79H6.23438Z" fill="white" mask="url(#path-1-outside-1_17440_208960)"/>
        </g>
        <defs>
            <filter id="filter0_d_17440_208960" x="0.234375" y="0.234375" width="44" height="48.1484" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17440_208960"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17440_208960" result="shape"/>
            </filter>
        </defs>
        <text
                x="22.2344"
                y="21"
                font-size="16"
                text-anchor="middle"
                alignment-baseline="middle"
                fill="white"
                style="user-select: none;"
            >
            ${text}
        </text>
    </svg>
    `;

export const mapMarkerTruckSvgString = (palette: Palette) =>
    `<svg width="58" height="65" viewBox="0 0 58 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_16876_157610)">
        <mask id="path-1-outside-1_16876_157610" maskUnits="userSpaceOnUse" x="4" y="0" width="50" height="57" fill="black">
        <rect fill="white" x="4" width="50" height="57"/>
        <path d="M29 2C41.7025 2 52 12.1485 52 24.667C51.9998 35.4768 44.3209 44.5174 34.0459 46.7842L29 53.001L23.9531 46.7842C13.6786 44.517 6.00015 35.4765 6 24.667C6 12.1485 16.2975 2 29 2Z"/>
        </mask>
        <path d="M29 2C41.7025 2 52 12.1485 52 24.667C51.9998 35.4768 44.3209 44.5174 34.0459 46.7842L29 53.001L23.9531 46.7842C13.6786 44.517 6.00015 35.4765 6 24.667C6 12.1485 16.2975 2 29 2Z" fill="${palette.text.text2}"/>
        <path d="M52 24.667L54 24.667V24.667H52ZM34.0459 46.7842L33.615 44.8311L32.9331 44.9816L32.493 45.5238L34.0459 46.7842ZM29 53.001L27.4473 54.2615L29.0002 56.1744L30.5529 54.2614L29 53.001ZM23.9531 46.7842L25.5059 45.5236L25.0658 44.9816L24.3841 44.8312L23.9531 46.7842ZM6 24.667H4V24.667L6 24.667ZM29 2V4C40.6256 4 50 13.2805 50 24.667H52H54C54 11.0166 42.7795 0 29 0V2ZM52 24.667L50 24.667C49.9999 34.4989 43.0125 42.7579 33.615 44.8311L34.0459 46.7842L34.4768 48.7372C45.6293 46.2768 53.9998 36.4547 54 24.667L52 24.667ZM34.0459 46.7842L32.493 45.5238L27.4471 51.7406L29 53.001L30.5529 54.2614L35.5988 48.0446L34.0459 46.7842ZM29 53.001L30.5527 51.7404L25.5059 45.5236L23.9531 46.7842L22.4004 48.0447L27.4473 54.2615L29 53.001ZM23.9531 46.7842L24.3841 44.8312C14.987 42.7576 8.00014 34.4987 8 24.667L6 24.667L4 24.667C4.00017 36.4544 12.3701 46.2764 23.5222 48.7372L23.9531 46.7842ZM6 24.667H8C8 13.2805 17.3744 4 29 4V2V0C15.2205 0 4 11.0166 4 24.667H6Z" fill="${palette.text.text8}" mask="url(#path-1-outside-1_16876_157610)"/>
        <path d="M21.1484 29.5H18.9C18.6791 29.5 18.5 29.3209 18.5 29.1V19.4C18.5 19.1791 18.6791 19 18.9 19H31.6C31.8209 19 32 19.1791 32 19.4V29.5H24.6875" stroke="${palette.base.color2}" stroke-width="1.3"/>
        <path d="M32 22H35.5843C35.6904 22 35.7921 22.0421 35.8672 22.1172L39.3828 25.6328C39.4579 25.7079 39.5 25.8096 39.5 25.9157V31.35C39.5 31.5709 39.3209 31.75 39.1 31.75H37.25" stroke="${palette.base.color2}" stroke-width="1.3"/>
        <path d="M32.75 31.75H25.25M20 29.5V31.35C20 31.5709 20.1791 31.75 20.4 31.75H20.75" stroke="${palette.base.color2}" stroke-width="1.3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M35 29.5C34.1716 29.5 33.5 30.1716 33.5 31C33.5 31.8284 34.1716 32.5 35 32.5C35.8284 32.5 36.5 31.8284 36.5 31C36.5 30.1716 35.8284 29.5 35 29.5ZM32 31C32 29.3431 33.3431 28 35 28C36.6569 28 38 29.3431 38 31C38 32.6569 36.6569 34 35 34C33.3431 34 32 32.6569 32 31Z" fill="${palette.base.color2}"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 29.5C22.1716 29.5 21.5 30.1716 21.5 31C21.5 31.8284 22.1716 32.5 23 32.5C23.8284 32.5 24.5 31.8284 24.5 31C24.5 30.1716 23.8284 29.5 23 29.5ZM20 31C20 29.3431 21.3431 28 23 28C24.6569 28 26 29.3431 26 31C26 32.6569 24.6569 34 23 34C21.3431 34 20 32.6569 20 31Z" fill="${palette.base.color2}"/>
        </g>
        <defs>
        <filter id="filter0_d_16876_157610" x="0" y="0" width="58" height="64.1758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16876_157610"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16876_157610" result="shape"/>
        </filter>
        </defs>
    </svg>
    `;
