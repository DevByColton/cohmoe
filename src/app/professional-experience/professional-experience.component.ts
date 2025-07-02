import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ResumeComponent} from '../articles/resume/resume.component';

@Component({
  selector: 'app-professional-experience',
  imports: [
    ResumeComponent
  ],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalExperienceComponent {

}
