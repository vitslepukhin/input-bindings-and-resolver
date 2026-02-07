import { Routes } from '@angular/router';
import { userResolver } from './user.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'query-params',
    loadComponent: () =>
      import('./query-params.component').then((m) => m.QueryParamsComponent),
  },
  {
    path: 'path-params/:id',
    loadComponent: () =>
      import('./path-params.component').then((m) => m.PathParamsComponent),
  },
  {
    path: 'static-data',
    loadComponent: () =>
      import('./static-data.component').then((m) => m.StaticDataComponent),
    data: {
      title: 'Admin Panel',
      description: 'Управление системой',
      roles: ['admin', 'moderator'],
      features: { canEdit: true, canDelete: false },
    },
  },
  {
    path: 'resolver-data/:userId',
    loadComponent: () =>
      import('./resolver-data.component').then((m) => m.ResolverDataComponent),
    resolve: { user: userResolver },
  },
  {
    path: 'advantages',
    loadComponent: () =>
      import('./advantages.component').then((m) => m.AdvantagesComponent),
  },
];
