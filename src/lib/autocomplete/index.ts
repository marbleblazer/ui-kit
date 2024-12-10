import { Autocomplete as MuiAutocomplete, styled } from '@mui/material';

// TODO: fix height select
export const Autocomplete = styled(MuiAutocomplete)(() => ({
    borderRadius: '8px',
    border: 'none',

    '.MuiInputBase-root': {
        minHeight: '40.69px',
        padding: 0,

        '&.MuiOutlinedInput-root.MuiAutocomplete-inputRoot': {
            paddingRight: '0px',
        },

        'input.MuiInputBase-input': {
            padding: '12px 16px 10px 16px',
        },

        '.MuiAutocomplete-endAdornment': {
            minHeight: '40.69px',
            // top: 0,
            right: '23px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            button: {
                height: '20px',
                width: '20px',
                padding: 0,
            },
        },

        '.MuiAutocomplete-clearIndicator': {
            marginTop: 0,

            '.MuiSvgIcon-root': {
                width: '18px',
                height: '18px',
            },
        },
    },
})) as typeof MuiAutocomplete;
