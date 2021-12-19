import { HeadContainer, BodyContainer, Item, Box } from './styles';
import { useTranslation } from 'react-i18next';
import { Avatar, Typography, Grid } from '@mui/material';
import { useMemo } from 'react';
import avatar from '~/assets/images/user.jpg';

export default function MyAccount() {
  const [t] = useTranslation();

  const avatarSrc = useMemo<string>(() => {
    return 'https://www.gstatic.com/identity/boq/accountsettingsmobile/dataandpersonalization_icon_96x96_cdb6dff2e31ed6745ece4662231bfd48.png';
  }, []);

  return (
    <>
      <HeadContainer>
        <Avatar sx={{ width: 112, height: 112 }} src={avatar} />
        <Typography variant={'h4'} align={'center'}>
          {t('account.welcome')}, Ernesto Fuentes Gonzales
        </Typography>
      </HeadContainer>
      <BodyContainer container spacing={4}>
        <Grid item xs={6}>
          <Item elevation={4}>
            <Box>
              <Typography variant={'h5'}>{t('account.edit.title')}</Typography>
              <Typography variant={'body1'}>
                {t('account.edit.subtitle')}
              </Typography>
            </Box>
            <Avatar sx={{ width: 112, height: 112 }} src={avatarSrc} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={4}>
            <Typography variant={'h5'}>Proyectos</Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={4}>
            <Typography variant={'h5'}>Reposiotios</Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={4}>
            <Typography variant={'h5'}>Organizaciones</Typography>
          </Item>
        </Grid>
      </BodyContainer>
    </>
  );
}
