import { AppConfig } from '../app/core/config/app-config.token';

export const environment: AppConfig = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api',
  authUrl: 'http://localhost:3000/auth',
};
