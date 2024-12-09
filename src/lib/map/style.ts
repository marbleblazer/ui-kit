import { alpha, styled } from '@mui/material';
import { Box } from '@mui/material';

import { CurrentTheme, SIDEBAR_WIDTH } from '@chirp/ui/styles/constants';
import fullScreenIcon from '@chirp/ui/assets/fleet-icons/map-full-screen-icon.svg';
import minusIcon from '@chirp/ui/assets/fleet-icons/map-minus-icon.svg';
import plusIcon from '@chirp/ui/assets/fleet-icons/map-plus-icon.svg';
import locationUserIcon from '@chirp/ui/assets/fleet-icons/location-user.svg';
import searchIcon from '@chirp/ui/assets/fleet-icons/map-search-icon.svg';
import questionIcon from '@chirp/ui/assets/fleet-icons/map-question-icon.svg';

interface Props {
    isFullScreenMap?: boolean;
    isSidebarOpen?: boolean;
    mobileHeight?: string;
}

export const MapContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isFullScreenMap' && prop !== 'isSidebarOpen' && prop !== 'mobileHeight',
})<Props>(({ theme, isFullScreenMap = false, isSidebarOpen = false, mobileHeight = '60vh' }) => ({
    borderRadius: '10px',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    position: 'relative',

    backgroundColor: theme.palette.grey['900'],

    [theme.breakpoints.down('lg')]: {
        height: isFullScreenMap ? '100%' : mobileHeight,
    },
    [theme.breakpoints.between('md', 'lg')]: {
        // optional, it’s less noticeable to recalculate the width of the map when resizing
        width: isSidebarOpen ? `calc(100% + ${SIDEBAR_WIDTH}px)` : '100%',
    },

    'canvas:focus-visible': {
        outline: 'none',
    },

    '.mapboxgl-ctrl-bottom-right': {
        position: 'absolute',
        right: '10px',
        bottom: '10px',
    },

    '.mapboxgl-ctrl-bottom-left': {
        position: 'absolute',
        left: '10px',
        bottom: '10px',
    },

    '.mapboxgl-ctrl.mapboxgl-ctrl-group': {
        marginRight: 0,
    },

    '.spider-leg-container .spider-leg-line': {
        backgroundColor: '#f4f4f4',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '2px',
        opacity: 0.45,
        transformOrigin: 'bottom',
        zIndex: 0,
        height: 0,
        display: 'none',
    },
    '.spider-leg-container:hover .spider-leg-line': {
        backgroundColor: '#f404f4',
        opacity: 1,
    },

    '.spider-leg-container': {
        width: '1px',
        height: '1px',
        overflow: 'display',
        willChange: 'transform',
    },

    '.spider-leg-container.mapboxgl-marker': {
        width: '0px!important',
        height: '0px!important',
        overflow: 'display',
        willChange: 'transform',
        border: 'none!important',
    },

    '.spider-leg-container:hover': { cursor: 'pointer' },

    '.spider-leg-container .spider-leg-pin': {
        position: 'relative',
        zIndex: 1,
    },

    '.spider-leg-container.animate': {
        transition: 'margin 0.15s linear',
    },

    ' .spider-leg-container.initial, .spider-leg-container.exit': {
        marginLeft: '0!important',
        marginTop: '0!important',
        height: 0,
    },

    '.spider-leg-container.animate .spider-leg-line': {
        transition: 'all 0.15s linear',
        transitionDelay: 'inherit',
    },

    '.spider-leg-container.animate.initial .spider-leg-line, spider-leg-container.animate.exit .spider-leg-line': {
        height: '0!important',
    },

    '.cluster-custom-pin': {
        width: '32px',
        height: '32px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        background: 'white',

        div: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    '.mapboxgl-ctrl': {
        margin: 0,
    },

    '.mapboxgl-ctrl.mapboxgl-ctrl-attrib': {
        position: 'absolute',
        display: 'none',
        bottom: 0,
        right: 0,
    },

    '&&& .mapboxgl-ctrl': {
        marginBottom: '2px',
    },

    '.mapboxgl-ctrl-geocoder--collapsed': {
        height: '28px',
        width: '28px',
        minWidth: 0,
    },

    '.mapboxgl-ctrl-geocoder.mapboxgl-ctrl': {
        marginRight: 0,
        backgroundColor: theme.palette.base.color2,

        '.mapboxgl-ctrl-geocoder--icon-search': {
            backgroundImage: 'none',
            backgroundColor: theme.palette.text.text4,
            '-webkit-mask-image': `url("${searchIcon}")`,
            maskImage: `url("${searchIcon}") `,
            '-webkit-mask-position-x': '50%',
            '-webkit-mask-position-y': '50%',
        },
        '.mapboxgl-ctrl-geocoder--input': {
            color: theme.palette.text.primary,
            '&:placeholder': {
                color: theme.palette.text.tertiary,
            },
            '&:focus': {
                outline: 'none',
            },
        },

        svg: {
            left: '4px',
            top: '4px',
            path: { display: 'none' },
        },
    },

    '.mapboxgl-ctrl-geocoder--input': {
        height: '28px',

        svg: {
            fill: '#ff0000 !important',
        },
    },

    '.mapboxgl-ctrl-zoom-in': {
        marginBottom: '2px',
        '.mapboxgl-ctrl-icon.mapboxgl-ctrl-icon.mapboxgl-ctrl-icon': {
            backgroundImage: 'none',
            backgroundColor: theme.palette.text.text4,
            '-webkit-mask-image': `url("${plusIcon}")`,
            maskImage: `url("${plusIcon}") `,
            '-webkit-mask-position-x': '50%',
            '-webkit-mask-position-y': '50%',
        },
    },

    '.mapboxgl-ctrl-zoom-out': {
        '.mapboxgl-ctrl-icon.mapboxgl-ctrl-icon.mapboxgl-ctrl-icon': {
            backgroundImage: 'none',
            backgroundColor: theme.palette.text.text4,
            '-webkit-mask-image': `url("${minusIcon}")`,
            maskImage: `url("${minusIcon}") `,
            '-webkit-mask-position-x': '50%',
            '-webkit-mask-position-y': '50%',
        },
    },

    '.help-control': {
        backgroundImage: 'none',
        backgroundColor: theme.palette.text.text4,
        '-webkit-mask-image': `url("${questionIcon}")`,
        maskImage: `url("${questionIcon}") `,
        '-webkit-mask-position-x': '50%',
        '-webkit-mask-position-y': '50%',
    },

    '.mapboxgl-ctrl-fullscreen.mapboxgl-ctrl-fullscreen.mapboxgl-ctrl-fullscreen.mapboxgl-ctrl-fullscreen': {
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
        '& span': {
            backgroundImage: 'none',
            backgroundColor: theme.palette.text.text4,
            '-webkit-mask-image': `url("${fullScreenIcon}")`,
            maskImage: `url("${fullScreenIcon}") `,
            '-webkit-mask-position-x': '50%',
            '-webkit-mask-position-y': '50%',
        },
    },

    '.mapboxgl-ctrl-group.mapboxgl-ctrl-group.mapboxgl-ctrl-group button+button': {
        borderTop: 'none',
    },

    '.mapboxgl-ctrl-group.mapboxgl-ctrl-group.mapboxgl-ctrl-group.mapboxgl-ctrl-group button': {
        padding: '0',
        backgroundColor: theme.palette.base.color2,
        color: 'rgba(186, 186, 186, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '3px',
        width: '28px',
        height: '28px',
        cursor: 'pointer',
        display: 'flex',
        border: 'none',
        '&:disabled': {
            opacity: 0.3,
            cursor: 'default',
        },
        span: {
            width: '20px',
            height: '20px',
        },

        '&:hover': {
            border: `1px solid ${theme.palette.border.secondary}`,
        },
    },

    '.mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon': {
        backgroundImage: `url("${fullScreenIcon}")`,
    },

    '.mapboxgl-ctrl-geolocate': {
        '& span': {
            backgroundImage: 'none !important',
            backgroundColor: theme.palette.accent.accent,
            '-webkit-mask-image': `url("${locationUserIcon}")`,
            maskImage: `url("${locationUserIcon}") `,
            '-webkit-mask-position-x': '50%',
            '-webkit-mask-position-y': '50%',
        },
    },

    '.mapboxgl-user-location-dot': {
        background: '#fff',
        border: '1px solid black',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundImage: `url("${locationUserIcon}")!important`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        '&:before': {
            display: 'none',
        },

        '&:after': {
            display: 'none',
        },
    },

    '.mapboxgl-ctrl-group.mapboxgl-ctrl-group.mapboxgl-ctrl-group': {
        background: 'none',
        boxShadow: 'none',
    },

    '.single-point': {
        width: '154px',
        height: '154px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',

        '&__inner': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    '.mapboxgl-popup.mapboxgl-popup.mapboxgl-popup.mapboxgl-popup': {
        '.mapboxgl-popup-tip': {
            display: 'none',
        },

        '.mapboxgl-popup-content': {
            background: theme.palette.background.background15,
            border: `1px solid ${alpha(theme.palette.border.border3, 0.1)} !important`,
            borderRadius: '12px',
            backdropFilter: 'blur(20px)',
            boxShadow: `0px 4px 20px 0px ${alpha('#5C5C5C', 0.14)}} !important`,
            padding: '16px',
            ...theme.typography.mono1213,
            color: theme.palette.text.text4,
        },

        button: {
            display: 'none',
        },
    },

    '.mapboxgl-popup.speed-popup': {
        '.mapboxgl-popup-tip': {
            display: 'none',
        },
        '& .mapboxgl-popup-content': {
            display: 'flex',
            flexDirection: 'column',
            width: '145px',
            height: '46px',
            gap: '4px',
            padding: '8px',
            borderRadius: '4px !important',
            color: theme.palette.text.text4,
            ...theme.typography.mono1213,
            '& .speed': {
                ...theme.typography.mono10,
                color: theme.palette.text.text1,
            },
        },
    },

    '.mapbox-control-ruler.mapbox-control-ruler.mapbox-control-ruler': {
        svg: {
            display: 'none',
        },

        button: {
            backgroundImage:
                theme.palette.mode === CurrentTheme.Dark ? 'url(/assets/ruler.svg)' : 'url(/assets/ruler-dark.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

            '&.-active': {
                backgroundImage: 'url(/assets/ruler-primary.svg)!important',
            },
        },
    },

    '.mapboxgl-ctrl-scale.mapboxgl-ctrl-scale.mapboxgl-ctrl-scale': {
        background: 'none',
        border: 'none',
        width: '100px!important',
        fontSize: '14px',
        lineHeight: '16px',
        color: theme.palette.primary.light,
        textShadow: `2px 2px 0 ${theme.palette.text.primary}`,
        fontFamily: theme.typography.body2.fontFamily,
        textTransform: 'uppercase',
        position: 'absolute',
        left: '8px',
        bottom: '3px',
    },

    '.scale-text': {
        fontSize: '14px',
        lineHeight: '16px',
        color: theme.palette.primary.light,
        textShadow: `2px 2px 0 ${theme.palette.text.primary}`,
        fontFamily: theme.typography.body2.fontFamily,
        textTransform: 'uppercase',
        position: 'absolute',
        left: '80px',
        bottom: '13px',
    },

    '.main-point': {
        width: '32px',
        height: '32px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        background: 'white',

        div: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    '.sub-point': {
        width: '24px',
        height: '24px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        background: 'white',

        div: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    '.mapboxgl-ctrl.mapboxgl-ctrl-group.map-styles-group': {
        button: {
            marginBottom: '4px',

            '&.map-style-button': {
                stroke: theme.palette.text.primary,

                svg: {
                    opacity: 0.6,
                },

                '&.active': {
                    color: theme.palette.base.color6,
                    stroke: theme.palette.base.color6,
                },
            },

            '&:last-of-type': {
                marginBottom: '8px',
            },
        },
    },

    '.gps-track-tooltip-text': {
        margin: 0,
        '& + &': {
            marginTop: '4px',
        },
    },

    '.mapboxgl-scroll-zoom-blocker, .mapboxgl-scroll-zoom-blocker-show, .mapboxgl-touch-pan-blocker, .mapboxgl-touch-pan-blocker':
        {
            fontFamily: theme.typography.overline.fontFamily,
            backgroundColor: theme.palette.background.paper,
            letterSpacing: '0.05em',
            color: theme.palette.text.tertiary,
            padding: '8px',
        },

    '.common-line-marker': {
        width: '6px',
        height: '6px',
        backgroundColor: theme.palette.base.color6,
        borderRadius: '50%',
    },

    '.start-end-line-marker': {
        width: '6px',
        height: '6px',
        backgroundColor: theme.palette.base.color6,
        borderRadius: '50%',

        '.svg-container': {
            position: 'relative',
            width: '36px',
            height: '36px',
            transform: 'translate(-42%, -42%)',

            svg: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
        },
    },
}));

export const MapDrawModeTabsWrapper = styled(Box)(() => ({
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translate(-50%)',
}));
