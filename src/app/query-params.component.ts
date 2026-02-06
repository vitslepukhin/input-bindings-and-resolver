import { Component, input } from '@angular/core';

@Component({
  selector: 'app-query-params',
  template: `
    <div class="demo-card">
      <h2>1. Query Parameters Demo</h2>

      <div class="explanation">
        <p>
          Первый источник в приоритете привязки — <strong>query parameters</strong>. Query параметры
          автоматически маппятся на <code>input()</code> сигналы благодаря
          <code>withComponentInputBinding()</code>.
        </p>

        <p>Параметры доступны через сигналы <code>input()</code> с именами, совпадающими с ключами в URL.</p>
      </div>

      <div class="params-display">
        <h3>Полученные параметры:</h3>
        <div class="param-item">
          <span class="param-label">name:</span>
          <span class="param-value">{{ name() || 'не указано' }}</span>
        </div>
        <div class="param-item">
          <span class="param-label">age:</span>
          <span class="param-value">{{ age() || 'не указано' }}</span>
        </div>
      </div>

      <div class="tip">
        <strong>Попробуйте:</strong> Измените URL вручную, добавив <code>?name=Alex&age=30</code>
      </div>
    </div>
  `,
})
export class QueryParamsComponent {
  readonly name = input<string | undefined>();
  readonly age = input<string | undefined>();
}
