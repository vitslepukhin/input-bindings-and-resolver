import { Component, input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-params-inheritance-strategy-parent',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="demo-card">
      <h2>5. Params Inheritance Strategy</h2>

      <div class="explanation">
        <p>
          При <code>paramsInheritanceStrategy: 'always'</code> (см.
          <code>main.ts</code>) дочерние маршруты наследуют
          <strong>params</strong> и <strong>data</strong> от всех родительских
          маршрутов. Данные попадают в компонент через те же
          <code>input()</code> при <code>withComponentInputBinding()</code>.
        </p>
      </div>

      <div class="params-display">
        <h3>Данные родительского маршрута:</h3>
        <div class="param-item">
          <span class="param-label">parentId (path):</span>
          <span class="param-value">{{ parentId() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">parentData (route data):</span>
          <span class="param-value">{{ parentData() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">parentResolvedData (route data):</span>
          <span class="param-value">{{ parentResolvedData() || 'не указано' }}</span>
        </div>
      </div>

      <div class="tip">
        <strong>Попробуйте:</strong>
        <a [routerLink]="['./child', '100']"
          >Перейти к дочернему маршруту child/100</a
        >
        — дочерний компонент получит <code>parentId</code> и
        <code>parentData</code> по наследованию.
      </div>

      <router-outlet />
    </div>
  `,
})
export class ParamsInheritanceStrategyParentComponent {
  readonly parentId = input<string | undefined>();
  readonly parentData = input<string | undefined>();
  readonly parentResolvedData = input<string | undefined>();
}
