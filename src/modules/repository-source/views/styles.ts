import {
  styled,
  Box as MuiBox,
  TextField as MuiTextField,
  Button as MuiButton,
  Container as MuiContainer,
  Typography as MuiTypography,
  Fab as MuiFab,
} from '@mui/material';

export const RootContainer = styled(MuiContainer)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const HeadTypography = styled(MuiTypography)(({ theme }) => ({
  margin: '2em 2em 0 2em',
  [theme.breakpoints.down('md')]: {
    margin: '1em 0 0 1em',
  },
}));

export const HorizontalBox = styled(MuiContainer)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const VerticalBox = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '2em 4em auto 4em',
  width: '70%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: 0,
  },
}));

export const TextField = styled(MuiTextField)(() => ({
  margin: '1em',
  width: 'auto',
}));

export const Button = styled(MuiButton)(() => ({
  margin: '1em',
  width: 'auto',
}));

export const Fab = styled(MuiFab)(() => ({
  position: 'absolute',
  right: 10,
  bottom: 10,
}));
