import * as React from 'react';
import { FC, ReactNode, PropsWithChildren } from 'react';
import { Popper } from '@mui/material';

interface IDropdownProps {
    isOpened?: boolean;
    anchorEl?: ReactNode;
}

export const Dropdown: FC<PropsWithChildren<IDropdownProps>> = ({ isOpened = false, anchorEl, children }) => {
    const anchorElRef = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <div ref={anchorElRef}>{anchorEl}</div>
            <Popper open={isOpened} anchorEl={anchorElRef.current}>
                {children}
            </Popper>
        </>
    );
};
