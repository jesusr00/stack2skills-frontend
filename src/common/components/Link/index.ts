import { styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));
