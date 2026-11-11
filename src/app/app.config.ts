import { ApplicationConfig, ErrorHandler, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StarRatingModule } from 'angular-star-rating';
import { CustomErrorHandler } from './utils/error.handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(StarRatingModule.forRoot()),
   { provide: ErrorHandler, useClass: CustomErrorHandler }
  ]
};
