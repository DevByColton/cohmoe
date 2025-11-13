import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-shape-wars',
  imports: [
    ArticleCardComponent,
    ButtonComponent
  ],
  templateUrl: './shape-wars.component.html',
  styleUrl: './shape-wars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShapeWarsComponent {
  
  private domSanitizer = inject(DomSanitizer);
  
  safeUrl: SafeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/w0fjkGv23so?si=scJAHnFwVsNZdUSQ');
}
