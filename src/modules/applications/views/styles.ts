import {
  Container,
  styled,
  TextField as MuiTextField,
  Grid,
  Paper,
  FormControl,
  Fab as MuiFab,
} from '@mui/material';

export const RootContainer = styled(Container)(() => ({
  marginTop: 70,
  marginBottom: 20,
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
export const AppNameField = styled(MuiTextField)(() => ({
  marginBottom: 15,
  width: '90%',
}));

export const TextField = styled(MuiTextField)(() => ({
  width: '90%',
  marginBottom: 15,
}));

export const URLRepo = styled(MuiTextField)(() => ({
  width: '90%',
  marginBottom: 15,
}));
export const FrameworkSelect = styled(FormControl)(() => ({
  width: '90%',
  marginBottom: 15,
}));

export const LogoCard = styled(Paper)(() => ({
  width: 250,
  height: 250,
  borderRadius: 15,
  margin: '0 auto 40px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
}));

export const Fab = styled(MuiFab)(() => ({
  position: 'absolute',
  right: 10,
  bottom: 10,
}));
