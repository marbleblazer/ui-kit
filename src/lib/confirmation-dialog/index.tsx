import { PropsWithChildren, ReactNode } from 'react';

import * as S from './style';
import { Button } from '../button';
import { ModalTitle } from '../modal/modal-title';

type Props = {
    isOpen: boolean;
    title: string;
    subTitle?: string;
    icon?: ReactNode;
    disabled?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirm(): void;
    onCancel(): void;
} & PropsWithChildren;

export const ConfirmationDialog: React.FC<Props> = ({
    isOpen,
    title,
    subTitle,
    icon,
    disabled = false,
    confirmButtonText = 'Confirm',
    cancelButtonText = 'Cancel',
    children,
    onConfirm,
    onCancel,
}) => {
    return (
        <S.Dialog open={isOpen}>
            {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
            <S.Content>
                <ModalTitle title={title} subTitle={subTitle} />

                {children}
            </S.Content>
            <S.ButtonGroup>
                <Button variant="secondary" size="medium" fullWidth disabled={disabled} onClick={onCancel}>
                    {cancelButtonText}
                </Button>
                <Button variant="primary" size="medium" fullWidth disabled={disabled} onClick={onConfirm}>
                    {confirmButtonText}
                </Button>
            </S.ButtonGroup>
        </S.Dialog>
    );
};
