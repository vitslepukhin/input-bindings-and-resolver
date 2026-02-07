import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="demo-card">
      <h2>5. Преимущества подхода (withComponentInputBinding + Resolver)</h2>

      <div class="info-section">
        <h3>Компоненты без зависимостей</h3>
        <p>
          Presentational-компоненты получают данные только через <code>input()</code>. Вся логика
          получения данных, работа с сервисами, HTTP, Store и Dependency Injection остаётся в
          resolver и конфигурации маршрута. Компонент не знает, откуда пришли данные — только как
          их отобразить.
        </p>
      </div>

      <div class="info-section">
        <h3>Как withComponentInputBinding + Resolver реализует эту идею</h3>
        <pre class="diagram">┌─────────────────────────────────────────────────────────────┐
│                         RESOLVER                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  • inject(UserService)                               │    │
│  │  • inject(HttpClient)                                │    │
│  │  • inject(Store)                                     │    │
│  │  • Любые зависимости здесь                           │    │
│  └─────────────────────────────────────────────────────┘    │
│                           │                                  │
│                           ▼                                  │
│                    Загруженные данные                        │
└─────────────────────────────────────────────────────────────┘
                            │
                            │  withComponentInputBinding
                            │  автоматическая привязка
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    КОМПОНЕНТ                                 │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  user = input&lt;UserData&gt;();     // Просто input!      │    │
│  │  settings = input&lt;Settings&gt;(); // Никаких inject()   │    │
│  │                                                      │    │
│  │  // Нет ActivatedRoute                               │    │
│  │  // Нет HttpClient                                   │    │
│  │  // Нет подписок                                     │    │
│  │  // Нет ngOnInit для загрузки                        │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘</pre>
      </div>

      <div class="info-section">
        <h3>Тестируемость</h3>
        <p>
          Тесты не требуют моков <code>ActivatedRoute</code>, сервисов или подписок. Достаточно
          передать данные в инпуты (например, через <code>fixture.componentRef.setInput()</code>)
          и проверить отображение. Компонент ведёт себя как чистая функция от входных данных.
        </p>
      </div>

      <div class="info-section">
        <h3>Переиспользуемость</h3>
        <p>
          Один и тот же компонент можно использовать в роутере (с данными из resolver), как
          дочерний с привязкой <code>[user]="userData"</code>, в Storybook для документации или в
          любом другом контексте. Он не привязан к способу получения данных.
        </p>
      </div>

      <div class="info-section">
        <h3>Единая ответственность</h3>
        <p>
          Resolver отвечает за то, <strong>откуда</strong> и <strong>как</strong> получить данные;
          компонент — только за то, <strong>как</strong> их показать. Разделение упрощает поддержку
          и изменение источников данных (REST, GraphQL, Store) без правок в UI-компонентах.
        </p>
      </div>

      <div class="info-section">
        <h3>Предсказуемость</h3>
        <p>
          UI можно рассматривать как функцию от inputs: одинаковые входные данные дают одинаковый
          результат. Нет скрытых побочных эффектов и неочевидных зависимостей — контракт компонента
          явно задаётся через <code>input()</code> и <code>output()</code>.
        </p>
      </div>

      <div class="info-section">
        <h3>Когда полезно</h3>
        <p>
          Подход особенно ценен в больших командах (UI и бэкенд-логика разделены), при построении
          design systems и документации в Storybook, при unit-тестировании и SSR, когда данные
          должны быть готовы до рендеринга.
        </p>
      </div>

      <div class="info-section">
        <h3>Ограничения</h3>
        <p>
          Навигация блокируется до завершения resolver, поэтому нужна индикация загрузки (например,
          по <code>Router.currentNavigation()</code>). Для сценариев с частыми обновлениями данных
          (polling, WebSocket) удобнее комбинировать с другими паттернами.
        </p>
      </div>

      <div class="tip">
        <strong>Итог:</strong> withComponentInputBinding в связке с resolver позволяет делать
        компоненты маршрутов «тупыми» и зависимыми только от контракта данных, а не от способа их
        получения.
      </div>
    </div>
  `,
})
export class AdvantagesComponent {}
