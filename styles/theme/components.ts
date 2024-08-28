import { ThemeOptions } from '@mui/material';
import { SelectIndicator } from '@ui/lib';

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
                    backgroundColor: palette?.darkShades?.primary ?? '000',
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
                borderRadius: 0,
                textTransform: 'uppercase',
                padding: '12px 24px',
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
                background: palette?.darkShades.ternary,
                padding: '8px 16px',
                fontSize: '14px',
                lineHeight: '20px',
                color: palette?.text?.primary,
            },
            arrow: {
                color: palette?.darkShades.ternary,
            },
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: palette?.borders.primary,
            },
        },
    },
    MuiSnackbarContent: {
        styleOverrides: {
            root: {
                background: palette?.primaryColors.accent,
                borderRadius: '12px',
                color: palette?.lightShades.primary,
                fontFamily: '"Alliance No.2", Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '20px',
                padding: '6px 8px 6px 20px',
                width: '100%',
                minHeight: '48px',
            },
            message: {
                padding: 0,
            },
            action: {
                marginRight: 0,
            },
        },
    },
    MuiAutocomplete: {
        defaultProps: {
            slotProps: {
                paper: {
                    sx: {
                        backgroundColor: palette?.darkShades.ternary,
                    },
                },
            },
        },
    },

    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: palette?.darkShades.ternary,
            },
        },
    },
});
