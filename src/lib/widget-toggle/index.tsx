import { ChangeEvent } from 'react';

import * as S from './style';

type Props = {
    name: string;
    label?: string;
    isLoading: boolean;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const WidgetToggle = ({ name, label, checked, isLoading, onChange }: Props) => (
    <S.WidgetToggle>
        <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} name={name} disabled={isLoading} />
        {label && (
            <S.Label component="span" checked={checked}>
                {label}
            </S.Label>
        )}
        <S.Checkmark checked={checked} isLoading={isLoading}>
            <S.CheckmarkPin checked={checked} isLoading={isLoading} />
        </S.Checkmark>
    </S.WidgetToggle>
);

const WidgetMobileToggle = ({ name, label, checked, isLoading, onChange }: Props) => (
    <S.WidgetMobileToggle>
        <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} name={name} disabled={isLoading} />
        {label && (
            <S.Label component="span" checked={checked} mr="0 !important">
                {label}
            </S.Label>
        )}
        <S.Checkmark checked={checked} isLoading={isLoading}>
            <S.CheckmarkPin checked={checked} isLoading={isLoading} />
        </S.Checkmark>
    </S.WidgetMobileToggle>
);

export { WidgetToggle, WidgetMobileToggle };
