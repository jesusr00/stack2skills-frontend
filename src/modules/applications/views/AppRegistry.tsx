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
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  AppNameField,
  FrameworkSelect,
  GridContainer,
  LogoCard,
  RootContainer,
  TextField,
  URLRepo,
} from './styles';

import contributors from './fake-data/contributors';
import frameworks from './fake-data/frameworks';
import languages from './fake-data/languages';
import dependencies from './fake-data/dependencies';

import {
  Whatshot as WhatshotIcon,
  AddAPhoto as AddAPhotoIcon,
} from '@mui/icons-material';

function AppRegistry(): JSX.Element {
  const [t] = useTranslation();

  return (
    <RootContainer>
      <GridContainer container spacing={5}>
        <Grid item md={8} xs={12}>
          <AppNameField label={t('applications.name')} />
          <TextField
            multiline
            maxRows={4}
            rows={4}
            label={t('applications.description')}
            inputProps={{ maxLength: 350 }}
          />
          <URLRepo label={t('applications.repository-url')} />

          <FrameworkSelect>
            <InputLabel>{t('applications.framework')}</InputLabel>
            <Select label={t('applications.framework')}>
              {frameworks.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FrameworkSelect>
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
