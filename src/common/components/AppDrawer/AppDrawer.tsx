import React, { useMemo } from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
} from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

import routes from '~/routes/PrivateRoutes';
import { appStore } from '~/common';
import { StyledLink, DrawerHeader } from './styles';

const AppDrawer = observer(() => {
  const [t] = useTranslation();

  const routesMemorized = useMemo(() => {
    return routes
      .filter((route) => route.showInSidebar)
      .sort((a, b) => a.id - b.id);
  }, []);

  const renderList = () => (
    <List>
      {routesMemorized.map((route, index) => (
        <StyledLink to={`/app${route.path}`} key={index}>
          <ListItem button onClick={() => appStore.toggleDrawer()}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={t(`common.${route.title}`)} />
          </ListItem>
        </StyledLink>
      ))}
    </List>
  );

  return (
    <Drawer
      open={appStore.isDrawerOpen}
      anchor="left"
      onClose={() => appStore.toggleDrawer()}
    >
      <DrawerHeader>
        <Typography
          variant="h4"
          sx={{ flexGrow: 1 }}
          color={'primary'}
          fontWeight={700}
        >
          Stack2Skill
        </Typography>
        <IconButton onClick={() => appStore.toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Box sx={{ width: 250 }} role="presentation">
        {renderList()}
      </Box>
    </Drawer>
  );
});

export default AppDrawer;
