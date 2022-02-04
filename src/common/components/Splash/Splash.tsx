import Lottie from 'react-lottie-player';
import loadingSplashAnim from '~/assets/lotties/loading_splash_anim.json';
//import { makeStyles } from '';
import { styled } from '@mui/material';

const StyledLottie = styled(Lottie)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  width: 150,
  height: 150,
}));

function Splash(): JSX.Element {
  return <StyledLottie loop animationData={loadingSplashAnim} play />;
}

export default Splash;
