import { Box } from '@mui/material';

import backgroundImageSrc from './assets/background.svg';

export const FooterGradient = () => (
    <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            height: '48px',
            width: '100%',
            backgroundImage: `url(${backgroundImageSrc})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto',
        }}
    />
);
