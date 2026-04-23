import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from '@/authenticated/ui/guards/auth.guard';
import { noAuthGuard } from '@/authenticated/ui/guards/no-auth.guard';
import { permissionGuard } from '@/authenticated/ui/guards/permission.guard';

const octdaChildren: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { permissionKey: 'dashboard' },
    loadComponent: () =>
      import('./pages-octda/dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
    {
    path: 'categoria',
    loadComponent: () =>
      import('./pages-octda/categoria/ui/page-categoria').then((m) => m.PageCategoria)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages-octda/dashboard/dashboard.component').then((m) => m.DashboardComponent)
  }
];

const silogiChildren: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { permissionKey: 'dashboard' },
    loadComponent: () =>
      import('./page-silogi/dashboard/ui/dashboard-page').then((m) => m.DashboardPage)
  },
  {
    path: 'configuracion/usuario',
    loadComponent: () =>
      import('./page-silogi/configuracion/usuario/ui/usuario-page').then((m) => m.UsuarioPage)
  },
  {
    path: 'categoria',
    loadComponent: () =>
      import('./page-silogi/categoria/ui/page-categoria').then((m) => m.PageCategoria)
  },
  {
    path: 'marca',
    loadComponent: () =>
      import('./page-silogi/marca/ui/page-marca').then((m) => m.PageMarca)
  },
  {
    path: 'unidad-medida',
    loadComponent: () =>
      import('./page-silogi/unidad-de-medida/ui/page-unidad-de-medida').then((m) => m.PageUnidadDeMedida)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-silogi/dashboard/ui/dashboard-page').then((m) => m.DashboardPage)
  },
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./authenticated/ui/authenticated').then((m) => m.Authenticated)
  },
  {
    path: 'octda',
    component: LayoutComponent,
    canActivate: [authGuard],
    // canActivateChild: [permissionGuard],
    children: octdaChildren
  },
  {
    path: 'silogi',
    component: LayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [permissionGuard],
    children: silogiChildren
  },
  { path: '**', redirectTo: 'auth' }
];
