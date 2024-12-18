import React from 'react';

import * as S from './style';
import { CheckCircleOutlinedIcon, SadFaceIcon } from '@chirp/ui/assets/icons';
import { Button } from '../button';
import { ModalTitle } from '../modal/modal-title';

type Props = {
    isOpen: boolean;
    title: string;
    description: string;
    buttonText: string;
    onApply(): void;
    state?: 'success' | 'error';
    dialogSx?: React.CSSProperties;
};

export const ActionDialog: React.FC<Props> = ({
    isOpen,
    title,
    description,
    buttonText,
    onApply,
    state = 'success',
    dialogSx,
}) => {
    return (
        <S.Dialog open={isOpen} dialogSx={dialogSx}>
            <S.Card>
                <S.IconWrapper>{state === 'success' ? <CheckCircleOutlinedIcon /> : <SadFaceIcon />}</S.IconWrapper>
                <ModalTitle title={title} subTitle={description} margin="24px 0 32px" />

                <Button size="medium" variant="primary" fullWidth onClick={onApply}>
                    {buttonText}
                </Button>
            </S.Card>
        </S.Dialog>
    );
};
