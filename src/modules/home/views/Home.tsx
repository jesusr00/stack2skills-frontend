import { useTranslation } from 'react-i18next';
import { Typography, AppBar, Toolbar, Button, Grid } from '@mui/material';

import {
  ButtonContainer,
  Description,
  RootContainer,
  SvgImage,
  TextContainer,
  Title,
} from './styles';

function Home(): JSX.Element {
  const [t] = useTranslation();

  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }} fontWeight={700}>
            Stack2Skill
          </Typography>
          {/* <Button variant={'outlined'} color={'inherit'}>
            {t('home.login')}
          </Button> */}
        </Toolbar>
      </AppBar>
      <RootContainer container>
        <TextContainer item xs={12} sm={12} md={7} xl={7}>
          <Title variant={'h3'}>{t('home.title')}</Title>
          <Description variant={'h6'}>{t('home.subtitle')}</Description>
          <ButtonContainer>
            <Button href="sign-in" variant="contained">
              {t('home.login')}
            </Button>
          </ButtonContainer>
        </TextContainer>
        <Grid item xs={12} sm={12} md={5} xl={5}>
          <SvgImage />
        </Grid>
      </RootContainer>
    </>
  );
}

export default Home;
