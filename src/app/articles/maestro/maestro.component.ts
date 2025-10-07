import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';
import {Router, RouterLink} from '@angular/router';
import {AppRoutes} from '../../app.routes';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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
  private domSanitizer = inject(DomSanitizer);
  readonly appRoutes = AppRoutes;

  safeUrl: SafeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yQ1kUxZKjJg?si=3S74NkOySzq5xhvG');
  
  playMaestroClick(): void {
    this.router.navigate([AppRoutes.PLAY_MAESTRO]).then(() => {});
  }
}
