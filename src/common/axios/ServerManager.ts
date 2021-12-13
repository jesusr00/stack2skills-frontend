import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class ServerManager {
  apiAxios: AxiosInstance;

  constructor() {
    this.apiAxios = axios.create({
      baseURL: API_URL,
    });
  }

  refreshInstance() {
    this.apiAxios = axios.create({
      baseURL: API_URL,
      headers: {},
    });
  }


  googleAuth(){
    return this.apiAxios.get('/auth/google')
  }

}

export default ServerManager;
