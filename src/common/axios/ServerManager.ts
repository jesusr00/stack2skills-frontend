import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import ProjectData from '~/types/ProjectData';
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

    this.apiAxios.interceptors.response.use(
      (res) => res,
      this.unauthorizedInterceptors,
    );
  }

  private unauthorizedInterceptors(error: AxiosError) {
    if (error.response?.status === 401) window.location.href = '/auth/sign-in';

    throw error;
  }

  refreshInstance(): void {
    this.apiAxios = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
      params: {
        organization: new URLSearchParams(window.location.search).get(
          'organization',
        ),
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

  createProject(data: ProjectData): Promise<AxiosResponse> {
    return this.apiAxios.post('/project', data);
  }

  getProject(): Promise<AxiosResponse> {
    return this.apiAxios.get('/project');
  }
}

export default ServerManager;
