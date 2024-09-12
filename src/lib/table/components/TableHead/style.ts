import { styled } from '@mui/material';
import { TableCell as MuiTableCell } from '@mui/material';

export { Row } from '../../style';

export const HeadCell = styled(MuiTableCell)`
  padding: 18px 12px 12px;
  border: none;
  font-size: 12px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.palette.text.secondary};
  background: ${({ theme }) => theme.palette.info.light};
  white-space: nowrap;
  cursor: auto;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 8px 6px;
  }

  &:first-of-type:before,
  &:last-of-type:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 12px;
    background: inherit;
  }

  &:first-of-type {
    padding-left: 0;

    &:before {
      left: -12px;
    }
  }

  &:last-of-type {
    padding-right: 0;

    &:after {
      right: -12px;
    }
  }
`;
