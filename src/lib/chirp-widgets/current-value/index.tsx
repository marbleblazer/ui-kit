import { FC } from 'react';

import * as S from './style';
import { useTranslation } from 'react-i18next';

type Props = {
    value: number | string | boolean | undefined;
    postfix: number | string;
    color?: string;
};

export const CurrentValue: FC<Props> = ({ value, postfix, color }) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });

    if (value === undefined || value === '') {
        return (
            <S.Wrapper color={color}>
                <S.NoDataText>{t('No data')}</S.NoDataText>
            </S.Wrapper>
        );
    }

    return (
        <S.Wrapper color={color}>
            {String(value)}
            {!!postfix && <S.Postfix>{postfix}</S.Postfix>}
        </S.Wrapper>
    );
};
