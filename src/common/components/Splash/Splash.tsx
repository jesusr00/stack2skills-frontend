import Lottie from 'react-lottie-player';
import loadingSplashAnim from '~/assets/lotties/loading_splash_anim.json';

function Splash(): JSX.Element {
  return (
    <Lottie
      loop
      animationData={loadingSplashAnim}
      play
      style={{ width: 150, height: 150 }}
    />
  );
}

export default Splash;
