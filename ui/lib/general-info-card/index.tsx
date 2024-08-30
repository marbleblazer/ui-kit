import { Stack, SxProps } from '@mui/material';
import * as React from 'react';

import * as S from './styles';
import { Button } from '../button';

export interface GeneralInfoCardProps {
    header: React.ReactNode;
    headerActionContent: React.ReactNode | string;
    headerAction?(): void;
    footer: React.ReactNode;
    sx?: SxProps;
}

export const GeneralInfoCard: React.FC<GeneralInfoCardProps> = ({
    header,
    headerAction,
    headerActionContent,
    footer,
    sx,
}) => {
    return (
        <S.Wrapper sx={sx}>
            <Stack direction="row" justifyContent="space-between">
                {header}
                <Button onClick={headerAction} color="primary" size="small" variant="secondary">
                    {headerActionContent}
                </Button>
            </Stack>
            <Stack direction="row">{footer}</Stack>
        </S.Wrapper>
    );
};
