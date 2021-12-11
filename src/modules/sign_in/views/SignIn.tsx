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
import axios from 'axios';

const SignIn = (): React.ReactElement => {
  const [t] = useTranslation();

  const googleAuth = async () => {
    await axios({
      url: `https://staging-stack2skills-yfmnwrj6gq-ue.a.run.app/auth/google`,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

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
            <SignInButton
              onClick={googleAuth}
              startIcon={<GoogleIcon height={'20'} />}
            >
              {t('signIn.google')}
            </SignInButton>
            <SignInButton startIcon={<MicrosoftIcon height={'20'} />}>
              {t('signIn.microsoft')}
            </SignInButton>
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
