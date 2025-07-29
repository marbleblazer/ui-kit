import {
    ListItem,
    styled,
    Accordion as MUIAccordion,
    AccordionSummary as MUIAccordionSummary,
    AccordionActions as MUIAccordionActions,
} from '@mui/material';

export const AccordionListItem = styled(ListItem)(({ theme }) => ({
    width: '100%',
    padding: 0,
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '.MuiAccordionActions-root': {
        svg: {
            color: theme.palette.text.text8,
        },
    },
    '&:hover': {
        '.MuiTypography-body1.title': {
            color: theme.palette.base.color6,
        },
        '.accordion-summary-wrapper, .MuiCollapse-root': {
            borderRadius: '8px',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            backgroundColor: theme.palette.background.background7,
        },
    },
}));

export const Accordion = styled(MUIAccordion)(() => ({
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    position: 'relative',
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    '.MuiCollapse-root': {
        marginTop: '24px',
    },
}));

export const AccordionSummary = styled(MUIAccordionSummary)(() => ({
    width: '100%',
    position: 'relative',
    minHeight: 'auto',
    paddingLeft: 0,
    borderRadius: '8px',
    padding: 0,
    '.content-container': {
        order: 0,
    },

    '&.Mui-expanded': {
        minHeight: 'auto',
        margin: 0,
        '.Mui-expanded': {
            margin: 0,
        },
    },
    '.MuiAccordionSummary-content': {
        margin: 0,
        alignItems: 'center',
    },
}));

export const AccordionActions = styled(MUIAccordionActions)(() => ({
    svg: {
        color: 'currentColor !important',
    },
    padding: 0,
}));
