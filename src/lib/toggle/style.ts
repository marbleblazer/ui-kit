import { styled } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@chirp/ui/lib';

export const Toggle = styled('label')`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: center;
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

export const Checkmark = styled('span')(({ theme }) => ({
    width: '32px',
    height: '18px',
    position: 'relative',
    borderRadius: '20px',
    border: `1px solid`,
    borderColor: theme.palette.base.color6,
}));

export const CheckmarkPin = styled(Box)<{ checked: boolean }>(({ checked, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '12px',
    width: '12px',
    left: checked ? '15px' : '3px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.base.color6,
    borderColor: theme.palette.base.color6,
    borderRadius: '17px',
    transition: '0.4s',
}));

export const Label = styled(Typography)<{ component: string }>(({ theme }) => ({
    marginRight: '12px',
    userSelect: 'none',
    fontSize: '12px',
    color: theme.palette.text.text7,
}));
