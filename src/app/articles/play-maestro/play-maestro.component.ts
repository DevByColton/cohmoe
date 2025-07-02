import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-play-maestro',
  imports: [
    ArticleCardComponent
  ],
  templateUrl: './play-maestro.component.html',
  styleUrl: './play-maestro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayMaestroComponent {

  get isMobile(): boolean {
    const userAgent: string = navigator.userAgent.toLowerCase();
    const isMobileUA: boolean = /android|iphone|ipad|ipod|mobile/.test(userAgent);
    const isSmallScreen: boolean = window.innerWidth <= 768;
    const hasTouchpoints: boolean = window.navigator.maxTouchPoints > 0;

    return isMobileUA || (isSmallScreen && hasTouchpoints);
  }
}
