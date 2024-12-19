import { styled } from '@mui/material';
import { Box } from '@mui/material';

import { FilterItemProps } from '.';

type CheckmarkProps = {
    hasAdornment: boolean;
    component: React.ElementType;
} & Pick<FilterItemProps, 'checked' | 'size' | 'variant'>;

export const Label = styled('label')`
    display: flex;
    width: max-content;
    cursor: pointer;
`;

export const HiddenInput = styled('input')`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`;

export const Checkmark = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hasAdornment',
})<CheckmarkProps>(({ theme, checked, size, variant, hasAdornment }) => ({
    border: '1px solid',
    borderColor: theme.palette.background.background4,
    background: theme.palette.background.background4,
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    userSelect: 'none',
    color: theme.palette.text.text1,
    width: 'max-content',

    '&:hover, &:focus-visible': {
        borderColor: theme.palette.border.border3,
    },

    ...(size === 'small' && {
        maxHeight: '26px',
        fontSize: '12px',
        lineHeight: '20px',
        padding: hasAdornment ? '3px 2px 3px 12px' : '3px 12px',
    }),

    ...(size === 'big' && {
        maxHeight: '32px',
        fontSize: '13px',
        lineHeight: '20px',
        padding: '6px 16px',
    }),

    ...(checked && {
        color: theme.palette.base.color1,
        background: variant === 'primary' ? theme.palette.base.color6 : theme.palette.text.text4,
        borderColor: variant === 'primary' ? theme.palette.base.color6 : theme.palette.text.text4,
    }),
}));

export const Adornment = styled(Box)<Pick<FilterItemProps, 'checked'>>(({ theme, checked }) => ({
    padding: '2px 4px',
    background: checked ? theme.palette.background.background5 : theme.palette.primary.dark,
    color: checked ? theme.palette.base.color1 : theme.palette.text.text1,
    borderRadius: '3px',
    marginLeft: '10px',
    fontSize: '12px',
    lineHeight: '18px',
    minWidth: '22px',
    maxHeight: '22px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}));
