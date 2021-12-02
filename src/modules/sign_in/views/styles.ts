import { Button, Link, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const RootContainer = styled('div')(({ theme }) => ({
  backgroundImage: `linear-gradient(to bottom right, #A7D6FF, #7FF8FE)`,
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '5vh',
  },
}));

export const SignInCard = styled(Paper)(({ theme }) => ({
  width: '50vw',
  maxWidth: 800,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: 40,
  boxShadow: '3px 3px 7px #686868',
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
}));

export const SignInHead = styled(Typography)({
  background: `linear-gradient(to right, #339ff7,  #00F2FE, #00F2FE, #00F2FE, #00F2FE, #00F2FE)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontSize: '2.2rem',
});

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down(1367)]: {
    flexDirection: 'column-reverse',
    marginBottom: 30,
  },
}));

export const SignInButton = styled(Button)(({ theme }) => ({
  border: `2px solid #A7D6FF`,
  borderRadius: '6px',
  textTransform: 'none',
  marginTop: 10,
  minWidth: 300,
  textAlign: 'start',
  color: 'black',
  '&:hover': {
    border: `2px solid #339ff7`,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },
}));

export const IssuesLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  [theme.breakpoints.down(1367)]: {
    margin: 'auto auto',
  },
}));
