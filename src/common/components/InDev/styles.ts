import { styled, Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.7,
  minHeight: '500px',
  maxWidth: '500px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));
