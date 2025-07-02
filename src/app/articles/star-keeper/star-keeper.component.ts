import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';

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

}
