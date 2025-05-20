import { ChangeEvent } from 'react';

import * as S from './style';

type Props = {
    name: string;
    label?: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Toggle = ({ name, label, checked, onChange }: Props) => (
    <S.Toggle>
        <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} name={name} />
        {label && (
            <S.Label component="span" variant="caption12">
                {label}
            </S.Label>
        )}
        <S.Checkmark>
            <S.CheckmarkPin checked={checked} />
        </S.Checkmark>
    </S.Toggle>
);
