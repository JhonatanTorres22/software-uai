import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';

export const authGuard: CanActivateFn = (_, state) => {
  const authenticatedSignal = inject(AuthenticatedSignal);
  const router = inject(Router);

  if (!authenticatedSignal.isAuthenticated()) {
    return router.createUrlTree(['/auth']);
  }

  const selectedModuleRoute = authenticatedSignal.selectedModuleRoute();

//   if (state.url.startsWith('/page-octda') && selectedModuleRoute !== 'page-octda') {
//     return router.createUrlTree([`/${selectedModuleRoute}`]);
//   }

//   if (state.url.startsWith('/page-silogi') && selectedModuleRoute !== 'page-silogi') {
//     return router.createUrlTree([`/${selectedModuleRoute}`]);
//   }

  return true;
};