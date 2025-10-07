import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-star-keeper',
  imports: [
    ArticleCardComponent,
    ButtonComponent
  ],
  templateUrl: './star-keeper.component.html',
  styleUrl: './star-keeper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarKeeperComponent {

  private domSanitizer = inject(DomSanitizer);

  safeUrl: SafeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1TJO7yTwkwY?si=YWE--hRUvGex0eOm');
}
