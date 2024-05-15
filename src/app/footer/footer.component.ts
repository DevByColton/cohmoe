import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  today: Date = new Date();
}
