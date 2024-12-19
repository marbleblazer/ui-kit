import { Slider as MuiSlider, styled } from '@mui/material';

export const Slider = styled(MuiSlider)(({ theme }) => ({
    //   '--gradient': `linear-gradient(90deg, ${theme.palette.additionalColors.blue} 0%, ${theme.palette.additionalColors.yellow} 49%, ${theme.palette.alerts.alert} 100%)`,
    '--gradient': `linear-gradient(90deg, #5F75FF 0%, #FFA824 49%, #FF4D14 100%)`,

    height: '6px',
    padding: 0,

    '& .MuiSlider-rail': {
        // eslint-disable-next-line max-len
        background: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA4IDQiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNLTguNzQyMjhlLTA4IDJMMS44MDc2NyAxLjgwNzY3TDIgLTguNzQyMjhlLTA4TDIuMTkyMzMgMS44MDc2N0w0IDJMMi4xOTIzMyAyLjE5MjMzTDIgNEwxLjgwNzY3IDIuMTkyMzNMLTguNzQyMjhlLTA4IDJaIiBmaWxsPSIjMTAxMDEwIi8+Cjwvc3ZnPg==),
      var(--gradient)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
        opacity: 1,
    },

    '& .MuiSlider-thumb': {
        width: '10px',
        height: '16px',
        borderRadius: '2px',
        border: '1px solid black',
    },
}));
