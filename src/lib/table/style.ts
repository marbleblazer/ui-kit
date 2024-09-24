import { styled } from '@mui/material';
import { TableCell, TableRow } from '@mui/material';

export const Row = styled(TableRow)`
    position: relative;

    &:hover {
            background-color: 'red'};

        td:first-of-type {
            position: relative;
        }

        td:last-of-type {
            padding-right: 0;
            position: relative;
        }

        td:first-of-type:before,
        td:last-of-type:after {
            content: '';
            position: absolute;
            top: -1px;
            bottom: -1px;
            width: 12px;
            background-color:  'red'};
        }

        td:first-of-type:before {
            left: -12px;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }

        td:last-of-type:after {
            right: -12px;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
    }

    td:first-of-type {
        padding-left: 0;
    }

    td:last-of-type {
        padding-right: 0;
    }
`;

export const Cell = styled(TableCell)`
    height: ${({ theme }) => theme.spacing(5)};
    padding: 12px;
    border: none;
    border-bottom: '1px solid red';
    font-family: ${({ theme }) => theme.typography.fontFamily};
    opacity: 1;
    font-size: 12px;

    ${({ theme }) => theme.breakpoints.down('lg')} {
        padding: 8px 6px;
    }
`;
