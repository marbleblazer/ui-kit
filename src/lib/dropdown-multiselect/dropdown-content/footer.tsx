import { FC } from 'react';
import { Stack } from '@mui/material';

import { Button } from '../../button';
import * as S from './style';

interface IDropdownFooterProps {
    selectedCount?: number;

    onAccept: () => void;
    onClear: () => void;
}

export const DropdownFooter: FC<IDropdownFooterProps> = ({ selectedCount, onAccept, onClear }) => {
    const applyText = selectedCount ? `Apply (${selectedCount})` : 'Apply';

    return (
        <S.Wrapper p={4} pt={3}>
            <Stack direction="row">
                <Button fullWidth onClick={onClear}>
                    Clear all
                </Button>
                <Button fullWidth variant="primary" onClick={onAccept}>
                    {applyText}
                </Button>
            </Stack>
        </S.Wrapper>
    );
};
