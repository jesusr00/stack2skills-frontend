import Lottie from 'react-lottie-player';
import loadingSplashAnim from '~/assets/lotties/loading_splash_anim.json';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import appStore from '~/common/store';
import { useServerManager } from '~/common/axios';

function Splash(): JSX.Element {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const serverManager = useServerManager();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    serverManager.getOrganizatios().then((r) => {
      appStore.setOrgamizations(r.data);
      appStore.organization = query.get('organization')
        ? appStore.organizations?.filter(
            (org) => org.id === query.get('organization'),
          )[0]
        : appStore.organizations?.[0];
      if (pathname.match('/app'))
        navigate(pathname + '?organization=' + appStore.organization?.id);
    });
  }, [query]);

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
