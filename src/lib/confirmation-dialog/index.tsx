import { Typography } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

import * as S from './style';
import { CloseIcon } from '@chirp/ui/assets/icons';
import { Button } from '../button';

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
            <S.CloseIconButton onClick={onCancel}>
                <CloseIcon />
            </S.CloseIconButton>
            {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
            <S.Content>
                <Typography fontSize="16px" lineHeight="20px">
                    {title}
                </Typography>
                {subTitle && (
                    <Typography fontSize="12px" lineHeight="16px" color="lightShades.quaternary">
                        {subTitle}
                    </Typography>
                )}
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
