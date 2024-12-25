import { alpha, ThemeOptions } from '@mui/material';
import { SelectIndicator } from '@chirp/ui/lib';

type ComponentCreator = (palette: ThemeOptions['palette']) => ThemeOptions['components'];

export const createComponents: ComponentCreator = (palette) => ({
    MuiCssBaseline: {
        styleOverrides: {
            'html, body, #__next': {
                height: '100%',

                '& ::-webkit-scrollbar': {
                    width: '2px',
                    height: '2px',
                },
                '& ::-webkit-scrollbar-track': {
                    backgroundColor: palette?.background?.background6,
                },
                '& ::-webkit-scrollbar-thumb': {
                    borderRadius: '31px',
                    backgroundColor: palette?.text?.search,
                },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
                '.MuiButton-endIcon': {
                    marginLeft: '4px',
                },
                '.MuiButton-startIcon': {
                    marginRight: '4px',
                },
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
                svg: {
                    width: '20px',
                    height: '20px',
                },
            },
        },
    },
    MuiSelect: {
        defaultProps: {
            IconComponent: SelectIndicator,
        },
        styleOverrides: {
            icon: {
                top: 'calc(50% - 12px)',
                transition: 'transform 200ms',
                color: palette?.text?.secondary,
            },
        },
    },
    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: 0,
                backgroundImage: 'none',
                minWidth: '544px',
                padding: '32px',
            },
        },
    },
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontSize: '24px',
                lineHeight: '29px',
                letterSpacing: '0.3px',
                padding: 0,
                marginBottom: '12px',
            },
        },
    },
    MuiDialogContent: {
        styleOverrides: {
            root: {
                fontFamily: 'Simplon Mono',
                fontSize: '14px',
                lineHeight: '160%',
                letterSpacing: '0.25px',
                textTransform: 'uppercase',
                maxWidth: '330px',
                textAlign: 'center',
                padding: 0,
                marginBottom: '40px',
            },
        },
    },
    MuiDialogContentText: {
        styleOverrides: {
            root: {
                fontFamily: 'Simplon Mono',
                fontSize: '14px',
                lineHeight: '160%',
                letterSpacing: '0.25px',
                textTransform: 'uppercase',
            },
        },
    },
    MuiDialogActions: {
        styleOverrides: {
            root: {
                flexDirection: 'column',
                padding: 0,
                gap: '16px',
                width: '75%',
            },
        },
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                borderRadius: 0,
                background: palette?.background?.secondary,
                padding: '8px 16px',
                fontSize: '14px',
                lineHeight: '20px',
                color: palette?.text?.primary,
            },
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: palette?.border.primary,
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                padding: '2px 16px 2px 16px',
                height: '36px',
                '&:hover': {
                    backgroundColor: palette?.base?.color61 && alpha(palette?.base?.color61, 0.1),
                    color: palette?.base.color6,
                },
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                '.MuiInputAdornment-root': {
                    width: '20px',
                    height: '20px',
                },
            },
        },
    },
    MuiAutocomplete: {
        defaultProps: {
            slotProps: {
                paper: {
                    sx: {
                        backgroundColor: palette?.background?.fifthInput,
                    },
                },
            },
        },
    },

    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: palette?.background?.fifthInput,
                backgroundImage: 'none',
                marginTop: '4px',
            },
        },
    },
});
