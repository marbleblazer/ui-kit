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
  borderColor: theme.palette.darkShades.primary,
  background: theme.palette.darkShades.primary,
  borderRadius: '3px',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  userSelect: 'none',
  color: theme.palette.lightShades.secondary,
  width: 'max-content',

  '&:hover, &:focus-visible': {
    borderColor: theme.palette.borders.secondary,
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
    color: theme.palette.secondary.main,
    background: variant === 'primary' ? theme.palette.primaryColors.accent : theme.palette.darkShades.ternary,
    borderColor: variant === 'primary' ? theme.palette.primaryColors.accent : theme.palette.darkShades.ternary,
  }),
}));

export const Adornment = styled(Box)<Pick<FilterItemProps, 'checked'>>(({ theme, checked }) => ({
  padding: '2px 4px',
  background: checked ? theme.palette.secondary.main : theme.palette.primary.dark,
  color: checked ? theme.palette.secondary.contrastText : theme.palette.secondary.main,
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
