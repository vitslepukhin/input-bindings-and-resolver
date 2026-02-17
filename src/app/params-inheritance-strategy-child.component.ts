import { Component, input } from '@angular/core';

@Component({
  selector: 'app-params-inheritance-strategy-child',
  standalone: true,
  template: `
    <div class="demo-card">
      <h2>Дочерний маршрут — наследование</h2>

      <div class="explanation">
        <p>
          Этот компонент принадлежит дочернему маршруту
          <code>child/:childId</code>. Параметры <code>parentId</code> и
          <code>parentData</code> приходят сюда
          <strong>по наследованию</strong> от родительского маршрута благодаря
          <code>paramsInheritanceStrategy: 'always'</code>.
        </p>
      </div>

      <div class="params-display">
        <h3>От родителя (наследование):</h3>
        <div class="param-item">
          <span class="param-label">parentId:</span>
          <span class="param-value">{{ parentId() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">parentData:</span>
          <span class="param-value">{{ parentData() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">parentResolvedData:</span>
          <span class="param-value">{{ parentResolvedData() || 'не указано' }}</span>
        </div>

        <h3>Собственные params дочернего маршрута:</h3>
        <div class="param-item">
          <span class="param-label">childId:</span>
          <span class="param-value">{{ childId() || 'не указано' }}</span>
        </div>
      </div>

      <div class="tip">
        Все три значения привязаны через <code>input()</code>;
        <code>parentId</code> и <code>parentData</code> доступны в дочернем
        компоненте без явной передачи — это и есть наследование данных
        родительского роута.
      </div>
    </div>
  `,
})
export class ParamsInheritanceStrategyChildComponent {
  readonly parentId = input<string | undefined>();
  readonly parentData = input<string | undefined>();
  readonly parentResolvedData = input<string | undefined>();
  readonly childId = input<string | undefined>();
}
