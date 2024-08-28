import { Typography } from '@mui/material';
import React from 'react';

import * as S from './style';
import { CheckCircleOutlinedIcon, SadFaceIcon } from '@ui/icons';
import { Button } from '../button';

type Props = {
    isOpen: boolean;
    title: string;
    description: string;
    buttonText: string;
    onApply(): void;
    state?: 'success' | 'error';
};

export const ActionDialog: React.FC<Props> = ({
    isOpen,
    title,
    description,
    buttonText,
    onApply,
    state = 'success',
}) => {
    return (
        <S.Dialog open={isOpen}>
            <S.Card>
                <S.IconWrapper>{state === 'success' ? <CheckCircleOutlinedIcon /> : <SadFaceIcon />}</S.IconWrapper>
                <Typography
                    mt="24px"
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight={500}
                    textAlign="center"
                    color="lightShades.primary"
                >
                    {title}
                </Typography>
                <Typography
                    mt="12px"
                    mb="32px"
                    fontSize="13px"
                    lineHeight="20px"
                    textAlign="center"
                    color="text.secondary"
                >
                    {description}
                </Typography>
                <Button size="medium" variant="primary" fullWidth onClick={onApply}>
                    {buttonText}
                </Button>
            </S.Card>
        </S.Dialog>
    );
};
