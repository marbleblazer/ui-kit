import { PropsWithChildren, ReactNode } from 'react';

import * as S from './style';
import { Button } from '../button';
import { ModalTitle } from '../modal/modal-title';
import { useTranslation } from 'react-i18next';

type Props = {
    isOpen: boolean;
    title: string;
    subTitle?: string;
    icon?: ReactNode;
    isConfirmBtnDisabled?: boolean;
    isCancelBtnDisabled?: boolean;
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
    isConfirmBtnDisabled = false,
    isCancelBtnDisabled = false,
    confirmButtonText,
    cancelButtonText,
    children,
    onConfirm,
    onCancel,
}) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'modal' });
    return (
        <S.Dialog open={isOpen}>
            {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
            <S.Content>
                <ModalTitle title={title} subTitle={subTitle} />

                {children}
            </S.Content>
            <S.ButtonGroup>
                <Button variant="secondary" size="medium" fullWidth disabled={isCancelBtnDisabled} onClick={onCancel}>
                    {cancelButtonText || t('Cancel')}
                </Button>
                <Button variant="primary" size="medium" fullWidth disabled={isConfirmBtnDisabled} onClick={onConfirm}>
                    {confirmButtonText || t('Confirm')}
                </Button>
            </S.ButtonGroup>
        </S.Dialog>
    );
};
