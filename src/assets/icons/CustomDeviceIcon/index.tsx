import { useTheme } from '@mui/material';
import { CurrentTheme } from '@chirp/ui/styles/constants';
import { FC } from 'react';

export const CustomDeviceIcon: FC = () => {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7815_23837)">
                <g filter="url(#filter0_i_7815_23837)">
                    <rect
                        x="18.4189"
                        y="18.4189"
                        width="35.0306"
                        height="35.0306"
                        fill="url(#paint0_linear_7815_23837)"
                    />
                </g>
                <ellipse cx="54.6163" cy="35.934" rx="3.50306" ry="18.683" fill="black" fillOpacity="0.2" />
                <ellipse
                    cx="35.9339"
                    cy="53.4491"
                    rx="4.67075"
                    ry="17.5153"
                    transform="rotate(90 35.9339 53.4491)"
                    fill="black"
                    fillOpacity="0.15"
                />
                <ellipse cx="17.2511" cy="35.934" rx="3.50306" ry="18.683" fill="white" fillOpacity="0.05" />
                <ellipse
                    cx="35.9339"
                    cy="17.2508"
                    rx="4.67075"
                    ry="17.5153"
                    transform="rotate(90 35.9339 17.2508)"
                    fill="white"
                    fillOpacity="0.08"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.1302 31.9524C33.5553 31.9524 31.6164 33.4336 30.9948 34.144C30.8173 34.3468 30.5091 34.3674 30.3063 34.1899C30.1035 34.0125 30.0829 33.7042 30.2604 33.5014C31.0144 32.6397 33.2025 30.9766 36.1302 30.9766C39.0579 30.9766 41.246 32.6397 42 33.5014C42.1774 33.7042 42.1569 34.0125 41.9541 34.1899C41.7513 34.3674 41.443 34.3468 41.2656 34.144C40.644 33.4336 38.7051 31.9524 36.1302 31.9524Z"
                    fill="url(#paint1_linear_7815_23837)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.1303 34.3108C34.1652 34.3108 33.0305 35.2652 32.5409 35.7439C32.3483 35.9323 32.0394 35.9288 31.851 35.7362C31.6626 35.5435 31.666 35.2346 31.8587 35.0462C32.4411 34.4768 33.8076 33.335 36.1303 33.335C38.4529 33.335 39.8195 34.4768 40.4018 35.0462C40.5945 35.2346 40.598 35.5435 40.4096 35.7362C40.2212 35.9288 39.9123 35.9323 39.7196 35.7439C39.23 35.2652 38.0954 34.3108 36.1303 34.3108Z"
                    fill="url(#paint2_linear_7815_23837)"
                />
                <path
                    d="M36.1302 39.3265L33.3789 36.9682C33.7719 36.7062 35.1869 35.7891 36.1302 35.7891C37.0735 35.7891 38.4885 36.7062 38.8815 36.9682L36.1302 39.3265Z"
                    fill="url(#paint3_linear_7815_23837)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i_7815_23837"
                    x="18.4189"
                    y="18.4189"
                    width="35.0303"
                    height="35.0303"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="-1.75153" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0416667 0 0 0 0 0.0416667 0 0 0 0 0.0416667 0 0 0 0.4 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7815_23837" />
                </filter>
                <linearGradient
                    id="paint0_linear_7815_23837"
                    x1="25.8876"
                    y1="18.3527"
                    x2="44.7248"
                    y2="53.5155"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#494949" />
                    <stop offset="1" stopColor="#292929" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_7815_23837"
                    x1="35.7895"
                    y1="30.9808"
                    x2="36.0974"
                    y2="34.5876"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_7815_23837"
                    x1="35.879"
                    y1="33.3382"
                    x2="36.1227"
                    y2="36.0931"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_7815_23837"
                    x1="35.9737"
                    y1="35.7936"
                    x2="36.7054"
                    y2="39.5038"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <clipPath id="clip0_7815_23837">
                    <rect x="18.4189" y="18.4189" width="35.1628" height="33.0698" rx="3.50306" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const CustomDeviceIconBig = () => {
    const { palette } = useTheme();

    return (
        <svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
                width="172"
                height="172"
                rx="12"
                fill={palette.mode === CurrentTheme.Dark ? palette.darkShades.secondary : palette.darkShades.primary}
            />
            <g filter="url(#filter0_d_7815_25461)">
                <g clipPath="url(#clip0_7815_25461)">
                    <g filter="url(#filter1_i_7815_25461)">
                        <rect x="44" y="44" width="83.6842" height="83.6842" fill="url(#paint0_linear_7815_25461)" />
                    </g>
                    <ellipse cx="130.473" cy="85.8415" rx="8.36842" ry="44.6316" fill="black" fillOpacity="0.2" />
                    <ellipse
                        cx="85.8415"
                        cy="127.684"
                        rx="11.1579"
                        ry="41.8421"
                        transform="rotate(90 85.8415 127.684)"
                        fill="black"
                        fillOpacity="0.15"
                    />
                    <ellipse cx="41.2102" cy="85.8415" rx="8.36842" ry="44.6316" fill="white" fillOpacity="0.05" />
                    <ellipse
                        cx="85.8415"
                        cy="41.2106"
                        rx="11.1579"
                        ry="41.8421"
                        transform="rotate(90 85.8415 41.2106)"
                        fill="white"
                        fillOpacity="0.08"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M86.3107 76.3312C80.1596 76.3312 75.5278 79.8696 74.0428 81.5667C73.6189 82.0512 72.8825 82.1003 72.3981 81.6764C71.9136 81.2525 71.8645 80.5161 72.2884 80.0317C74.0897 77.973 79.3167 74 86.3107 74C93.3047 74 98.5317 77.973 100.333 80.0317C100.757 80.5161 100.708 81.2525 100.223 81.6764C99.7389 82.1003 99.0026 82.0512 98.5787 81.5667C97.0937 79.8696 92.4619 76.3312 86.3107 76.3312Z"
                        fill="url(#paint1_linear_7815_25461)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M86.3108 81.9649C81.6164 81.9649 78.9059 84.245 77.7363 85.3885C77.276 85.8386 76.5381 85.8303 76.088 85.37C75.638 84.9097 75.6463 84.1718 76.1066 83.7217C77.4978 82.3614 80.7622 79.6338 86.3108 79.6338C91.8594 79.6338 95.1239 82.3614 96.5151 83.7217C96.9753 84.1718 96.9836 84.9097 96.5336 85.37C96.0835 85.8303 95.3456 85.8386 94.8853 85.3885C93.7158 84.245 91.0052 81.9649 86.3108 81.9649Z"
                        fill="url(#paint2_linear_7815_25461)"
                    />
                    <path
                        d="M86.3118 93.9456L79.7393 88.3119C80.6782 87.686 84.0584 85.4951 86.3118 85.4951C88.5653 85.4951 91.9454 87.686 92.8844 88.3119L86.3118 93.9456Z"
                        fill="url(#paint3_linear_7815_25461)"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_7815_25461"
                    x="27.2632"
                    y="44"
                    width="117.474"
                    height="112.474"
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
                    <feOffset dy="16.7368" />
                    <feGaussianBlur stdDeviation="8.36842" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7815_25461" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7815_25461" result="shape" />
                </filter>
                <filter
                    id="filter1_i_7815_25461"
                    x="44"
                    y="44"
                    width="83.6846"
                    height="83.6846"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="-4.18421" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0416667 0 0 0 0 0.0416667 0 0 0 0 0.0416667 0 0 0 0.4 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7815_25461" />
                </filter>
                <linearGradient
                    id="paint0_linear_7815_25461"
                    x1="61.8418"
                    y1="43.8418"
                    x2="106.842"
                    y2="127.842"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#494949" />
                    <stop offset="1" stopColor="#292929" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_7815_25461"
                    x1="85.4968"
                    y1="74.0102"
                    x2="86.2324"
                    y2="82.6263"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_7815_25461"
                    x1="85.7105"
                    y1="79.6416"
                    x2="86.2927"
                    y2="86.2227"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_7815_25461"
                    x1="85.938"
                    y1="85.5059"
                    x2="87.686"
                    y2="94.3693"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <clipPath id="clip0_7815_25461">
                    <rect x="44" y="44" width="84" height="79" rx="8.36842" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
