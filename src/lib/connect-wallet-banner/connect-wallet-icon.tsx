import { SuiIcon, ConnectWalletIcon } from '@chirp/ui/assets/fleet-icons';
import { Stack } from '@mui/material';
import { FC } from 'react';

interface ConnectWalletIconProps {
    color?: string;
    backgroundColor?: string;
}

export const ConnectWalletBanner: FC<ConnectWalletIconProps> = () => (
    <Stack width="100%" position={'relative'}>
        <ConnectWalletIcon width={'100%'} />
        <SuiIcon
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            width={16}
            height={16}
        />
    </Stack>
);
