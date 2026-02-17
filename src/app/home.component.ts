import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="demo-card">
      <div class="info-section">
        <h2>Что такое withComponentInputBinding</h2>
        <h3>
          Фича роутера, которая автоматически связывает данные из состояния
          маршрута с входами (inputs) компонента, указанного в
          <code>Route</code>.
        </h3>
        <h4>Зачем привязка</h4>
        <p>
          Чтобы не писать в каждом компоненте маршрута работу с ActivatedRoute,
          подписками и snapshot, а получать params, queryParams и data как
          обычные инпуты, с автоматическим обновлением при навигации и единым
          стилем с остальным приложением.
        </p>
        <h4>Как работает</h4>
        <p>
          Инпуты объявляют через сигнальную функцию <code>input()</code>. Не
          нужно вручную подписываться на <code>ActivatedRoute</code> и
          вытаскивать <code>params</code> / <code>data</code> /
          <code>queryParams</code>.
        </p>
        <h4>Подключение</h4>
        <p>
          Подключение Standalone:
          <code>provideRouter(routes, withComponentInputBinding())</code> в
          конфигурации приложения (см. <code>main.ts</code>).
        </p>
        <p>
          Подключение NgModule:
          <code
            >RouterModule.forRoot(routes, &#123; bindToComponentInputs: true
            &#125;)</code
          >; см.
          <a
            href="https://github.com/angular/angular/blob/main/packages/router/src/router_module.ts#L166"
            target="_blank"
            rel="noopener"
            >router_module.ts (L166)</a
          >.
        </p>
        <p>
          Реализация: см.
          <a
            href="https://github.com/angular/angular/blob/main/packages/router/src/provide_router.ts#L715-L741"
            target="_blank"
            rel="noopener"
            >provide_router.ts (L715–L741)</a
          >; при активации outlet вызывается привязка через
          <a
            href="https://github.com/angular/angular/blob/main/packages/router/src/directives/router_outlet.ts#L453-L514"
            target="_blank"
            rel="noopener"
            >router_outlet.ts (L453–L514)</a
          >.
        </p>
      </div>

      <div class="info-section">
        <h3>Источники данных и приоритет</h3>
        <p>
          Данные для привязки берутся в порядке (см.
          <a
            href="https://github.com/angular/angular/blob/main/packages/router/src/provide_router.ts#L720-L733"
            target="_blank"
            rel="noopener"
            >provide_router.ts (L720–L733)</a
          >):
        </p>
        <ol>
          <li>query parameters</li>
          <li>path и matrix parameters</li>
          <li class="list-sep">статический route <code>data</code></li>
          <li class="list-sep">
            данные из resolvers (<code>route.resolve</code> →
            <code>_resolvedData</code>)
          </li>
        </ol>
        <p>
          При конфликте имён побеждает тот, кто позже в списке (выше всего
          приоритет у resolvers).
        </p>
        <p>
          Если ключа в текущих данных маршрута нет, инпут устанавливается в
          <code>undefined</code>.
        </p>
      </div>

      <div class="info-section">
        <h3>Что демонстрируется в разделах</h3>
        <ul>
          <li>
            <strong>Query Parameters</strong> — параметры в query string URL
            (часть после <code>?</code>), пары ключ=значение, разделённые
            <code>&amp;</code>. В Angular доступны через
            <code>ActivatedRoute.queryParams</code> и при
            withComponentInputBinding — как <code>input()</code>. <br />Пример:
            <code>?name=John&amp;age=25</code>.
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"
              target="_blank"
              rel="noopener"
              >MDN URLSearchParams</a
            >,
            <a
              href="https://angular.dev/guide/routing/read-route-state"
              target="_blank"
              rel="noopener"
              >Angular: Read route state</a
            >.
          </li>
          <li class="list-sep">
            <strong>Path и Matrix Parameters</strong> — path params задаются в
            конфиге как <code>:id</code>; matrix params — пары после точки с
            запятой в сегменте (<code>;sort=asc</code>). В Angular — в
            <code>params</code> маршрута, при привязке — как
            <code>input()</code>. <br />Пример path: <code>/user/42</code>;
            matrix: <code>/products;sort=asc;page=2</code>.
            <a
              href="https://angular.dev/guide/routing/read-route-state"
              target="_blank"
              rel="noopener"
              >Angular: Read route state</a
            >,
            <a
              href="https://angular.dev/guide/routing/define-routes"
              target="_blank"
              rel="noopener"
              >Define routes</a
            >.
          </li>
          <li class="list-sep">
            <strong>Static Route Data</strong> — статический объект
            <code>data</code> в конфигурации маршрута; не зависит от URL.
            <br />Пример:
            <code>data: &#123; title: 'Admin', roles: ['admin'] &#125;</code>.
            <a
              href="https://angular.dev/api/router/Route"
              target="_blank"
              rel="noopener"
              >Angular: Route API (Data)</a
            >,
            <a
              href="https://angular.dev/guide/routing/define-routes"
              target="_blank"
              rel="noopener"
              >Define routes</a
            >.
          </li>
          <li class="list-sep">
            <strong>Resolver Data</strong> — данные, загружаемые до активации
            маршрута (резолверы); результат в <code>ActivatedRoute.data</code> и
            при withComponentInputBinding — в <code>input()</code> по имени
            ключа из <code>resolve</code>. <br />Пример:
            <code>resolve: &#123; user: userResolver &#125;</code>.
            <a
              href="https://angular.dev/guide/routing/data-resolvers"
              target="_blank"
              rel="noopener"
              >Angular: Route data resolvers</a
            >.
          </li>
          <li class="list-sep">
            <strong>Params Inheritance Strategy</strong> — при
            <code>paramsInheritanceStrategy: 'always'</code> дочерние маршруты
            получают params и data родительского маршрута через те же механизмы
            привязки (в т.ч. <code>input()</code>). Демо с вложенными маршрутами
            показывает наследование в дочернем компоненте.
          </li>
        </ul>
      </div>

      <p class="tip">
        Используйте навигационное меню сверху для просмотра <br />примеров.
      </p>
    </div>
  `,
})
export class HomeComponent {}
