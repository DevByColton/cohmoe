import { Routes } from '@angular/router';

export class AppRoutes {
  static readonly RESUME_PATH: string = 'resume';
  static readonly GAME_DEV_PATH: string = 'game-dev';
  static readonly BLOG_PATH: string = 'blog';
  static readonly PLAY_MAESTRO: string = 'play-maestro';
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.RESUME_PATH,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.RESUME_PATH,
    loadComponent:() => 
      import('./professional-experience/professional-experience.component').then(mod => mod.ProfessionalExperienceComponent),
    title: 'Cohmoe - Resume'
  },
  {
    path: AppRoutes.GAME_DEV_PATH,
    loadComponent:() =>
      import('./game-dev-experience/game-dev-experience.component').then(mod => mod.GameDevExperienceComponent),
    title: 'Cohmoe - Game Dev'
  },
  {
    path: AppRoutes.PLAY_MAESTRO,
    loadComponent:() =>
      import('./articles/play-maestro/play-maestro.component').then(mod => mod.PlayMaestroComponent),
    title: 'Cohmoe - Play Maestro'
  },
  // {
  //   path: AppRoutes.BLOG_PATH,
  //   loadComponent:() => 
  //     import('./blog/blog.component').then(mod => mod.BlogComponent),
  //   title: 'Cohmoe - Blog'
  // },
  {
    path: '**',
    loadComponent:() => 
      import('./page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent),
    title: 'Cohmoe - Page Not Found'
  }
];
