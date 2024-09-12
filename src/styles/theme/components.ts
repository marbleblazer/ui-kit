import { ThemeOptions } from '@mui/material';
import { SelectIndicator } from '@chirp/ui/lib';

type ComponentCreator = (palette: ThemeOptions['palette']) => ThemeOptions['components'];

export const createComponents: ComponentCreator = (palette) => ({
    MuiCssBaseline: {
        styleOverrides: {
            'html, body, #__next': {
                height: '100%',
                '& ::-webkit-scrollbar': {
                    width: '4px',
                },
                '& ::-webkit-scrollbar-track': {
                    backgroundColor: palette?.primaryColors.primary ?? '000',
                },
                '& ::-webkit-scrollbar-thumb': {
                    backgroundColor: palette?.text?.secondary,
                },
                '& ::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: palette?.text?.secondary,
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
                padding: '14px 16px',
                '&:hover': {
                    backgroundColor: palette?.accent?.accent16,
                    color: palette?.accent.accent,
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
    // MuiSnackbarContent: {
    //     styleOverrides: {
    //         root: {
    //             background: palette?.primaryColors.accent,
    //             borderRadius: '12px',
    //             color: palette?.lightShades.primary,
    //             fontFamily: '"Alliance No.2", Arial, sans-serif',
    //             fontSize: '13px',
    //             lineHeight: '20px',
    //             padding: '6px 8px 6px 20px',
    //             width: '100%',
    //             minHeight: '48px',
    //         },
    //         message: {
    //             padding: 0,
    //         },
    //         action: {
    //             marginRight: 0,
    //         },
    //     },
    // },
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
