import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const Root = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.text.tertiary};
`;
