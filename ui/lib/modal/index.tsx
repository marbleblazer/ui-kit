import { FC, ReactNode } from 'react';

import * as S from './style';
import { ChirpModalIcon } from '@ui/icons';

type Props = {
    title: string;
    description: string;
    actionComponent: ReactNode;
};

export const Modal: FC<Props> = ({ title, description, actionComponent }) => {
    return (
        <S.Container>
            <S.Modal>
                <ChirpModalIcon />
                <S.Title mt="24px" mb="12px">
                    {title}
                </S.Title>
                <S.Description mb="24px">{description}</S.Description>
                {actionComponent}
            </S.Modal>
        </S.Container>
    );
};
