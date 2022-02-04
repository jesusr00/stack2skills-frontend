import { Button } from './styles';
import {
  ArrowDropDown as ArrowDropDownIcon,
  CorporateFare as CorporateFareIcon,
} from '@mui/icons-material';
import { appStore } from '~/common';
import { observer } from 'mobx-react-lite';

const OrganizationSelect = observer(() => {
  return (
    <Button
      onClick={() => appStore.toggleIssOpenSelectOrganizationDialog()}
      color="inherit"
      startIcon={<CorporateFareIcon />}
      endIcon={<ArrowDropDownIcon />}
    >
      {appStore.organization?.name}
    </Button>
    // <FormControl sx={{ width: '25ch' }} variant="outlined">
    //   <TextField
    //     size="small"
    //     value={appStore.organization?.name}
    //     label={'Organization'}
    //     select
    //     //onClick={handleOpenDialog}
    //     onClickCapture={handleOpenDialog}
    //     onSelect={handleOpenDialog}
    //     SelectProps={{
    //       native: true,
    //     }}
    //     InputProps={{
    //       startAdornment: (
    //         <InputAdornment position="start">
    //           <AccountTreeIcon />
    //         </InputAdornment>
    //       ),
    //     }}
    //   />
    // </FormControl>
    // <FormControl size="small">
    //   <InputLabel>{t('common.org')}</InputLabel>
    //   <Select
    //     value={appStore.organizationId}
    //     //onChange={handleChange}
    //     open={false}
    //     autoWidth
    //     label={t('common.org')}
    //   >
    //     {organizations.map((organization, index) => (
    //       <MenuItem key={index} value={organization.id}>
    //         {organization.name}
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  );
});

export default OrganizationSelect;
