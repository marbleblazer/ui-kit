import { MouseEvent } from 'react';

export interface IClickableColorCellProps {
    size?: 'small' | 'medium' | 'large';
    color: string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
