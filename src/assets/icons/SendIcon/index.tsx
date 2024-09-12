interface SendIconIconProps {
  color?: string;
  height?: number;
  width?: number;
}
export const SendIcon: React.FC<SendIconIconProps> = ({ width, height, color }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width ?? '20'} height={height ?? '20'} viewBox='0 0 24 24' fill='none'>
    <path d='M13.5 10.5L11 13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 2L15 22L11 13L2 9L22 2Z'
      stroke={color ?? 'currentColor'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
