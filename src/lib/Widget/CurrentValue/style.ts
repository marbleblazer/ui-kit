import { styled } from '@mui/material';
import { Stack, Typography } from '@mui/material';

export const Wrapper = styled(Stack)({
  fontWeight: 500,
  fontSize: '40px',
  lineHeight: 1,
  textAlign: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  display: '-webkit-box',
  boxOrient: 'vertical',
  WebkitBoxOrient: 'vertical',
  lineClamp: '2',
  WebkitLineClamp: '2',
});

export const Postfix = styled(Typography)(() => ({
  display: 'inline',
  paddingLeft: '2px',
  fontSize: '16px',
  verticalAlign: 'super',
}));

export const NoDataText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: theme.palette.text.primary,
}));
