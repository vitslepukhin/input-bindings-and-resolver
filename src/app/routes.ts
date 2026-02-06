import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { QueryParamsComponent } from './query-params.component';
import { PathParamsComponent } from './path-params.component';
import { StaticDataComponent } from './static-data.component';
import { ResolverDataComponent } from './resolver-data.component';
import { userResolver } from './user.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'query-params',
    component: QueryParamsComponent,
  },
  {
    path: 'path-params/:id',
    component: PathParamsComponent,
  },
  {
    path: 'static-data',
    component: StaticDataComponent,
    data: {
      title: 'Admin Panel',
      description: 'Управление системой',
      roles: ['admin', 'moderator'],
      features: { canEdit: true, canDelete: false },
    },
  },
  {
    path: 'resolver-data/:userId',
    component: ResolverDataComponent,
    resolve: { user: userResolver },
  },
];
