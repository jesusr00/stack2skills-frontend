import { makeObservable, action, observable } from 'mobx';
import { Organization } from '~/types/Organization';
import { ServerManager } from '~/common/axios';
import { User } from '~/types';

class AppStore {
  isDrawerOpen = false;
  organization?: Organization;
  isOpenSelectOrganizationDialog = false;
  organizations?: Organization[];
  serverManager: ServerManager = new ServerManager();
  userData?: User = {
    accessToken: localStorage.getItem('accessToken') || '',
    firstName: localStorage.getItem('firstName') || '',
    lastName: localStorage.getItem('lastName') || '',
    email: localStorage.getItem('email') || '',
    picture: localStorage.getItem('picture') || '',
  };
  providers: string[] = [];

  constructor() {
    makeObservable<AppStore>(this, {
      isDrawerOpen: observable,
      organization: observable,
      isOpenSelectOrganizationDialog: observable,
      organizations: observable,
      userData: observable,
      providers: observable,
      toggleDrawer: action,
      changeOrganization: action,
      toggleIssOpenSelectOrganizationDialog: action,
      setOrgamizations: action,
      setUserData: action,
    });
  }

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  changeOrganization(organization: Organization): void {
    this.organization = organization;
  }
  toggleIssOpenSelectOrganizationDialog(): void {
    this.isOpenSelectOrganizationDialog = !this.isOpenSelectOrganizationDialog;
  }
  setOrgamizations(org: Organization[]): void {
    this.organizations = org;
  }
  setUserData(userData: User): void {
    this.userData = userData;
    localStorage.setItem('accessToken', userData.accessToken);
    localStorage.setItem('firstName', userData.firstName);
    localStorage.setItem('lastName', userData.lastName);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('picture', userData.picture);
  }
  setProviders(providers: string[]): void {
    this.providers = providers;
  }
}

const appStore = new AppStore();

export { AppStore };
export default appStore;
