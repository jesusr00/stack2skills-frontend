import {
  Button,
  HeadTypography,
  HorizontalBox,
  RootContainer,
  TextField,
  VerticalBox,
} from './styles';
import { Box } from '@mui/material';
import { RepositorySource } from '~/types/RepositorySource';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useServerManager } from '~/common/axios';

export default function CreateRepositorySource(): JSX.Element {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const [repositorySource, setRepositorySource] = useState<RepositorySource>({
    url: '',
    token: '',
  });

  const handleChangeData =
    (prop: keyof RepositorySource) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRepositorySource({ ...repositorySource, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    serverManager
      .createRepositorySource(repositorySource)
      .then((r) => console.log(r));
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
              label={t('repositorySource.url')}
              value={repositorySource.url}
              required
              onChange={handleChangeData('url')}
            />
            <TextField
              fullWidth
              label={t('repositorySource.token')}
              required
              value={repositorySource.token}
              onChange={handleChangeData('token')}
            />
            <Button
              variant={'contained'}
              disabled={
                repositorySource.url == '' || repositorySource.token === ''
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
