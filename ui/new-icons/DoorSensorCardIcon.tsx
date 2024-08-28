import * as React from 'react';

export const DoorSensorCardIcon: React.FC = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_16231_25988)">
            <rect width="56" height="56" rx="6" fill="white" />
            <g clipPath="url(#clip1_16231_25988)">
                <g filter="url(#filter0_i_16231_25988)">
                    <path d="M0 0H56V56H0V0Z" fill="url(#paint0_linear_16231_25988)" />
                </g>
                <ellipse cx="55.5" cy="28" rx="2.5" ry="30" fill="black" fillOpacity="0.2" />
                <ellipse
                    cx="28"
                    cy="55.5"
                    rx="3.5"
                    ry="30"
                    transform="rotate(90 28 55.5)"
                    fill="black"
                    fillOpacity="0.15"
                />
                <ellipse cy="28" rx="3" ry="30" fill="white" fillOpacity="0.05" />
                <ellipse cx="28" cy="-1" rx="4" ry="30" transform="rotate(90 28 -1)" fill="white" fillOpacity="0.08" />
                <path
                    d="M33.5946 18H36C36.5523 18 37 18.4477 37 19V37C37 37.5523 36.5523 38 36 38H33.5946M26.2973 26.5V29.5M30.1892 16.3034V39.6966C30.1892 40.3542 29.5654 40.8327 28.9302 40.6625L19.741 38.1987C19.3039 38.0815 19 37.6853 19 37.2328V18.7672C19 18.3147 19.3039 17.9185 19.741 17.8013L28.9302 15.3375C29.5654 15.1673 30.1892 15.6458 30.1892 16.3034Z"
                    stroke="url(#paint1_linear_16231_25988)"
                    strokeLinecap="round"
                />
            </g>
        </g>
        <defs>
            <filter
                id="filter0_i_16231_25988"
                x="0"
                y="0"
                width="56"
                height="56"
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
                <feOffset dy="-1.3623" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0416667 0 0 0 0 0.0416667 0 0 0 0 0.0416667 0 0 0 0.4 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16231_25988" />
            </filter>
            <linearGradient
                id="paint0_linear_16231_25988"
                x1="11.4394"
                y1="0.394132"
                x2="41.5526"
                y2="56.6055"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#494949" />
                <stop offset="1" stopColor="#292929" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_16231_25988"
                x1="28"
                y1="15"
                x2="28"
                y2="41"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#999999" />
            </linearGradient>
            <clipPath id="clip0_16231_25988">
                <rect width="56" height="56" rx="6" fill="white" />
            </clipPath>
            <clipPath id="clip1_16231_25988">
                <rect width="56" height="56" rx="2.7246" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
