import { ReactNode } from 'react';
import { CommonContext, createCommonStore } from '.';
import { useLocalObservable } from 'mobx-react-lite';

interface CommonProviderProps {
  children: ReactNode;
}

export default function CommonProvider(
  props: CommonProviderProps,
): JSX.Element {
  const commonStore = useLocalObservable(createCommonStore);

  return (
    <CommonContext.Provider value={commonStore}>
      {props.children}
    </CommonContext.Provider>
  );
}
