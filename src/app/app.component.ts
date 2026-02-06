import { Component, computed, inject, viewChild } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { LoaderComponent } from './loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LoaderComponent],
  template: `
    <div class="container">
      <h1>Angular withComponentInputBinding Demo</h1>

      <nav class="nav-menu">
        <a
          routerLink="/"
          routerLinkActive="active-link"
          [routerLinkActiveOptions]="{ exact: true }"
          class="nav-link"
          >Home</a
        >
        <a
          routerLink="/query-params"
          [queryParams]="{ name: 'John', age: 25 }"
          routerLinkActive="active-link"
          class="nav-link"
        >
          1. Query Parameters
        </a>
        <a
          [routerLink]="['/path-params', '42', { sort: 'asc', page: 2 }]"
          routerLinkActive="active-link"
          class="nav-link"
        >
          2. Path & Matrix Parameters
        </a>
        <a
          routerLink="/static-data"
          routerLinkActive="active-link"
          class="nav-link"
        >
          3. Static Route Data
        </a>
        <a
          routerLink="/resolver-data/123"
          routerLinkActive="active-link"
          class="nav-link"
        >
          4. Resolver Data
        </a>
      </nav>

      <div class="content">
        @if(isLoading()) {
        <app-loader />
        }
        <router-outlet />
      </div>
    </div>
  `,
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly outlet = viewChild<RouterOutlet>(RouterOutlet);
  protected isLoading = computed(() => {
    const currentNavigation = this.router.currentNavigation();
    if (currentNavigation) {
      this.outlet()?.deactivate();
    }
    return !!currentNavigation;
  });
}
