import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { QueryParamsComponent } from './query-params.component';
import { PathParamsComponent } from './path-params.component';
import { StaticDataComponent } from './static-data.component';
import { ResolverDataComponent } from './resolver-data.component';
import { ParamsInheritanceStrategyParentComponent } from './params-inheritance-strategy-parent.component';
import { ParamsInheritanceStrategyChildComponent } from './params-inheritance-strategy-child.component';
import { userResolver } from './user.resolver';
import { parentRouteResolver } from './parent-route.resolver';

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
  {
    path: 'params-inheritance-strategy/:parentId',
    component: ParamsInheritanceStrategyParentComponent,
    data: {
      parentData: 'Данные родительского маршрута (static data)',
    },
    resolve: {
      parentResolvedData: parentRouteResolver,
    },
    children: [
      {
        path: 'child/:childId',
        component: ParamsInheritanceStrategyChildComponent,
      },
    ],
  },
];
