import {ChangeDetectionStrategy, Component, inject, input, signal, WritableSignal} from '@angular/core';
import {ButtonComponent} from '../shared/button/button.component';
import {Router, RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {AppRoutes} from '../app.routes';

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
export class NavComponent {

  private router: Router = inject(Router);
  readonly appRoutes = AppRoutes;
  
  $currentRoute = input<string>(AppRoutes.RESUME_PATH);

  handleRoute(nextRoute: string): void {
    this.router.navigate([`/${nextRoute}`]).then(() => {
    });
  }
}
