import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ProviderOctdaModule } from './core/providers/provider-octda.module';
import { ProviderSilogiModule } from './core/providers/provider-silogi.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authenticatedInterceptor } from '@/authenticated/infrastructure/interceptors/authenticated.interceptor';
import { apiResponseInterceptor } from './shared/interceptors/api-response.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([apiResponseInterceptor, authenticatedInterceptor])),
    provideRouter(routes),
    importProvidersFrom(ProviderOctdaModule, ProviderSilogiModule),
    provideAnimations(),
    MessageService,
    ConfirmationService,
    DialogService,
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
