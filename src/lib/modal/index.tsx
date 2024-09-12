import { FC, ReactNode } from 'react';

import * as S from './style';
import { ChirpModalIcon } from '@chirp/ui/assets/icons';
import { ModalTitle } from './modal-title';

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
                <ModalTitle title={title} subTitle={description} margin="24px 0" />
                {actionComponent}
            </S.Modal>
        </S.Container>
    );
};
