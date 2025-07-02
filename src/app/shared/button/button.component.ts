import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text: string = '';
  @Input() showText: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() showChecked: boolean = false;
  @Input() color: 'violet' | 'blue' | 'salmon' | 'gray' | 'steam-blue' | 'grayish-white' = 'violet';
  @Input() action: 'link' | 'click' = 'link';
  @Input() link?: string;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    if (this.action === 'link' && this.link) {
      window.open(this.link, '_blank', 'noopener');
    }
    if (this.action === 'click') {
      this.clickEvent.emit();
    }
  }
}
