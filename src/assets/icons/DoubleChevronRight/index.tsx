import { CSSProperties, FC } from 'react';
interface Props {
  size?: number;
  sx?: CSSProperties;
}

export const DoubleChevronRight: FC<Props> = ({ size = 28, sx }) => (
  <svg width={size} height={size} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' style={sx}>
    <g clipPath='url(#clip0_14785_137812)'>
      <path
        d='M14.8737 10.2085L18.957 14.0002L14.8737 17.7918'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.04167 10.2085L13.125 14.0002L9.04167 17.7918'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_14785_137812'>
        <rect width='28' height='28' fill='white' transform='matrix(-1 0 0 1 28 0)' />
      </clipPath>
    </defs>
  </svg>
);
