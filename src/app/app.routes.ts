import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    title: 'Cohmoe - Home'
  },
  {
    path: 'blog',
    loadComponent:() => import('./blog/blog.component').then(mod => mod.BlogComponent),
    title: 'Cohmoe - Blog'
  },
  {
    path: '**',
    loadComponent:() => import('./page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent),
    title: 'Cohmoe - Page Not Found'
  }
];
