import { useTheme } from '@mui/material';
import { CurrentTheme } from '@chirp/ui/styles/constants';
import { FC } from 'react';

export const ThirdPartyGatewayIcon: FC = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7815_23817)">
            <g filter="url(#filter0_i_7815_23817)">
                <rect x="18.4189" y="18.4189" width="35.0306" height="35.0306" fill="url(#paint0_linear_7815_23817)" />
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
                d="M36.7099 37.0848H34.7947V34.4666C35.0354 34.5397 35.3299 34.5763 35.6782 34.5763C36.2284 34.5763 36.6583 34.4516 36.9679 34.2023C37.2774 33.9529 37.4322 33.6111 37.4322 33.1769C37.4322 32.7642 37.3011 32.4439 37.0388 32.2161C36.7766 31.9839 36.4197 31.8679 35.9683 31.8679C35.5556 31.8679 35.2203 31.9646 34.9624 32.1581C34.7044 32.3515 34.5518 32.6202 34.5045 32.9641H32.5312C32.5871 32.0828 32.9268 31.3928 33.5501 30.8941C34.1778 30.3911 35.0011 30.1396 36.0199 30.1396C37.0947 30.1396 37.9373 30.4126 38.5478 30.9586C39.1625 31.5046 39.4699 32.244 39.4699 33.1769C39.4699 33.9379 39.2141 34.5806 38.7025 35.1051C38.1996 35.6338 37.5353 35.9498 36.7099 36.053V37.0848ZM36.7744 39.8835H34.7109V37.9295H36.7744V39.8835Z"
                fill="url(#paint1_linear_7815_23817)"
            />
        </g>
        <path
            d="M24.3232 14.6507C24.3232 14.1883 24.6981 13.8135 25.1605 13.8135H28.1568C28.6192 13.8135 28.994 14.1883 28.994 14.6507V18.4842H24.3232V14.6507Z"
            fill="url(#paint2_linear_7815_23817)"
        />
        <path
            d="M43.0059 14.6507C43.0059 14.1883 43.3807 13.8135 43.8431 13.8135H46.8394C47.3018 13.8135 47.6766 14.1883 47.6766 14.6507V18.4842H43.0059V14.6507Z"
            fill="url(#paint3_linear_7815_23817)"
        />
        <path
            d="M33.4883 51.4883H38.159V53.8237C38.159 55.1134 37.1134 56.159 35.8237 56.159C34.5339 56.159 33.4883 55.1134 33.4883 53.8237V51.4883Z"
            fill="url(#paint4_linear_7815_23817)"
        />
        <defs>
            <filter
                id="filter0_i_7815_23817"
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
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7815_23817" />
            </filter>
            <linearGradient
                id="paint0_linear_7815_23817"
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
                id="paint1_linear_7815_23817"
                x1="35.7123"
                y1="19.8657"
                x2="48.8073"
                y2="41.3431"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="white" stopOpacity="0.76" />
                <stop offset="1" stopColor="white" stopOpacity="0.27" />
            </linearGradient>
            <linearGradient
                id="paint2_linear_7815_23817"
                x1="28.994"
                y1="16.83"
                x2="24.3232"
                y2="16.83"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#8E8E8E" />
                <stop offset="0.458333" stopColor="white" />
                <stop offset="0.723958" stopColor="#919191" />
                <stop offset="1" stopColor="#E7E7E7" />
            </linearGradient>
            <linearGradient
                id="paint3_linear_7815_23817"
                x1="47.6766"
                y1="16.83"
                x2="43.0059"
                y2="16.83"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#8E8E8E" />
                <stop offset="0.458333" stopColor="white" />
                <stop offset="0.723958" stopColor="#919191" />
                <stop offset="1" stopColor="#E7E7E7" />
            </linearGradient>
            <linearGradient
                id="paint4_linear_7815_23817"
                x1="34.4841"
                y1="51.4795"
                x2="36.9957"
                y2="56.1678"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#494949" />
                <stop offset="1" stopColor="#292929" />
            </linearGradient>
            <clipPath id="clip0_7815_23817">
                <rect x="18.4189" y="18.4189" width="35.1628" height="33.0698" rx="3.50306" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const ThirdPartyGatewayIconBig: FC = () => {
    const { palette } = useTheme();

    return (
        <svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
                width="172"
                height="172"
                rx="12"
                fill={palette.mode === CurrentTheme.Dark ? palette.text.secondary : palette.text.primary}
            />
            <g filter="url(#filter0_d_7850_25892)">
                <g clipPath="url(#clip0_7850_25892)">
                    <g filter="url(#filter1_i_7850_25892)">
                        <rect x="44" y="44" width="83.6842" height="83.6842" fill="url(#paint0_linear_7850_25892)" />
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
                        d="M87.6943 88.5911H83.119V82.3367C83.6942 82.5113 84.3977 82.5986 85.2295 82.5986C86.5441 82.5986 87.5711 82.3008 88.3105 81.7051C89.05 81.1095 89.4197 80.293 89.4197 79.2557C89.4197 78.2698 89.1064 77.5047 88.48 76.9604C87.8535 76.4058 87.0011 76.1285 85.9227 76.1285C84.9368 76.1285 84.1358 76.3596 83.5196 76.8217C82.9034 77.2839 82.5388 77.9258 82.4258 78.7474H77.7119C77.8454 76.642 78.6568 74.9937 80.1459 73.8024C81.6453 72.6008 83.612 72 86.046 72C88.6135 72 90.6264 72.6521 92.0847 73.9564C93.5533 75.2607 94.2876 77.0271 94.2876 79.2557C94.2876 81.0735 93.6766 82.6089 92.4544 83.8618C91.2529 85.125 89.6661 85.8798 87.6943 86.1263V88.5911ZM87.8484 95.2769H82.9188V90.6092H87.8484V95.2769Z"
                        fill="url(#paint1_linear_7850_25892)"
                    />
                </g>
            </g>
            <path
                d="M58.1055 35C58.1055 33.8954 59.0009 33 60.1055 33H67.2634C68.3679 33 69.2634 33.8954 69.2634 35V44.1579H58.1055V35Z"
                fill="url(#paint2_linear_7850_25892)"
            />
            <path
                d="M102.737 35C102.737 33.8954 103.633 33 104.737 33H111.895C113 33 113.895 33.8954 113.895 35V44.1579H102.737V35Z"
                fill="url(#paint3_linear_7850_25892)"
            />
            <path
                d="M80 123H91.1579V128.579C91.1579 131.66 88.6601 134.158 85.5789 134.158C82.4978 134.158 80 131.66 80 128.579V123Z"
                fill="url(#paint4_linear_7850_25892)"
            />
            <defs>
                <filter
                    id="filter0_d_7850_25892"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7850_25892" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7850_25892" result="shape" />
                </filter>
                <filter
                    id="filter1_i_7850_25892"
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
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7850_25892" />
                </filter>
                <linearGradient
                    id="paint0_linear_7850_25892"
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
                    id="paint1_linear_7850_25892"
                    x1="85.3111"
                    y1="47.4566"
                    x2="116.594"
                    y2="98.7638"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_7850_25892"
                    x1="69.2634"
                    y1="40.2061"
                    x2="58.1055"
                    y2="40.2061"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8E8E8E" />
                    <stop offset="0.458333" stopColor="white" />
                    <stop offset="0.723958" stopColor="#919191" />
                    <stop offset="1" stopColor="#E7E7E7" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_7850_25892"
                    x1="113.895"
                    y1="40.2061"
                    x2="102.737"
                    y2="40.2061"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8E8E8E" />
                    <stop offset="0.458333" stopColor="white" />
                    <stop offset="0.723958" stopColor="#919191" />
                    <stop offset="1" stopColor="#E7E7E7" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_7850_25892"
                    x1="82.3789"
                    y1="122.979"
                    x2="88.3789"
                    y2="134.179"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#494949" />
                    <stop offset="1" stopColor="#292929" />
                </linearGradient>
                <clipPath id="clip0_7850_25892">
                    <rect x="44" y="44" width="84" height="79" rx="8.36842" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
