import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';

@Component({
  selector: 'app-resume',
  imports: [
    ArticleCardComponent,
    ButtonComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent {

  downloadResume() {
    console.log('TODO, handle download resume click');
  }
}
