import { SuiIcon } from '@chirp/ui/assets/fleet-icons';
import { Stack } from '@mui/material';
import { FC } from 'react';
import ConnectWalletSvg from '@chirp/ui/assets/fleet-icons/connect-wallet.svg';

interface ConnectWalletIconProps {
    color?: string;
    backgroundColor?: string;
}

export const ConnectWalletIcon: FC<ConnectWalletIconProps> = ({ color, backgroundColor }) => (
    <Stack
        alignItems="center"
        sx={{
            marginTop: '8px',
            backgroundImage: `url(${ConnectWalletSvg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
        }}
    >
        <Stack
            sx={{
                color: color || 'lightShades.primary',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: backgroundColor || 'darkShades.ternary',
                borderRadius: '20px',
                width: '40px',
                height: '40px',
            }}
        >
            <SuiIcon width={16} height={16} />
        </Stack>
    </Stack>
);
