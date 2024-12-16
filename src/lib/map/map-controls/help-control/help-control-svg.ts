import { Palette } from '@mui/material';

export const locationSvg = (theme: Palette) =>
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="${theme.base.color1}"/>
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="${theme.border.border5}"/>
        <path d="M12.1111 18.75L18.2222 14.9305C18.2222 14.1202 17.9003 13.343 17.3273 12.7699C16.7542 12.1969 15.9771 11.875 15.1666 11.875H9.05555C8.24516 11.875 7.46798 12.1969 6.89495 12.7699C6.32192 13.343 6 14.1202 6 14.9305L12.1111 18.75Z" fill="${theme.base.color6}"/>
        <path d="M12.1112 11.1111C13.7987 11.1111 15.1668 9.74309 15.1668 8.05555C15.1668 6.36802 13.7987 5 12.1112 5C10.4237 5 9.05566 6.36802 9.05566 8.05555C9.05566 9.74309 10.4237 11.1111 12.1112 11.1111Z" fill="${theme.base.color6}"/>
    </svg>
`;

export const trackerSvg = (theme: Palette) =>
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="${theme.base.color1}"/>
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="${theme.border.border5}"/>
        <mask id="path-2-inside-1_6447_126159" fill="white">
        <path d="M18.5 11.25C18.5 15.25 12.25 19.5 12.25 19.5C12.25 19.5 6 15.25 6 11.25C6 7.75 8.93629 5 12.25 5C15.5637 5 18.5 7.75 18.5 11.25Z"/>
        <path d="M14.5 11.25C14.5 12.4926 13.4926 13.5 12.25 13.5C11.0074 13.5 10 12.4926 10 11.25C10 10.0074 11.0074 9 12.25 9C13.4926 9 14.5 10.0074 14.5 11.25Z"/>
        </mask>
        <path d="M18.5 11.25C18.5 15.25 12.25 19.5 12.25 19.5C12.25 19.5 6 15.25 6 11.25C6 7.75 8.93629 5 12.25 5C15.5637 5 18.5 7.75 18.5 11.25Z" stroke="${theme.base.color6}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" mask="url(#path-2-inside-1_6447_126159)"/>
        <path d="M14.5 11.25C14.5 12.4926 13.4926 13.5 12.25 13.5C11.0074 13.5 10 12.4926 10 11.25C10 10.0074 11.0074 9 12.25 9C13.4926 9 14.5 10.0074 14.5 11.25Z" stroke="${theme.base.color6}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" mask="url(#path-2-inside-1_6447_126159)"/>
    </svg>
`;
