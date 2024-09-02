import { SensorProps } from './types';

type OpenCloseIconProps = {
  isTriggered?: boolean;
} & SensorProps;

export const OpenCloseIcon: React.FC<OpenCloseIconProps> = ({ isTriggered, sensorColor, accentColor }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96' fill='none'>
      <circle cx='48' cy='48' r='44' fill={sensorColor} />
      <circle cx='48' cy='48' r='44' transform='rotate(-180 48 48)' fill={accentColor} />
      <g filter='url(#filter0_d_51_16868)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M89 48C89 70.6437 70.6437 89 48 89C25.3563 89 7 70.6437 7 48C7 25.3563 25.3563 7 48 7C70.6437 7 89 25.3563 89 48ZM47.75 15V11H48.25V15H47.75ZM47.75 81V85H48.25V81H47.75ZM19.296 31.7164L15.8319 29.7164L16.0819 29.2834L19.546 31.2834L19.296 31.7164ZM76.4537 64.7164L79.9178 66.7164L80.1678 66.2834L76.7037 64.2834L76.4537 64.7164ZM76.4539 31.2835L79.918 29.2835L80.168 29.7165L76.7039 31.7165L76.4539 31.2835ZM19.2962 64.2835L15.8321 66.2835L16.0821 66.7165L19.5462 64.7165L19.2962 64.2835Z'
          fill={sensorColor}
        />
      </g>

      {isTriggered ? (
        <>
          {/* opened */}
          <path
            d='M39.6667 47.6666C39.6667 46.9303 40.2637 46.3333 41.0001 46.3333H55.0001C55.7365 46.3333 56.3334 46.9303 56.3334 47.6666V55C56.3334 56.4727 55.1395 57.6666 53.6667 57.6666H42.3334C40.8607 57.6666 39.6667 56.4727 39.6667 55V47.6666Z'
            stroke={accentColor}
            strokeLinecap='square'
            strokeLinejoin='round'
          />
          <path
            xmlns='http://www.w3.org/2000/svg'
            d='M42.3333 46V45.1246C42.3333 43.4866 42.2679 41.7317 43.2322 40.4077C43.9982 39.356 45.4091 38.3333 48 38.3333C50.6667 38.3333 52.3333 40.3333 52.3333 40.3333'
            stroke={accentColor}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </>
      ) : (
        <>
          {/* closed */}
          <path
            d='M39.6667 47.6666C39.6667 46.9303 40.2637 46.3333 41.0001 46.3333H55.0001C55.7365 46.3333 56.3334 46.9303 56.3334 47.6666V55C56.3334 56.4727 55.1395 57.6666 53.6667 57.6666H42.3334C40.8607 57.6666 39.6667 56.4727 39.6667 55V47.6666Z'
            stroke={accentColor}
            strokeLinecap='square'
            strokeLinejoin='round'
          />
          <path
            d='M42.3335 46V45.7902C42.3335 43.7086 42.2083 41.3883 43.6621 39.8985C44.4912 39.0489 45.8329 38.3333 48.0002 38.3333C50.1675 38.3333 51.5091 39.0489 52.3382 39.8985C53.7921 41.3883 53.6668 43.7086 53.6668 45.7902V46'
            stroke={accentColor}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </>
      )}

      <defs>
        <filter
          id='filter0_d_51_16868'
          x='1.5'
          y='1.5'
          width='93'
          height='93'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='2.75' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_51_16868' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_51_16868' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};
