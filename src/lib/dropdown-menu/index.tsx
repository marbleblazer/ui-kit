import { PropsWithChildren, useRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';

export interface IDropdownMenuProps<T> {
    items: T[];
    isOpened?: boolean;
    gap?: string;

    onOpen: () => void;
    onClose: () => void;
    onSelect?: (val: T) => void;
    resolveTitle: (val: T) => string;
}

export const DropdownMenu = <T,>({
    children,
    isOpened = false,
    onClose,
    items,
    resolveTitle,
    gap = '5px',
}: PropsWithChildren<IDropdownMenuProps<T>>) => {
    const controlWrapperRef = useRef(null);
    return (
        <>
            <div ref={controlWrapperRef}>{children}</div>
            <Menu
                sx={{
                    mt: gap,
                }}
                open={isOpened}
                onClose={onClose}
                anchorEl={controlWrapperRef.current}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {items?.map((item, idx) => (
                    <MenuItem key={idx} onClick={onClose}>
                        {resolveTitle(item)}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
