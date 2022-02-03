import { HeadContainer, BodyContainer, Item, Box } from './styles';
import { useTranslation } from 'react-i18next';
import { Avatar, Typography, Grid, Icon } from '@mui/material';
import { useMemo } from 'react';

import { ReactComponent as RepoIcon } from '~/assets/vectors/repoIcon.svg';
import { ReactComponent as ProjectsIcon } from '~/assets/vectors/projectIcon.svg';
import { ReactComponent as OrganizationIcon } from '~/assets/vectors/organizationIcon.svg';
import { appStore } from '~/common';

export default function MyAccount(): JSX.Element {
  const [t] = useTranslation();

  const avatarSrc = useMemo<string>(() => {
    return appStore.userData?.picture || '';
  }, [appStore.userData]);

  return (
    <>
      <HeadContainer>
        <Avatar sx={{ width: 112, height: 112 }} src={avatarSrc} />
        <Typography variant={'h4'} align={'center'}>
          {t('account.welcome')}, {appStore.userData?.firstName}{' '}
          {appStore.userData?.lastName}
        </Typography>
      </HeadContainer>
      <BodyContainer container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Item elevation={4}>
            <Box>
              <Typography variant={'h5'}>{t('account.edit.title')}</Typography>
              <Typography variant={'body1'}>
                {t('account.edit.subtitle')}
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: 112,
                height: 112,
                display: { xs: 'none', md: 'block' },
              }}
              src={avatarSrc}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item elevation={4}>
            <Typography variant={'h5'}>{t('account.projects')}</Typography>
            <Icon
              sx={{
                width: 'auto',
                height: 'auto',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <ProjectsIcon width={'80px'} height={'80px'} />
            </Icon>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item elevation={4}>
            <Typography variant={'h5'}>{t('account.repositories')}</Typography>
            <Icon
              sx={{
                width: 'auto',
                height: 'auto',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <RepoIcon width={'70px'} height={'70px'} />
            </Icon>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item elevation={4}>
            <Typography variant={'h5'}>{t('account.organizations')}</Typography>
            <Icon
              sx={{
                width: 'auto',
                height: 'auto',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <OrganizationIcon width={'80px'} height={'80px'} />
            </Icon>
          </Item>
        </Grid>
      </BodyContainer>
    </>
  );
}
