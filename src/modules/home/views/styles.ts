import { Grid, styled, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ReactComponent as LandingBg } from '~/assets/vectors/landingbg.svg';

export const RootContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  padding: '0 3em 0 6em',
  position: 'relative',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '1em 1em 1em 1em',
    height: '100vh',
  },
}));

export const TextContainer = styled(Grid)(({ theme }) => ({
  paddingTop: '8em',

  [theme.breakpoints.down('md')]: {
    paddingTop: '1em',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  lineHeight: 1.2,
  letterSpacing: 0.72,
  fontWeight: 600,

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '2rem',
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginTop: '7px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: '30px 30px 30px 0',
  textDecoration: 'none',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const SvgImage = styled(LandingBg)(({ theme }) => ({
  marginTop: 20,
  marginRight: -150,
  height: 530,

  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    top: 0,
    opacity: 0.07,
    height: '100vh',
  },
}));

export const Link = styled(RouterLink)(() => ({
  textDecoration: 'none',
}));
