import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent} from "../shared/button/button.component";
import {ArticleCardComponent} from "../shared/components/article-card/article-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    ButtonComponent,
    ArticleCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  
  downloadResume() {
    console.log('TODO, handle download resume click');
  }
}
