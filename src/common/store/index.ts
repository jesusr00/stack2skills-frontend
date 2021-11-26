import { createContext, useContext } from 'react';
import CommonProvider from './CommonProvider';

interface CommonContext {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const createCommonStore = () => ({
  isDrawerOpen: false,
  setIsDrawerOpen(isOpen: boolean) {
    this.isDrawerOpen = isOpen;
  },
});

const CommonContext = createContext<CommonContext>(createCommonStore());

const useCommonStore = () => useContext(CommonContext);

export { CommonProvider, useCommonStore, CommonContext, createCommonStore };
