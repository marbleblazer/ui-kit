import {
    AccordionSummary as MUIAccordionSummary,
    Accordion as MUIAccordion,
    ListItem as MUIListItem,
    styled,
    AccordionActions as MUIAccordionActions,
} from '@mui/material';

export const ListItem = styled(MUIListItem)(({ theme }) => ({
    padding: '8px 12px',
    width: '100%',
    height: '56px',
    borderBottom: '1px solid',
    borderColor: theme.palette.border.border3,
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '&:hover': {
        backgroundColor: theme.palette.background.background7,
        borderRadius: '8px',
        '.MuiTypography-body1': {
            color: theme.palette.base.color6,
        },
    },
    '.MuiListItemSecondaryAction-root': {
        position: 'relative',
        top: 'auto',
        right: 'auto',
        transform: 'none',
        height: '100%',
    },
}));

export const AccordionListItem = styled(MUIListItem)(({ theme }) => ({
    width: '100%',
    borderBottom: '1px solid',
    padding: 0,
    borderColor: theme.palette.border.border3,
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

    // '.MuiListItemSecondaryAction-root': {
    //     position: 'relative',
    //     top: 'auto',
    //     right: 'auto',
    //     transform: 'none',
    //     height: '100%',
    // },
}));

export const Accordion = styled(MUIAccordion)(() => ({
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    position: 'relative',
    boxShadow: 'none',
    margin: 0,
    '.accordion-summary-wrapper': {
        height: '56px',
        borderRadius: '8px',
        padding: '8px 12px',
    },
    '.MuiCollapse-root': {
        marginTop: '4px',
    },
}));

export const AccordionSummary = styled(MUIAccordionSummary)(() => ({
    width: '100%',
    position: 'relative',
    minHeight: 'auto',
    borderRadius: '8px',
    padding: 0,
    '.content-container': {
        order: 0,
    },

    '&.Mui-expanded': {
        minHeight: 'auto',
    },
    '.MuiAccordionSummary-content': {
        margin: 0,
        alignItems: 'center',
    },
}));

export const AccordionActions = styled(MUIAccordionActions)(() => ({
    padding: 0,
}));
