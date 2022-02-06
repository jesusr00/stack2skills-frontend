import {
  styled,
  Box as MuiBox,
  TextField as MuiTextField,
  Button as MuiButton,
  Container as MuiContainer,
  Typography as MuiTypography,
  Paper as MuiPaper,
} from '@mui/material';

export const RootContainer = styled(MuiContainer)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const HeadTypografy = styled(MuiTypography)(({ theme }) => ({
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

export const VerticalLogoBox = styled(VerticalBox)(({ theme }) => ({
  margin: '2em',
  width: '20%',
  [theme.breakpoints.down('md')]: {
    margin: '1em auto 0 auto',
  },
}));

export const LogoPaper = styled(MuiPaper)(({ theme }) => ({
  width: 160,
  height: 160,
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    margin: '1em',
  },
}));

export const Paper = styled(MuiPaper)(() => ({
  margin: '0.7em',
}));

export const TextField = styled(MuiTextField)(() => ({
  margin: '1em',
  width: 'auto',
}));

export const Button = styled(MuiButton)(() => ({
  margin: '1em',
  width: 'auto',
}));

export const StyledPaper = styled(MuiPaper)(() => ({
  margin: '1em',
  width: 'auto',
}));
