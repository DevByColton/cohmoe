import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../shared/button/button.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private router: Router = inject(Router);

  routeTo(route: string): void {
    this.router.navigate([route]).then(() => {});
  }
}
