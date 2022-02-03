import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { RepositorySource } from '~/types/RepositorySource';
const API_URL = process.env.REACT_APP_API_URL;

class ServerManager {
  private apiAxios: AxiosInstance;

  constructor() {
    this.apiAxios = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }

  googleAuth(): Promise<AxiosResponse> {
    return this.apiAxios.get('/auth/google');
  }

  getGlogalConfig(): Promise<AxiosResponse> {
    return this.apiAxios.get('/config/global');
  }

  getOrganizatios(): Promise<AxiosResponse> {
    return this.apiAxios.get('/organization');
  }

  createOrganization(data: {
    name: string;
    description?: string;
  }): Promise<AxiosResponse> {
    return this.apiAxios.post('/organization', data);
  }

  getRepositorySource(): Promise<AxiosResponse> {
    return this.apiAxios.get('/repository');
  }

  createRepositorySource(data: RepositorySource): Promise<AxiosResponse> {
    return this.apiAxios.post('/repository', data);
  }
}

export default ServerManager;
