import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';

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

}
