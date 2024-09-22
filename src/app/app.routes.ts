import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {path: 'home', loadComponent: () => import('./features/home/home.component').then(_ => _.HomeComponent)},
  {path: 'services', loadComponent: () => import('./features/services/services.component').then(_ => _.ServicesComponent)},
  {path: 'portfolio', loadComponent: () => import('./features/portfolio/portfolio.component').then(_ => _.PortfolioComponent)},
  {path: 'showcase', loadComponent: () => import('./features/showcase/showcase.component').then(_ => _.ShowcaseComponent)},
  {path: 'contact-us', loadComponent: () => import('./features/contact-us/contact-us.component').then(_ => _.ContactUsComponent)},
  {path: 'certificate-verification', loadComponent: () => import('./features/certificate-verification/certificate-verification.component').then(_ => _.CertificateVerificationComponent)},
  {path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(_ => _.NotFoundComponent)},

];
