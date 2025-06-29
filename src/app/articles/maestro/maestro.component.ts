import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';

@Component({
  selector: 'app-maestro',
  imports: [
    ArticleCardComponent,
    ButtonComponent
  ],
  templateUrl: './maestro.component.html',
  styleUrl: './maestro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaestroComponent {

}
