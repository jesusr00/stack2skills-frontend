import { styled, DialogTitle as MuiDialogTitle } from '@mui/material';

export const DialogTitle = styled(MuiDialogTitle)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

// export const ListItemStyled = styled(ListItemButton)<{ isActive: boolean }>(
//   ({ isActive }) => ({
//     background: isActive ? 'red' : 'black',
//   }),
// );
