import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';

// Application-wide configuration — providers for all modules
export const appConfig: ApplicationConfig = {
  providers: [
    // Global error listeners
    provideBrowserGlobalErrorListeners(),

    // Router with all pre-configured routes
    provideRouter(routes),

    // HttpClient with JWT auth interceptor
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
