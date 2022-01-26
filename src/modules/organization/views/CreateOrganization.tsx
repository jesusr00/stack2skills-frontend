import {
  VerticalBox,
  HorizontalBox,
  TextField,
  VerticalLogoBox,
  Button,
  RootContainer,
  HeadTypografy,
  LogoPaper,
} from './styles';
import { Avatar, Box, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useServerManager } from '~/common/axios';
import { useNavigate } from 'react-router-dom';

interface organizationData {
  name: string;
  description?: string;
}

export default function CreateOrganization(): JSX.Element {
  const [t] = useTranslation();
  const [organizationData, setOrganizationData] = useState<organizationData>({
    name: '',
  });
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  const serverManager = useServerManager();
  const navigate = useNavigate();
  const handleChangeData =
    (prop: keyof organizationData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOrganizationData({ ...organizationData, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    setRequestInProgress(true);
    serverManager.createOrganization(organizationData).then(() => {
      navigate('/app');
      setRequestInProgress(false);
    });
  };

  return (
    <RootContainer>
      <Box>
        <HeadTypografy variant="h4">{t('organization.head')}</HeadTypografy>
        <HorizontalBox>
          <VerticalBox>
            <TextField
              fullWidth
              label={t('organization.name')}
              value={organizationData.name}
              required
              onChange={handleChangeData('name')}
            />
            <TextField
              fullWidth
              label={t('organization.description')}
              multiline
              maxRows={5}
              value={organizationData.description}
              onChange={handleChangeData('description')}
            />
            <Button
              variant={'contained'}
              disabled={organizationData.name == '' || requestInProgress}
              onClick={handleSubmit}
            >
              {requestInProgress ? (
                <CircularProgress size={24} />
              ) : (
                t('organization.create')
              )}
            </Button>
          </VerticalBox>
          <VerticalLogoBox>
            <LogoPaper elevation={2}>
              <Avatar sx={{ width: 126, height: 126 }} />
            </LogoPaper>
          </VerticalLogoBox>
        </HorizontalBox>
      </Box>
    </RootContainer>
  );
}
