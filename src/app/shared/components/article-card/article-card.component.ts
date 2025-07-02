import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-article-card',
  imports: [
    NgClass
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  
  $title: InputSignal<string> = input<string>('');
}
