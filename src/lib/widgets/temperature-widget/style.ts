import { Stack, styled } from '@mui/material';
import { Typography } from '../../typogrpahy';

export const WidgetContainer = styled('div')(({ theme }) => ({
    width: '415px',
    height: '256px',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: theme.palette.background.primary,
}));

export const HeaderWrapper = styled(Stack)(({}) => ({
    width: '100%',
    height: '44px',
    justifyContent: 'space-between',
    flexDirection: 'row',
}));

export const RightCornerIconsWrapper = styled(Stack)(({}) => ({
    flexDirection: 'row',
    gap: '4px',
    height: '20px',
    alignItems: 'center',
}));

export const TemperatureTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary,
}));

export const LastUpdateTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.quaternary,
    marginRight: '4px',
    fontSize: '10px',
}));

export const LastUpdateTimeTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary,
}));
