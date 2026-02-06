import { Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { UserData } from './user.resolver';

const ROUTER_STATE =
  'https://github.com/angular/angular/blob/main/packages/router/src/router_state.ts#L267-L288';
const RESOLVE_DATA =
  'https://github.com/angular/angular/blob/main/packages/router/src/operators/resolve_data.ts#L92-L95';
const NAVIGATION_TRANSITION =
  'https://github.com/angular/angular/blob/main/packages/router/src/navigation_transition.ts';
const ROUTER_OUTLET =
  'https://github.com/angular/angular/blob/main/packages/router/src/directives/router_outlet.ts#L453-L514';
const ROUTER =
  'https://github.com/angular/angular/blob/main/packages/router/src/router.ts#L334';

@Component({
  selector: 'app-resolver-data',
  imports: [JsonPipe],
  template: `
    <div class="demo-card">
      <h2>4. Resolver Data Demo</h2>

      <div class="explanation">
        <p>
          Четвёртый источник — <strong>данные из resolvers</strong>. В конфиге маршрута задаётся
          <code>resolve: &#123; key: resolveFn &#125;</code>. Результат резолвера попадает в
          <code>ActivatedRouteSnapshot._resolvedData</code>, затем в наследуемые <code>data</code> /
          <code>resolve</code> и в <code>ActivatedRoute.data</code>. См.
          <a [href]="ROUTER_STATE" target="_blank" rel="noopener">router_state.ts (L267–L288)</a>,
          <a [href]="RESOLVE_DATA" target="_blank" rel="noopener">resolve_data.ts (L92–L95)</a>.
        </p>

        <p>
          С <code>withComponentInputBinding</code> в компоненте достаточно объявить
          <code>input()</code> или <code>input.required()</code> с тем же именем, что ключ в
          <code>resolve</code>.
        </p>
        <p>
          Классический способ через <code>ActivatedRoute.data.subscribe</code>
          по-прежнему возможен.
        </p>
        <p>
          Для доступа к данным родительского маршрута нужна опция
          <code>paramsInheritanceStrategy: 'always'</code> (например через
          <code>withRouterConfig</code>).
        </p>
      </div>

      <div class="info-section">
        <h3>Порядок навигации</h3>
        <p>
          Цепочка (см. <a [href]="NAVIGATION_TRANSITION" target="_blank" rel="noopener">navigation_transition.ts</a>):
          GuardsCheckEnd → ResolveStart → выполнение <code>resolveData()</code>, установка
          <code>_resolvedData</code> → ResolveEnd → загрузка компонентов, создание router state →
          <code>activateWith(route)</code> → создание компонента и привязка через inputBinder →
          ActivationEnd, NavigationEnd.
        </p>

        <p>
          <strong>Важно:</strong> компонент маршрута создаётся и показывается только
          <strong>после</strong> успешного завершения всех resolvers. До этого пользователь остаётся
          на предыдущем экране.
        </p>
      </div>

      <div class="info-section">
        <h3>Индикация загрузки во время resolve</h3>
        <p>
          Глобальный индикатор по сигналу <code>Router.currentNavigation()</code>
          (не <code>null</code> во время навигации, включая фазу resolve) — см. корневой компонент и
          <a [href]="ROUTER" target="_blank" rel="noopener">router.ts (L334)</a>.
        </p>
        <p>
          Либо использование выхода <code>(activate)</code> у <code>RouterOutlet</code> для момента
          появления контента с resolved data — см.
          <a [href]="ROUTER_OUTLET" target="_blank" rel="noopener">router_outlet.ts (L453–L514)</a>.
        </p>
      </div>

      <div class="params-display">
        <h3>Данные пользователя из resolver:</h3>
        <div class="param-item">
          <span class="param-label">User:</span>
          <span class="param-value" style="white-space: pre-line;">{{ user() | json }}</span>
        </div>
      </div>

      <div class="tip">
        <strong>Попробуйте:</strong> Перейдите на <code>/resolver-data/456</code> чтобы увидеть изменение ID.
      </div>
    </div>
  `,
})
export class ResolverDataComponent {
  readonly user = input<UserData | undefined>();

  protected readonly ROUTER_STATE = ROUTER_STATE;
  protected readonly RESOLVE_DATA = RESOLVE_DATA;
  protected readonly NAVIGATION_TRANSITION = NAVIGATION_TRANSITION;
  protected readonly ROUTER_OUTLET = ROUTER_OUTLET;
  protected readonly ROUTER = ROUTER;
}
