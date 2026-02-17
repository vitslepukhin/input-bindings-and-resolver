import { ResolveFn } from '@angular/router';
import { delay, of } from 'rxjs';

export const parentRouteResolver: ResolveFn<string> = (route) => {

  return of('Данные родительского маршрута (resolved data)').pipe(delay(3000));
};
