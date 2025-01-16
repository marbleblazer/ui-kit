import { FC } from 'react';
import * as S from './style';
import { Stack } from '@mui/system';
import { Typography } from '../../typogrpahy';
import { SelectIndicator } from '../../select-indicator';

interface IMultiselectDropdownButtonProps {
    title: string;

    onClick: () => void;
}

export const MultiselectDropdownButton: FC<IMultiselectDropdownButtonProps> = ({ title, onClick }) => {
    return (
        <S.Wrapper onClick={onClick}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="caption12" color="text.text4">
                    {title}
                </Typography>
                <SelectIndicator />
            </Stack>
        </S.Wrapper>
    );
};
