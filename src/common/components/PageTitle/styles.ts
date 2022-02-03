import { styled, Typography as MuiTypography } from '@mui/material';

export const Typography = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.grey[400],
  whiteSpace: 'pre',
}));

export const Grow = styled('div')(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export const PageTitleContainer = styled('div')<{
  disableMarginBottom: boolean;
}>(({ theme, disableMarginBottom }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(2),
  marginBottom: disableMarginBottom ? theme.spacing(0) : theme.spacing(4),
}));
