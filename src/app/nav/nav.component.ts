import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonComponent} from '../shared/button/button.component';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {AppRoutes} from '../app.routes';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [
    ButtonComponent,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit, OnDestroy {

  readonly appRoutes = AppRoutes;

  private router: Router = inject(Router);

  private routerSubscription: Subscription;
  $currentRoute: WritableSignal<string> = signal(AppRoutes.RESUME_PATH);

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        let route: string = event.url.toString().replace('/', '');

        if (route === '')
          route = AppRoutes.RESUME_PATH;

        this.$currentRoute.set(route);
      }
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  handleRoute(nextRoute: string): void {
    this.router.navigate([`/${nextRoute}`]).then(() => {
    });
  }
}
