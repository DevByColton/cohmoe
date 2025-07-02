import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {Subscription} from 'rxjs';
import {AppRoutes} from './app.routes';
import {PlayMaestroComponent} from './articles/play-maestro/play-maestro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, PlayMaestroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  private router: Router = inject(Router);

  readonly appRoutes = AppRoutes; 
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
}
