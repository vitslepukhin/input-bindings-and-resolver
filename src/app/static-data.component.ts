import { Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-static-data',
  imports: [JsonPipe],
  template: `
    <div class="demo-card">
      <h2>3. Static Route Data Demo</h2>

      <div class="explanation">
        <p>
          Третий источник — <strong>статический <code>data</code></strong> из конфигурации маршрута.
        </p>
        <p>
          Данные из свойства <code>data</code> в конфиге роута автоматически передаются в компонент
          через <code>input()</code> сигналы.
        </p>
      </div>

      <div class="params-display">
        <h3>Полученные статические данные:</h3>
        <div class="param-item">
          <span class="param-label">title:</span>
          <span class="param-value">{{ title() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">description:</span>
          <span class="param-value">{{ description() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">roles:</span>
          <span class="param-value">{{ roles() | json }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">features:</span>
          <span class="param-value">{{ features() | json }}</span>
        </div>
      </div>

      <div class="tip">
        <strong>Важно:</strong> Эти данные не зависят от URL и всегда одинаковы для данного роута.
      </div>
    </div>
  `,
})
export class StaticDataComponent {
  readonly title = input<string | undefined>();
  readonly description = input<string | undefined>();
  readonly roles = input<string[] | undefined>();
  readonly features = input<any>();
}
