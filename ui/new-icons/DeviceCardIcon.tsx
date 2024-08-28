import * as React from 'react';

export const DeviceCardIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_16231_26041)">
            <rect width="56" height="56" rx="6" fill="white" />
            <g clipPath="url(#clip1_16231_26041)">
                <g filter="url(#filter0_i_16231_26041)">
                    <path d="M0 0H56V56H0V0Z" fill="url(#paint0_linear_16231_26041)" />
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.5 16C24.7761 16 25 16.2239 25 16.5V19H31V16.5C31 16.2239 31.2239 16 31.5 16C31.7761 16 32 16.2239 32 16.5V19H33.2619C35.3264 19 37 20.6736 37 22.7381V24H39.5C39.7761 24 40 24.2239 40 24.5C40 24.7761 39.7761 25 39.5 25H37V31H39.5C39.7761 31 40 31.2239 40 31.5C40 31.7761 39.7761 32 39.5 32H37V33.2619C37 35.3264 35.3264 37 33.2619 37H32V39.5C32 39.7761 31.7761 40 31.5 40C31.2239 40 31 39.7761 31 39.5V37H25V39.5C25 39.7761 24.7761 40 24.5 40C24.2239 40 24 39.7761 24 39.5V37H22.7381C20.6736 37 19 35.3264 19 33.2619V32H16.5C16.2239 32 16 31.7761 16 31.5C16 31.2239 16.2239 31 16.5 31H19V25H16.5C16.2239 25 16 24.7761 16 24.5C16 24.2239 16.2239 24 16.5 24H19V22.7381C19 20.6736 20.6736 19 22.7381 19H24V16.5C24 16.2239 24.2239 16 24.5 16ZM20 31.5V33.2619C20 34.7741 21.2259 36 22.7381 36H24.5H31.5H33.2619C34.7741 36 36 34.7741 36 33.2619V31.5V24.5V22.7381C36 21.2259 34.7741 20 33.2619 20H31.5H24.5H22.7381C21.2259 20 20 21.2259 20 22.7381V24.5V31.5Z"
                    fill="url(#paint1_linear_16231_26041)"
                />
            </g>
        </g>
        <defs>
            <filter
                id="filter0_i_16231_26041"
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
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16231_26041" />
            </filter>
            <linearGradient
                id="paint0_linear_16231_26041"
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
                id="paint1_linear_16231_26041"
                x1="28"
                y1="16"
                x2="28"
                y2="40"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#999999" />
            </linearGradient>
            <clipPath id="clip0_16231_26041">
                <rect width="56" height="56" rx="6" fill="white" />
            </clipPath>
            <clipPath id="clip1_16231_26041">
                <rect width="56" height="56" rx="2.7246" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
