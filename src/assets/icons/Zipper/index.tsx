import { RgbaColor } from '@/entities/common';

interface ZipperProps {
  color?: string | RgbaColor;
}

export const Zipper = ({ color }: ZipperProps) => (
  <svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.82253 0.325088L0.0806344 5.83073C0.0463635 5.88115 0.0824811 5.94937 0.143449 5.94937H2.77459C2.82327 5.94937 2.85939 5.99453 2.84868 6.04202L2.04214 9.62015C2.0238 9.70154 2.13103 9.7487 2.17862 9.68018L5.91718 4.29648C5.95215 4.24612 5.91611 4.17722 5.85479 4.17722H3.22478C3.1763 4.17722 3.14023 4.13241 3.15058 4.08505L3.95955 0.383998C3.97739 0.302354 3.86951 0.255969 3.82253 0.325088Z'
      fill={color || 'currentColor'}
    />
  </svg>
);
