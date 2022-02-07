import {
  Container,
  styled,
  TextField as MuiTextField,
  Grid,
  Paper,
  FormControl as MuiFormControl,
  Button as MuiButton,
  TableContainer as MuiTableContainer,
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

export const TextField = styled(MuiTextField)(() => ({
  width: '90%',
  marginBottom: 15,
}));

export const FormControl = styled(MuiFormControl)(() => ({
  width: '90%',
  marginBottom: 15,
}));

export const Button = styled(MuiButton)(() => ({
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

export const StyledPaper = styled(Paper)(() => ({
  margin: '1em',
  width: 'auto',
}));

export const TableContainer = styled(MuiTableContainer)(() => ({
  padding: '1em',
}));
