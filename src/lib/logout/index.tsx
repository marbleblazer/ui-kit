import { Typography } from '@mui/material';
import { FC, useState } from 'react';

import { ConfirmationDialog } from '../confirmation-dialog';
import { ListItem, ListItemContent } from './style';
import { LogoutIcon } from '@chirp/ui/assets/icons';

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
                    <LogoutIcon />
                    <Typography>Logout</Typography>
                </ListItemContent>
            </ListItem>
            <ConfirmationDialog
                isOpen={isLogoutConfirmationOpen}
                title="Are you sure that you want to logout?"
                icon={<LogoutIcon />}
                onConfirm={onLogout || (() => {})}
                onCancel={handleCancel}
            />
        </>
    );
};
