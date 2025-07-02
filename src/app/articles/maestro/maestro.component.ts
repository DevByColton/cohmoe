import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';
import {Router, RouterLink} from '@angular/router';
import {AppRoutes} from '../../app.routes';

@Component({
  selector: 'app-maestro',
  imports: [
    ArticleCardComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './maestro.component.html',
  styleUrl: './maestro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaestroComponent {

  private router: Router = inject(Router);
  readonly appRoutes = AppRoutes;
  
  playMaestroClick(): void {
    this.router.navigate([AppRoutes.PLAY_MAESTRO]).then(() => {});
  }
}
