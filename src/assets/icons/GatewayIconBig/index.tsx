import { useTheme } from '@mui/material';
import { CurrentTheme } from '@chirp/ui/styles/constants';

export const GatewayIcon = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7815_22500)">
            <g filter="url(#filter0_i_7815_22500)">
                <rect x="18.4189" y="18.4189" width="35.0306" height="35.0306" fill="url(#paint0_linear_7815_22500)" />
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
        </g>
        <path
            d="M24.3232 14.6507C24.3232 14.1883 24.6981 13.8135 25.1605 13.8135H28.1568C28.6192 13.8135 28.994 14.1883 28.994 14.6507V18.4842H24.3232V14.6507Z"
            fill="url(#paint1_linear_7815_22500)"
        />
        <path
            d="M43.0059 14.6507C43.0059 14.1883 43.3807 13.8135 43.8431 13.8135H46.8394C47.3018 13.8135 47.6766 14.1883 47.6766 14.6507V18.4842H43.0059V14.6507Z"
            fill="url(#paint2_linear_7815_22500)"
        />
        <path
            d="M33.4883 51.4883H38.159V53.8237C38.159 55.1134 37.1134 56.159 35.8237 56.159C34.5339 56.159 33.4883 55.1134 33.4883 53.8237V51.4883Z"
            fill="url(#paint3_linear_7815_22500)"
        />
        <path
            d="M39.5876 33.3062C39.3865 31.5399 37.7127 30.1621 35.6782 30.1621C34.5964 30.1621 33.6707 30.5035 32.9056 31.1824C32.1406 31.8613 30.2746 33.6646 29.5781 39.6083L38.1463 39.6123C38.3002 38.3016 38.562 37.1641 38.8765 36.1879L42.8567 35.3298L39.5876 33.3062ZM35.8804 34.9443C35.0918 34.9443 34.4526 34.3745 34.4526 33.6716C34.4526 32.9687 35.0918 32.399 35.8804 32.399C36.669 32.399 37.3082 32.9687 37.3082 33.6716C37.3071 34.3745 36.6679 34.9443 35.8804 34.9443Z"
            fill="url(#paint4_linear_7815_22500)"
        />
        <defs>
            <filter
                id="filter0_i_7815_22500"
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
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7815_22500" />
            </filter>
            <linearGradient
                id="paint0_linear_7815_22500"
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
                id="paint1_linear_7815_22500"
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
                id="paint2_linear_7815_22500"
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
                id="paint3_linear_7815_22500"
                x1="34.4841"
                y1="51.4795"
                x2="36.9957"
                y2="56.1678"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#494949" />
                <stop offset="1" stopColor="#292929" />
            </linearGradient>
            <linearGradient
                id="paint4_linear_7815_22500"
                x1="35.7769"
                y1="28.9944"
                x2="38.1123"
                y2="40.0874"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="white" stopOpacity="0.76" />
                <stop offset="1" stopColor="white" stopOpacity="0.27" />
            </linearGradient>
            <clipPath id="clip0_7815_22500">
                <rect x="18.4189" y="18.4189" width="35.1628" height="33.0698" rx="3.50306" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const GatewayIconBig = () => {
    const { palette } = useTheme();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="172" viewBox="0 0 172 172" fill="none">
            <rect
                width="172"
                height="172"
                rx="12"
                fill={palette.mode === CurrentTheme.Dark ? palette.text.text8 : palette.text.text1}
            />
            <g filter="url(#filter0_d_7638_32213)">
                <g clipPath="url(#clip0_7638_32213)">
                    <g filter="url(#filter1_i_7638_32213)">
                        <rect x="44" y="44" width="83.6842" height="83.6842" fill="url(#paint0_linear_7638_32213)" />
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
                </g>
            </g>
            <path
                d="M58.1055 35C58.1055 33.8954 59.0009 33 60.1055 33H67.2634C68.3679 33 69.2634 33.8954 69.2634 35V44.1579H58.1055V35Z"
                fill="url(#paint1_linear_7638_32213)"
            />
            <path
                d="M102.737 35C102.737 33.8954 103.633 33 104.737 33H111.895C113 33 113.895 33.8954 113.895 35V44.1579H102.737V35Z"
                fill="url(#paint2_linear_7638_32213)"
            />
            <path
                d="M80 123H91.1579V128.579C91.1579 131.66 88.6601 134.158 85.5789 134.158C82.4978 134.158 80 131.66 80 128.579V123Z"
                fill="url(#paint3_linear_7638_32213)"
            />
            <path
                d="M94.5688 79.5635C94.0884 75.3441 90.0897 72.0527 85.2296 72.0527C82.6452 72.0527 80.4339 72.8684 78.6063 74.4902C76.7787 76.1119 72.3211 80.4199 70.6572 94.6186L91.1256 94.6282C91.4933 91.4971 92.1186 88.7798 92.87 86.4476L102.378 84.3977L94.5688 79.5635ZM85.7127 83.4768C83.8287 83.4768 82.3017 82.1158 82.3017 80.4366C82.3017 78.7574 83.8287 77.3964 85.7127 77.3964C87.5966 77.3964 89.1236 78.7574 89.1236 80.4366C89.1209 82.1158 87.5939 83.4768 85.7127 83.4768Z"
                fill="url(#paint4_linear_7638_32213)"
            />
            <defs>
                <filter
                    id="filter0_d_7638_32213"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7638_32213" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7638_32213" result="shape" />
                </filter>
                <filter
                    id="filter1_i_7638_32213"
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
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7638_32213" />
                </filter>
                <linearGradient
                    id="paint0_linear_7638_32213"
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
                    id="paint1_linear_7638_32213"
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
                    id="paint2_linear_7638_32213"
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
                    id="paint3_linear_7638_32213"
                    x1="82.3789"
                    y1="122.979"
                    x2="88.3789"
                    y2="134.179"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#494949" />
                    <stop offset="1" stopColor="#292929" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_7638_32213"
                    x1="85.4654"
                    y1="69.2633"
                    x2="91.0444"
                    y2="95.7633"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.76" />
                    <stop offset="1" stopColor="white" stopOpacity="0.27" />
                </linearGradient>
                <clipPath id="clip0_7638_32213">
                    <rect x="44" y="44" width="84" height="79" rx="8.36842" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
