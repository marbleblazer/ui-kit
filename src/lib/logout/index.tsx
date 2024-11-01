import { Typography } from '@mui/material';
import { FC, useState } from 'react';

import { ConfirmationDialog } from '../confirmation-dialog';
import { DownArrowIcon } from '../..';
import { ListItem, ListItemContent } from './style';

interface LogoutProps {
    onLogout?: () => void;
}

export const Logout: FC<LogoutProps> = ({ onLogout }) => {
    const [isLogoutConfirmationOpen, setIsLogoutConfirmationOpen] = useState<boolean>(false);

    const handleLogout = () => {
        setIsLogoutConfirmationOpen(true);
    };

    const handleCancel = () => {
        setIsLogoutConfirmationOpen(false);
    };

    return (
        <>
            <ListItem onClick={handleLogout}>
                <ListItemContent>
                    <DownArrowIcon />
                    <Typography>Logout</Typography>
                </ListItemContent>
            </ListItem>
            <ConfirmationDialog
                isOpen={isLogoutConfirmationOpen}
                title="Are you sure that you want to logout?"
                icon={<DownArrowIcon />}
                // disabledDownArrowIconisLoading}
                onConfirm={onLogout || (() => {})}
                onCancel={handleCancel}
            />
        </>
    );
};
