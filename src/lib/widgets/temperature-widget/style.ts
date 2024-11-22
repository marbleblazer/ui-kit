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

export const CustomCaptionTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.quaternary,
    marginRight: '4px',
    fontSize: '10px',
}));

export const LastUpdateTimeTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary,
}));

export const LeftSideOfTemperatureTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light' ? '#ECA23F' : '#ECE3D1',
}));

export const RightSideOfTemperatureTypography = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    lineHeight: '32px',
    fontWeight: '500',
    color: theme.palette.mode === 'light' ? '#ECA23F' : '#ECE3D1',
}));

export const DegreeSignTypography = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    marginBottom: '25px',
    color: theme.palette.mode === 'light' ? '#ECA23F' : '#ECE3D1',
}));
