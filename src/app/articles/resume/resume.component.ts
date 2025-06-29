import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ArticleCardComponent} from '../../shared/components/article-card/article-card.component';
import {ButtonComponent} from '../../shared/button/button.component';
import {HttpClient} from '@angular/common/http';

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
  
  private http: HttpClient = inject(HttpClient);
  private readonly resumePath: string = '/assets/Colton Morales Resume.pdf';

  downloadResume(): void {
    const resumeDownloadSub = this.http.get(this.resumePath, { responseType: 'blob' }).subscribe({
      next: (data: Blob) => {
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = window.URL.createObjectURL(data);
        link.download = 'Colton Morales Resume.pdf';
        link.click();
        window.URL.revokeObjectURL(link.href);
      },
      error: () => {
        console.error('Error retrieving Resume pdf');
      },
      complete: () => {
        resumeDownloadSub?.unsubscribe();
      }
    });
  }
}
