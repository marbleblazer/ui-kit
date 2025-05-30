import { Stack, useTheme, Popover, Divider, alpha } from '@mui/material';
import * as S from './style';
import { useState, FC } from 'react';
import { Avatar } from '../avatar';
import { Button } from '../button';
import { ThemeSwitch } from '../theme-switch';
import { Logout } from '../logout';
import { ConnectWalletBanner } from '../connect-wallet-banner';
import { Typography } from '../typogrpahy';
import { useTranslation } from 'react-i18next';
import { ILanguageSelectorProps, LanguageSelector } from '../language-selector';

interface UserPopupProps {
    languageSelectorProps: ILanguageSelectorProps;
    onLogout?: () => void;
    onWalletConnect?: () => void;
    onChangeMode?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    isDarkMode?: boolean;
    name?: string;
    userNameForAvatar?: string;
    avatarUrl?: string;
}

export const UserPopup: FC<UserPopupProps> = ({
    onLogout,
    onWalletConnect,
    onChangeMode,
    isDarkMode,
    name,
    languageSelectorProps,
    userNameForAvatar,
    avatarUrl,
}) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'UserPopup' });
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const theme = useTheme();

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);

    const handleLogout = () => {
        onLogout && onLogout();
        handleClose();
    };

    return (
        <>
            <Stack
                onClick={handleAvatarClick}
                direction="row"
                alignItems="center"
                columnGap={2}
                sx={{ cursor: 'pointer' }}
            >
                <Avatar
                    sx={{ width: '40px', height: '40px' }}
                    avatarUrl={avatarUrl}
                    userName={userNameForAvatar ?? ''}
                />
                <Typography variant="body1" color="text.text4" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {name}
                </Typography>
            </Stack>

            <Popover
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    '*.MuiPaper-root': {
                        borderRadius: '12px',
                        boxShadow: `4px 0px 20px 0px ${alpha('#5C5C5C', 0.2)}`,
                    },
                }}
            >
                <S.PopupBody>
                    <S.List>
                        {onWalletConnect && (
                            <Stack p="8px" width="100%" marginTop={1} rowGap={2}>
                                <ConnectWalletBanner />
                                <Button
                                    fullWidth
                                    type="button"
                                    variant="primary"
                                    size="small"
                                    onClick={onWalletConnect}
                                >
                                    {t('Connect your wallet')}
                                </Button>
                            </Stack>
                        )}
                        <LanguageSelector {...languageSelectorProps} />
                        <Logout onLogout={handleLogout} />
                        <Divider sx={{ background: alpha(theme.palette.text.text1, 0.08), width: '197px' }} />
                        <S.ListItem>
                            <Stack>
                                <S.ListItemContent sx={{ alignItems: 'center' }}>
                                    <Stack sx={{ marginLeft: '-4px' }}>
                                        <ThemeSwitch onChange={onChangeMode} checked={isDarkMode} />
                                    </Stack>
                                    <Typography variant="paragraphSecondary" color="text.text8">
                                        {theme.palette.mode === 'dark' ? t('themeSwith.Dark') : t('themeSwith.Light')}
                                    </Typography>
                                </S.ListItemContent>
                            </Stack>
                        </S.ListItem>
                    </S.List>
                </S.PopupBody>
            </Popover>
        </>
    );
};
