import { useTheme } from '@mui/material';

import { CurrentTheme } from '@/const/theme';

interface PlusIconProps {
  color?: string;
  height?: number;
  width?: number;
}

export const PlusIcon = ({ color, width, height }: PlusIconProps) => {
  const { palette } = useTheme();
  const currentColor =
    color ?? (palette.mode === CurrentTheme.Light ? palette.text.primary : palette.lightShades.primary);

  return (
    <svg
      width={width ?? '20'}
      height={height ?? '20'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6 12H18' stroke={currentColor} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12 18V6' stroke={currentColor} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};
