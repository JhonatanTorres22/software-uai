import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router } from '@angular/router';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';

export const permissionGuard: CanActivateChildFn = (childRoute, state) => {
  const authenticatedSignal = inject(AuthenticatedSignal);
  const router = inject(Router);

  const permissionKey = getPermissionKey(childRoute, state.url);

  if (authenticatedSignal.hasPermissionForRoute(permissionKey)) {
    return true;
  }

  return router.createUrlTree([`/${authenticatedSignal.selectedModuleRoute()}/dashboard`]);
};

function getPermissionKey(route: ActivatedRouteSnapshot, currentUrl: string): string {
  const routePermission = route.data['permissionKey'];
  if (typeof routePermission === 'string' && routePermission.trim().length > 0) {
    return routePermission;
  }

  const routePath = route.routeConfig?.path;
  if (typeof routePath === 'string' && routePath.trim().length > 0 && routePath !== ':feature' && routePath !== '**') {
    return routePath;
  }

  return currentUrl;
}