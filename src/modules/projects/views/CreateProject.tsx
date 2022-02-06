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
import { useSnackbar } from 'notistack';
import ProjectData from '~/types/ProjectData';

export default function CreateProject(): JSX.Element {
  const [t] = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const serverManager = useServerManager();
  const navigate = useNavigate();

  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
  });
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  const handleChangeData =
    (prop: keyof ProjectData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setProjectData({ ...projectData, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    setRequestInProgress(true);
    serverManager.createProject(projectData).then(() => {
      enqueueSnackbar(t('projects.created'), { variant: 'success' });
      navigate('/app/projects');
      setRequestInProgress(false);
    });
  };

  return (
    <RootContainer>
      <Box>
        <HeadTypografy variant="h4">{t('projects.head')}</HeadTypografy>
        <HorizontalBox>
          <VerticalBox>
            <TextField
              fullWidth
              label={t('projects.name')}
              value={projectData.name}
              required
              onChange={handleChangeData('name')}
            />
            <TextField
              fullWidth
              label={t('projects.description')}
              multiline
              maxRows={5}
              value={projectData.description}
              onChange={handleChangeData('description')}
            />
            <Button
              variant={'contained'}
              disabled={projectData.name == '' || requestInProgress}
              onClick={handleSubmit}
            >
              {requestInProgress ? (
                <CircularProgress size={24} />
              ) : (
                t('projects.create')
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
