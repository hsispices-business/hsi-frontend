import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { httpInterceptor } from './core/interceptor/http.interceptor';
import { mockInterceptor } from './core/interceptor/mock.interceptor';
import { AppInitializerService } from './core/services/app-initializer.service';
import { APP_CONFIG } from './core/config/app-config.token';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([mockInterceptor, httpInterceptor])),
    provideAppInitializer(() => {
      const svc = inject(AppInitializerService);
      return svc.init();
    }),
  ],
};
