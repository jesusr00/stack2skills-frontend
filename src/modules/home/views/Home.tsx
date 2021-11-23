import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, AppBar, Box, Toolbar, Button, Grid } from '@mui/material';

import { ReactComponent as LandingBg } from '~/assets/vectors/landingbg.svg';
import useStyles from './styles';

function Home(): JSX.Element {
  const [t] = useTranslation();
  const classes = useStyles();

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
      <Grid container className={classes.rootContainer}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          xl={7}
          className={classes.textContainer}
        >
          <Typography
            variant={'h3'}
            fontWeight={500}
            letterSpacing={0.72}
            lineHeight={1.2}
          >
            {t('home.title')}
          </Typography>
          <Typography variant={'h6'}>{t('home.subtitle')}</Typography>
          <Box className={classes.buttonContainer}>
            <Button variant="contained" className={classes.startButton}>
              {t('home.login')}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5} xl={5}>
          <LandingBg className={classes.svgImage} />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
