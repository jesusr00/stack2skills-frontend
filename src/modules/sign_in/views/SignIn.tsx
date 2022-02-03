import { Typography, Box } from '@mui/material';
import Lottie from 'react-lottie-player';
import {
  RootContainer,
  BoxContainer,
  SignInButton,
  SignInCard,
  SignInHead,
  IssuesLink,
} from './styles';
import SignInAnimation from '~/assets/Lottie/sign-in-anim.json';
import { ReactComponent as MicrosoftIcon } from '~/assets/vectors/microsoft.svg';
import { ReactComponent as GoogleIcon } from '~/assets/vectors/google.svg';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useMemo } from 'react';
import { useServerManager } from '~/common/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { appStore } from '~/common';

const SignIn = (): React.ReactElement => {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const { search } = useLocation();
  const navigate = useNavigate();

  const [providers, setProviders] = useState<string[]>([]);
  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    const accessToken = query.get('accessToken');
    const firstName = query.get('firstName');
    const lastName = query.get('lastName');
    const email = query.get('email');
    const picture = query.get('picture');

    if (accessToken && firstName && lastName && email && picture) {
      appStore.setUserData({
        accessToken,
        firstName,
        lastName,
        email,
        picture,
      });
      navigate('/app');
    }
  }, [search]);

  useEffect(() => {
    serverManager.getGlogalConfig().then((r) => {
      setProviders(r.data.providers);
    });
  }, []);

  return (
    <RootContainer>
      <SignInCard>
        <SignInHead>{t('signIn.signInTitle')}</SignInHead>
        <BoxContainer>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-start'}
          >
            {providers.some((provider) => provider === 'GOOGLE') && (
              <SignInButton
                href={`${process.env.REACT_APP_API_URL}/auth/google`}
                startIcon={<GoogleIcon height={'20'} />}
              >
                {t('signIn.google')}
              </SignInButton>
            )}
            {providers.some((provider) => provider === 'MICROSOFT') && (
              <SignInButton startIcon={<MicrosoftIcon height={'20'} />}>
                {t('signIn.microsoft')}
              </SignInButton>
            )}
          </Box>
          <Lottie
            loop
            animationData={SignInAnimation}
            play
            style={{ height: 300, marginLeft: 15 }}
          />
        </BoxContainer>
        <IssuesLink href="#" color={'#686868'} underline="none">
          <Typography variant={'subtitle2'} fontWeight="700">
            {t('signIn.issues')}
          </Typography>
        </IssuesLink>
      </SignInCard>
    </RootContainer>
  );
};

export default SignIn;
