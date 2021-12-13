import axios, { AxiosInstance, AxiosResponse } from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class ServerManager {
  apiAxios: AxiosInstance;

  constructor() {
    this.apiAxios = axios.create({
      baseURL: API_URL,
    });
  }

  refreshInstance(): void {
    this.apiAxios = axios.create({
      baseURL: API_URL,
      headers: {},
    });
  }

  googleAuth(): Promise<AxiosResponse> {
    return this.apiAxios.get('/auth/google');
  }
}

export default ServerManager;
