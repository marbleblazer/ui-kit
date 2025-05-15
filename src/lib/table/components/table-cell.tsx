import { SxProps } from '@mui/material';

import * as S from '../style';
import { FC, PropsWithChildren, useRef, useState } from 'react';
import { Tooltip } from '../../tooltip';

interface ITableCellProps {
    sx?: SxProps;
}

export const TableCell: FC<PropsWithChildren<ITableCellProps>> = ({ sx, children }) => {
    const ref = useRef<HTMLTableCellElement>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        const el = ref.current;

        if (el) {
            const isOverflowing = el.scrollWidth > el.clientWidth;
            setShowTooltip(isOverflowing);
        }
    };

    return (
        <S.Cell sx={sx}>
            <Tooltip
                ref={ref}
                onMouseEnter={handleMouseEnter}
                sx={{
                    maxWidth: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                placement="top"
                title={showTooltip ? children : ''}
                disableInteractive
            >
                <>{children}</>
            </Tooltip>
        </S.Cell>
    );
};
