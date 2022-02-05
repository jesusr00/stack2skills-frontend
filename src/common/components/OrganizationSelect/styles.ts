import {
  styled,
  alpha,
  FormControl as MuiFormControl,
  Button as MuiButton,
} from '@mui/material';

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: 160,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
}));
