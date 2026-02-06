import { Component, input } from '@angular/core';

@Component({
  selector: 'app-path-params',
  template: `
    <div class="demo-card">
      <h2>2. Path & Matrix Parameters Demo</h2>

      <div class="explanation">
        <p>
          Второй источник — <strong>path и matrix parameters</strong>. Path параметры (например
          <code>/user/:id</code>) и matrix параметры (например <code>;sort=asc</code>) передаются в
          компонент через <code>input()</code> сигналы.
        </p>

        <p>
          Важно: в <code>params</code> роутера matrix-параметры попадают только с
          <strong>последнего</strong> сегмента URL (чтобы <code>sort</code> и <code>page</code> были
          в инпутах, объект с matrix params в <code>routerLink</code> передают последним:
          <code>['/path-params/42', 'details', &#123; sort: 'asc', page: 2 &#125;]</code>).
        </p>
      </div>

      <div class="params-display">
        <h3>Path параметры:</h3>
        <div class="param-item">
          <span class="param-label">id:</span>
          <span class="param-value">{{ id() || 'не указано' }}</span>
        </div>
        <h3>Matrix параметры:</h3>
        <div class="param-item">
          <span class="param-label">sort:</span>
          <span class="param-value">{{ sort() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">page:</span>
          <span class="param-value">{{ page() || 'не указано' }}</span>
        </div>
      </div>

      <div class="tip">
        <strong>Попробуйте:</strong> Перейдите по ссылке «Path & Matrix Parameters» в меню (matrix params на последнем сегменте).
      </div>
    </div>
  `,
})
export class PathParamsComponent {
  readonly id = input<string | undefined>();
  readonly sort = input<string | undefined>();
  readonly page = input<string | undefined>();
}
