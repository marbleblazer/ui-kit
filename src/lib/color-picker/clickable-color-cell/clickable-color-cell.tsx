import { FC } from 'react';
import * as S from './style';
import { IClickableColorCellProps } from './types';

export const ClickableColorCell: FC<IClickableColorCellProps> = ({ color, onClick, size }) => {
    return <S.Cell onClick={onClick} size={size} color={color} />;
};
