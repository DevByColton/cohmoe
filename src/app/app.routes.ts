import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
  { path: 'blog', loadComponent: () => import('./blog/blog.component').then(mod => mod.BlogComponent) }
];
