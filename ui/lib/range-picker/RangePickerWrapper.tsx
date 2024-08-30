import { styled } from '@mui/material';
import { Stack } from '@mui/material';

import { RgbaColor } from '@/entities/common';
import { replaceRgbaOpacity } from '@/helpers/replaceRgbaOpacity';

export const RangePickerWrapper = styled(Stack)(({ theme }) => ({
  '.rdrCalendarWrapper': {
    color: ' #000000',
    fontSize: '12px',
    width: '100%',
    maxWidth: '264px',
  },
  '.rdrDateDisplayWrapper': {
    background: 'transparent',
  },
  '.rdrDateRangeWrapper': {
    background: 'transparent',
  },
  '.rdrDateInput': {
    width: '132px',
  },
  '.rdrDateDisplay': {
    margin: '0',
    display: 'flex',
    gap: '16px',
    justifyContent: 'flex-start',
  },
  '.rdrDateDisplayItem': {
    borderRadius: '4px',
    backgroundColor: 'transparent',
    boxShadow: '0 1px 2px 0 rgba(35, 57, 66, 0.21)',
    border: '1px solid transparent',
    flexGrow: 'unset',
    minWidth: '100px',
  },
  '.rdrDateDisplayItem + .rdrDateDisplayItem': {
    margin: '0',
  },
  '.rdrDateDisplayItem input': {
    cursor: 'pointer',
    height: '36px',
    lineHeight: '20px',
    border: 'none',
    fontSize: '13px',
    borderRadius: '8px',
    backgroundColor: theme.palette.info.main,
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
  '.rdrMonthAndYearWrapper': {
    alignItems: 'center',
    paddingTop: '0',
    marginTop: '28px',
    marginBottom: '12px',
  },
  '.rdrMonthAndYearPickers': {
    display: 'none',
  },
  '.rdrMonthAndYearPickers select': {
    '-moz-appearance': 'none',
    appearance: 'none',
    '-webkit-appearance': 'none',
    border: '0',
    background: 'transparent',
    padding: '10px 30px 10px 10px',
    borderRadius: '4px',
    outline: '0',
    color: '#3e484f',
    backgroundPosition: 'right 8px center',
    cursor: 'pointer',
    textAlign: 'center',
  },
  '.rdrMonthAndYearPickers select:hover': {
    backgroundColor: 'rgba(0,0,0,0.07)',
  },
  '.rdrMonthPicker, .rdrYearPicker': {
    margin: '0 5px',
  },
  '.rdrNextPrevButton': {
    display: 'block',
    width: '28px',
    height: '28px',
    margin: '0',
    padding: '0',
    border: '0',
    borderRadius: '5px',
    background: theme.palette.darkShades.primary,

    i: {
      display: 'block',
      width: '0',
      height: '0',
      padding: '0',
      textAlign: 'center',
      margin: 'auto',
      transform: 'translate(-3px, 0px)',
      position: 'relative',
    },
  },
  '.rdrNextPrevButton:hover': {
    backgroundColor: theme.palette.darkShades.quaternary,

    i: {
      border: 'none',
    },
  },
  '.rdrPprevButton i': {
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '-3px',
      left: '-1px',
      width: '5px',
      height: '5px',
      border: `solid ${theme.palette.lightShades.secondary}`,
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(135deg)',
    },
  },
  '.rdrNextButton i': {
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: '-3px',
      left: '0',
      width: '5px',
      height: '5px',
      border: `solid ${theme.palette.lightShades.secondary}`,
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(-45deg)',
    },
  },
  '.rdrWeekDays': {
    marginBottom: '8px',

    '.rdrWeekDay': {
      color: theme.palette.text.secondary,
    },
  },
  '.rdrMonth': {
    padding: '0',
    position: 'relative',

    '&:first-of-type': {
      '.rdrMonthName': {
        position: 'absolute',
        width: '176px',
        left: '41px',
        top: '-35px !important',
        color: theme.palette.text.primary,
        textAlign: 'center',
      },
    },
    '&:last-of-type': {
      '.rdrMonthName': {
        position: 'absolute',
        width: '176px',
        right: '50px',
        top: '-35px',
        color: theme.palette.text.primary,
        textAlign: 'center',
      },
    },
  },
  '.rdrMonth .rdrWeekDays': {
    padding: '0',
  },
  '.rdrMonths.rdrMonthsHorizontal': {
    gap: '16px',
  },
  '.rdrDays': {
    gap: '2px',
  },
  '.rdrDay': {
    background: theme.palette.darkShades.primary,
    boxSizing: 'inherit',
    width: 'calc((100% / 7) - 2px)',
    height: '28px',
    position: 'relative',
    font: 'inherit',
    cursor: 'pointer',
    borderRadius: '3px',
    border: `1px solid ${theme.palette.darkShades.primary}`,

    '&.rdrDayPassive': {
      opacity: '0',
    },

    '&.rdrDayHovered': {
      border: `1px solid ${theme.palette.primaryColors.accent}`,
    },

    '.rdrDayNumber span': {
      color: theme.palette.lightShades.secondary,
    },

    '&.rdrDayDisabled:not(.rdrDayToday)': {
      cursor: 'not-allowed',
      background: replaceRgbaOpacity(theme.palette.darkShades.primary as RgbaColor, 0.3),
      borderColor: 'transparent',
      '.rdrDayNumber span': {
        color: replaceRgbaOpacity(theme.palette.lightShades.secondary as RgbaColor, 0.3),
      },
    },
  },

  '.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview': {
    background: replaceRgbaOpacity(theme.palette.primaryColors.accent as RgbaColor, 0.2),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1,
    borderRadius: '3px',
  },

  '.rdrSelected, .rdrInRange': {
    background: replaceRgbaOpacity(theme.palette.primaryColors.accent as RgbaColor, 0.2),
    position: 'absolute',
    top: '0',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '3px',
  },
  '.rdrStartEdge, .rdrEndEdge': {
    background: theme.palette.primaryColors.accent,
    position: 'absolute',
    top: '0',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '3px',
  },
}));

export const MobileDateInput = styled('input')(({ theme }) => ({
  padding: '8px 16px',
  cursor: 'pointer',
  height: '36px',
  lineHeight: '20px',
  border: 'none',
  fontSize: '13px',
  borderRadius: '8px',
  backgroundColor: theme.palette.info.main,
  width: '100%',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
}));
