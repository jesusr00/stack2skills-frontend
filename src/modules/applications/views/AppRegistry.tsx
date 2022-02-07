import {
  Grid,
  Typography,
  Box,
  AvatarGroup,
  Avatar,
  Tooltip,
  IconButton,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  GridContainer,
  LogoCard,
  RootContainer,
  TextField,
  Button,
} from './styles';
import contributors from './fake-data/contributors';
import languages from './fake-data/languages';
import dependencies from './fake-data/dependencies';
import {
  Whatshot as WhatshotIcon,
  AddAPhoto as AddAPhotoIcon,
} from '@mui/icons-material';
import Framework from '~/types/Framework';
import { useEffect, useState } from 'react';
import { useServerManager } from '~/common/axios';
import ProjectData from '~/types/ProjectData';
import { appStore } from '~/common';
import { useSnackbar } from 'notistack';
import ApplicationDTO from '~/types/ApplicationDTO';
import { useNavigate } from 'react-router-dom';

function AppRegistry(): JSX.Element {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [appData, setAppData] = useState<ApplicationDTO>({
    name: '',
    project: '',
    repoUrl: '',
    framework: '',
    description: '',
  });

  const handleChangeData =
    (prop: keyof ApplicationDTO) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAppData({ ...appData, [prop]: event.target.value });
    };

  const setFramework = (event: SelectChangeEvent) =>
    setAppData({ ...appData, framework: event.target.value });

  const setProject = (event: SelectChangeEvent) =>
    setAppData({ ...appData, project: event.target.value });

  const createApp = () => {
    serverManager.createApplication(appData).then(() => {
      enqueueSnackbar(t('applications.created'), { variant: 'success' });
      navigate('/app/apps');
    });
  };

  useEffect(() => {
    serverManager.getFramework().then((r) => setFrameworks(r.data));
  }, []);
  useEffect(() => {
    serverManager.getProject().then((r) => setProjects(r.data));
  }, [appStore.organization]);

  return (
    <RootContainer>
      <GridContainer container spacing={5}>
        <Grid item md={8} xs={12}>
          <TextField
            onChange={handleChangeData('name')}
            required
            label={t('applications.name')}
          />
          <TextField
            onChange={handleChangeData('description')}
            multiline
            maxRows={4}
            rows={4}
            label={t('applications.description')}
            inputProps={{ maxLength: 350 }}
          />
          <TextField
            onChange={handleChangeData('repoUrl')}
            required
            label={t('applications.repository-url')}
          />
          <FormControl required>
            <InputLabel>{t('applications.framework')}</InputLabel>
            <Select
              required
              label={t('applications.framework')}
              onChange={setFramework}
            >
              {frameworks.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel>{t('applications.project')}</InputLabel>
            <Select label={t('applications.project')} onChange={setProject}>
              {projects.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={createApp}>
            {t('applications.create')}
          </Button>
          <Box display="flex" flexDirection="column" alignItems="start">
            <Typography marginBottom={'10px'}>
              {t('applications.contributors')}
            </Typography>
            <AvatarGroup>
              {contributors.map((item) => (
                <Tooltip key={item.name} title={item.name} arrow>
                  <Avatar alt={item.name} src={item.img} />
                </Tooltip>
              ))}
            </AvatarGroup>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <LogoCard elevation={2}>
            <IconButton>
              <AddAPhotoIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </LogoCard>
          <Box marginBottom={2} width={'100%'}>
            <Typography>{t('applications.languages')}</Typography>
            <List>
              {languages.map((item) => (
                <ListItem key={item.id}>
                  <ListItemIcon>
                    <WhatshotIcon />
                  </ListItemIcon>
                  {item.language}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box marginBottom={2}>
            <Typography>{t('applications.dependencies')}</Typography>
            <List>
              {dependencies.map((item) => (
                <ListItem key={item.id}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      {item.dependencie}
                    </Grid>
                    <Grid item xs={6}>
                      {item.version}
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </GridContainer>
    </RootContainer>
  );
}

export default AppRegistry;
