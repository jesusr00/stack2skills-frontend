import React from 'react';
import { DrawerHeader } from '~/common/components/Layout/styles';
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
import routes from '~/routes/PrivateRoutes';
import { useCommonStore } from '~/common';
import { Observer } from 'mobx-react-lite';
import { StyledLink } from './styles';

function AppDrawer(): JSX.Element {
  const [t] = useTranslation();
  const { isDrawerOpen, setIsDrawerOpen } = useCommonStore();

  const renderList = () => (
    <List>
      {routes
        .filter((route) => route.showInSidebar)
        .sort((a, b) => a.id - b.id)
        .map((route, index) => (
          <StyledLink to={`/app${route.path}`} key={index}>
            <ListItem button onClick={() => setIsDrawerOpen(false)}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={t(`common.${route.title}`)} />
            </ListItem>
          </StyledLink>
        ))}
    </List>
  );

  return (
    <Observer>
      {() => (
        <Drawer
          open={isDrawerOpen}
          anchor={'left'}
          onClose={() => setIsDrawerOpen(true)}
          onBackdropClick={() => setIsDrawerOpen(true)}
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
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Box sx={{ width: 250 }} role="presentation">
            {renderList()}
          </Box>
        </Drawer>
      )}
    </Observer>
  );
}

export default AppDrawer;
