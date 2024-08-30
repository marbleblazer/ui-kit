import { styled } from '@mui/material';
import { Stack } from '@mui/material';
import { CurrentTheme } from '@styles/constants';

export const Card = styled(Stack)(({ theme }) => ({
    background: theme.palette.background.default,
    borderRadius: '12px',
    height: '236px',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '20px',
    border: `1px solid ${
        theme.palette.mode === CurrentTheme.Dark ? theme.palette.darkShades.ternary : theme.palette.secondary.main
    }`,
    position: 'relative',
}));

export const UnitsOfMeasurementWrapper = styled(Stack)(({ theme }) => ({
    padding: '2px',
    background: theme.palette.darkShades.primary,
    borderRadius: '6px',
}));

export const SettingsItem = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '16px',

    '& + &': {
        borderTop: '1px solid',
        borderColor: theme.palette.borders.primary,
        paddingTop: '16px',
    },

    '&:last-of-type': {
        paddingBottom: 0,
    },
}));
