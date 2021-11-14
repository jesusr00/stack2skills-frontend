import { styled } from '@mui/material';

export const FakeToolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
