import MuiTranslateIcon from '@mui/icons-material/Translate';
import { Stack, styled } from '@mui/material';
import { Select as BaseSelect } from '../select/style';

export const Selector = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '6px 8px',
});

export const TranslateIcon = styled(MuiTranslateIcon)({
    fontSize: '20px',
});

export const Select = styled(BaseSelect)(({ theme }) => ({
    marginTop: 0,
    backgroundColor: 'transparent',
    height: '32px',
    width: '100%',
    border: 'none',
    padding: '4px 8px',

    '&.MuiInputBase-root': {
        ...theme.typography.paragraphSecondary,
        color: theme.palette.text.text8,
        '.MuiSelect-icon': {
            color: theme.palette.text.text8,
        },
        '&:hover': {
            backgroundColor: theme.palette.background.background5,
            color: theme.palette.text.text6,
            '.MuiTypography-root': {
                color: theme.palette.text.text6,
            },
        },
    },
    '.MuiSelect-select.MuiInputBase-input': {
        ...theme.typography.paragraphSecondary,
        padding: 0,
        paddingLeft: '8px',
    },
}));
