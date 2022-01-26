import {
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  List,
  ListItemText,
  IconButton,
  ListItemButton,
  Dialog,
  ListItemIcon,
  Checkbox,
} from '@mui/material';
import { DialogTitle } from './styles';
import {
  CreateNewFolder as CreateNewFolderIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import appStore from '~/common/store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Organization } from '~/types/Organization';

const SelectOrganizationDialog = observer(() => {
  const [t] = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const changeOrg = (org: Organization) => {
    appStore.changeOrganization(org);
    navigate(pathname + '?organization=' + org.id);
  };

  return (
    <Dialog
      fullWidth
      open={appStore.isOpenSelectOrganizationDialog}
      maxWidth={'sm'}
      keepMounted={false}
      onClose={() => appStore.toggleIssOpenSelectOrganizationDialog()}
    >
      <DialogTitle>
        {t('common.select-organization')}
        <div>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <Link to={'/app/organization/create'}>
            <IconButton
              onClick={() => appStore.toggleIssOpenSelectOrganizationDialog()}
            >
              <CreateNewFolderIcon />
            </IconButton>
          </Link>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <List>
            {appStore.organizations?.map((org) => (
              <ListItemButton
                onClick={() => changeOrg(org)}
                selected={org.id === appStore.organization?.id}
                key={org.id}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={org.id === appStore.organization?.id}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText>{org.name}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => appStore.toggleIssOpenSelectOrganizationDialog()}
        >
          {t('common.agree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default SelectOrganizationDialog;
