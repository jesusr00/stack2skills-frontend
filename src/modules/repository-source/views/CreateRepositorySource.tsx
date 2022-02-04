import {
  Button,
  HeadTypography,
  HorizontalBox,
  RootContainer,
  TextField,
  VerticalBox,
  FormControl,
} from './styles';
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { RepositorySource } from '~/types/RepositorySource';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useServerManager } from '~/common/axios';
import { RepoType } from '~/types/RepoType';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function CreateRepositorySource(): JSX.Element {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [repositorySource, setRepositorySource] = useState<RepositorySource>({
    url: '',
    accessToken: '',
    name: '',
    type: '',
  });

  const handleChangeData =
    (prop: keyof RepositorySource) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRepositorySource({ ...repositorySource, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    serverManager.createRepositorySource(repositorySource).then(() => {
      enqueueSnackbar(t('repositorySource.created'), { variant: 'success' });
      navigate('/app');
    });
  };

  return (
    <RootContainer>
      <Box>
        <HeadTypography variant="h4">
          {t('repositorySource.head')}
        </HeadTypography>
        <HorizontalBox>
          <VerticalBox>
            <TextField
              fullWidth
              label={t('repositorySource.name')}
              value={repositorySource.name}
              required
              onChange={handleChangeData('name')}
            />
            <TextField
              fullWidth
              label={t('repositorySource.url')}
              value={repositorySource.url}
              required
              onChange={handleChangeData('url')}
            />
            <TextField
              fullWidth
              label={t('repositorySource.accessToken')}
              required
              value={repositorySource.accessToken}
              onChange={handleChangeData('accessToken')}
            />
            <FormControl fullWidth>
              <InputLabel>{t('repositorySource.repoType')}</InputLabel>
              <Select
                value={repositorySource.type}
                label={t('repositorySource.repoType')}
                onChange={(event: SelectChangeEvent) =>
                  setRepositorySource({
                    ...repositorySource,
                    type: event.target.value,
                  })
                }
              >
                <MenuItem value={RepoType.Github}>Github</MenuItem>
                <MenuItem value={RepoType.Azure}>Azure</MenuItem>
                <MenuItem value={RepoType.GitLab}>GitLab</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant={'contained'}
              disabled={
                repositorySource.url == '' ||
                repositorySource.accessToken === '' ||
                repositorySource.name === '' ||
                repositorySource.type === ''
              }
              onClick={handleSubmit}
            >
              {t('repositorySource.create')}
            </Button>
          </VerticalBox>
        </HorizontalBox>
      </Box>
    </RootContainer>
  );
}
