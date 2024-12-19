import { styled } from '@mui/material';
import { Stack } from '@mui/material';

export const Card = styled(Stack)(({ theme }) => ({
    background: theme.palette.background.background7,
    borderRadius: '12px',
    height: '236px',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '20px',
    border: 'none',
    position: 'relative',
}));

export const UnitsOfMeasurementWrapper = styled(Stack)(({ theme }) => ({
    padding: '2px',
    background: theme.palette.background.background4,
    borderRadius: '6px',
}));

export const SettingsItem = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '16px',

    '& + &': {
        borderTop: '1px solid',
        borderColor: theme.palette.border.border3,
        paddingTop: '16px',
    },

    '&:last-of-type': {
        paddingBottom: 0,
    },
}));
