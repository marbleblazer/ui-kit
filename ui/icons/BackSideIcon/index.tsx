interface BackIconProps {
  color?: string;
  height?: number;
  width?: number;
}

export const BackSideIcon = ({ color, height, width }: BackIconProps) => (
  <svg
    width={width ?? '20'}
    height={height ?? '20'}
    viewBox={`0 0 ${width ?? '24'} ${height ?? '24'}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.0417 7.29167L8.125 10L11.0417 12.7083'
      stroke={color ?? 'currentColor'}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
