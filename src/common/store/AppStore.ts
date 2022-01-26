import { makeObservable, action, observable } from 'mobx';
import { Organization } from '~/types/Organization';
import { ServerManager } from '~/common/axios';

class AppStore {
  isDrawerOpen = false;
  organization?: Organization;
  isOpenSelectOrganizationDialog = false;
  organizations?: Organization[];
  serverManager: ServerManager = new ServerManager();

  constructor() {
    makeObservable<AppStore>(this, {
      isDrawerOpen: observable,
      organization: observable,
      isOpenSelectOrganizationDialog: observable,
      organizations: observable,
      toggleDrawer: action,
      changeOrganization: action,
      toggleIssOpenSelectOrganizationDialog: action,
    });
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  changeOrganization(organization: Organization) {
    this.organization = organization;
  }
  toggleIssOpenSelectOrganizationDialog() {
    this.isOpenSelectOrganizationDialog = !this.isOpenSelectOrganizationDialog;
  }
  setOrgamizations(org: Organization[]) {
    this.organizations = org;
  }
}

const appStore = new AppStore();

export default appStore;
