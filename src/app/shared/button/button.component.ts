import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() title: string = '';
  @Input() showTitle: boolean = true;
  @Input() showIcon: boolean = true;
  @Input() color: 'violet' | 'blue' | 'salmon' | 'gray' | 'steam-blue' | 'grayish-white' = 'violet';
  @Input() action: 'link' | 'click' = 'link';
  @Input() link?: string;

  @Output() clickEvent = new EventEmitter<void>();

  handleClick(): void {
    if (this.action === 'link' && this.link) {
      window.open(this.link, '_blank', 'noopener');
    }
    if (this.action === 'click') {
      this.clickEvent.emit();
    }
  }
}
