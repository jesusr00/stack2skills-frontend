import {
  styled,
  Box as MuiBox,
  Grid,
  Paper,
  TextField as MuiTextField,
  Button as MuiButton,
  Avatar as MuiAvatar,
} from '@mui/material';

export const HeadContainer = styled(MuiBox)(() => ({
  minHeight: '10em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4em',
}));

export const BodyContainer = styled(Grid)(() => ({
  padding: '3em',
}));

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  height: '12em',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Box = styled(MuiBox)(() => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
}));

export const TextField = styled(MuiTextField)(() => ({
  width: '30%',
  margin: '1em',
  alignSelf: 'center',
}));

export const Button = styled(MuiButton)(() => ({
  width: '15%',
  margin: '1em',
  alignSelf: 'center',
}));

export const EditBodyContainer = styled(BodyContainer)(() => ({
  marginTop: '4em',
}));

export const Avatar = styled(MuiAvatar)(() => ({
  marginBottom: '1em',
  alignSelf: 'center',
}));
