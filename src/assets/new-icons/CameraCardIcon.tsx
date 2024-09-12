import * as React from 'react';

export const CameraCardIcon: React.FC = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_16231_26050)">
            <rect width="56" height="56" rx="6" fill="white" />
            <g clipPath="url(#clip1_16231_26050)">
                <g filter="url(#filter0_i_16231_26050)">
                    <path d="M0 0H56V56H0V0Z" fill="url(#paint0_linear_16231_26050)" />
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
                    d="M33.0862 25.3333L38 22.3333V33.6667L33.0862 30.6667M21.6207 35H30.1379C31.5853 35 32.7586 33.8061 32.7586 32.3333V23.6667C32.7586 22.1939 31.5853 21 30.1379 21H21.6207C20.1733 21 19 22.1939 19 23.6667V32.3333C19 33.8061 20.1733 35 21.6207 35Z"
                    stroke="url(#paint1_linear_16231_26050)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </g>
        <defs>
            <filter
                id="filter0_i_16231_26050"
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
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16231_26050" />
            </filter>
            <linearGradient
                id="paint0_linear_16231_26050"
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
                id="paint1_linear_16231_26050"
                x1="28.5"
                y1="21"
                x2="28.5"
                y2="35"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#999999" />
            </linearGradient>
            <clipPath id="clip0_16231_26050">
                <rect width="56" height="56" rx="6" fill="white" />
            </clipPath>
            <clipPath id="clip1_16231_26050">
                <rect width="56" height="56" rx="2.7246" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
