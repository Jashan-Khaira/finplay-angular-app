import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApiService } from './core/services/api.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([TokenInterceptor, RequestInterceptor, ResponseInterceptor])
    ),
    provideRouter(routes),
]
};
