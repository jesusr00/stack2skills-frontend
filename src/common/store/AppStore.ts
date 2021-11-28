import { makeObservable, action, observable } from 'mobx';

class AppStore {
  isDrawerOpen = false;

  constructor() {
    makeObservable<AppStore>(this, {
      isDrawerOpen: observable,
      toggleDrawer: action,
    });
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}

const appStore = new AppStore();

export default appStore;
