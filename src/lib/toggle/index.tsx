import { ChangeEvent } from 'react';

import * as S from './style';

type Props = {
    name: string;
    label?: string;
    isLoading: boolean;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Toggle = ({ name, label, checked, isLoading, onChange }: Props) => (
    <S.Toggle>
        <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} name={name} disabled={isLoading} />
        {label && (
            <S.Label component="span" checked={checked}>
                {label}
            </S.Label>
        )}
        <S.Checkmark checked={checked} isLoading={isLoading}>
            <S.CheckmarkPin checked={checked} isLoading={isLoading} />
        </S.Checkmark>
    </S.Toggle>
);

const MobileToggle = ({ name, label, checked, isLoading, onChange }: Props) => (
    <S.MobileToggle>
        <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} name={name} disabled={isLoading} />
        {label && (
            <S.Label component="span" checked={checked} mr="0 !important">
                {label}
            </S.Label>
        )}
        <S.Checkmark checked={checked} isLoading={isLoading}>
            <S.CheckmarkPin checked={checked} isLoading={isLoading} />
        </S.Checkmark>
    </S.MobileToggle>
);

export { Toggle, MobileToggle };
