import { FC } from 'react';

type Props = {
  reversed?: boolean;
};

export const DropdownIcon: FC<Props> = ({ reversed }) => {
  const style = reversed ? { transform: 'rotate(180deg)' } : undefined;

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={style}>
      <path
        d='M15.25 10.75L12 14.25L8.75 10.75'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
