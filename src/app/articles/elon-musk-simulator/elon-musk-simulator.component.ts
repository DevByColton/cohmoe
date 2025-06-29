import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';

@Component({
  selector: 'app-elon-musk-simulator',
  imports: [
    ArticleCardComponent,
    ButtonComponent
  ],
  templateUrl: './elon-musk-simulator.component.html',
  styleUrl: './elon-musk-simulator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElonMuskSimulatorComponent {

}
