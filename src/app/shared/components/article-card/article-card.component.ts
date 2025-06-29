import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  
  $title: InputSignal<string> = input<string>('');
}
