import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  private readonly logger = inject(LoggerService);

  init(): Promise<void> {
    return new Promise(resolve => {
      this.logger.info('App initializing...');
      // Future: load remote config, validate auth token, boot feature flags, etc.
      resolve();
    });
  }
}
