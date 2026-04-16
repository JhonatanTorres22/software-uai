import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';

export const noAuthGuard: CanActivateFn = () => {
  const authenticatedSignal = inject(AuthenticatedSignal);
  const router = inject(Router);

  if (!authenticatedSignal.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree([`/${authenticatedSignal.selectedModuleRoute()}`]);
};