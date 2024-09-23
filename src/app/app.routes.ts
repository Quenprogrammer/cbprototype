import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {path: 'home', loadComponent: () => import('./features/home/home.component').then(_ => _.HomeComponent)},
  {path: 'services', loadComponent: () => import('./features/services/services.component').then(_ => _.ServicesComponent)},
  {path: 'courses', loadComponent: () => import('./features/courses/courses.component').then(_ => _.CoursesComponent)},
  {path: 'showcase', loadComponent: () => import('./features/showcase/showcase.component').then(_ => _.ShowcaseComponent)},
  {path: 'contact-us', loadComponent: () => import('./features/contact-us/contact-us.component').then(_ => _.ContactUsComponent)},
  {path: 'certificate-verification', loadComponent: () => import('./features/certificate-verification/certificate-verification.component').then(_ => _.CertificateVerificationComponent)},
  {path: 'certificate-view', loadComponent: () => import('./features/certificate-verification/certificat-view/certificat-view.component').then(_ => _.CertificatViewComponent)},
  {path: 'privacy', loadComponent: () => import('./features/privacy/privacy.component').then(_ => _.PrivacyComponent)},
  {path: 'terms', loadComponent: () => import('./features/terms/terms.component').then(_ => _.TermsComponent)},
  {path: 'learningResources', loadComponent: () => import('./features/learning-resources/learning-resources.component').then(_ => _.LearningResourcesComponent)},
  {path: 'web', loadComponent: () => import('./features/courses/web-programming/web-programming.component').then(_ => _.WebProgrammingComponent)},
  {path: 'animation', loadComponent: () => import('./features/courses/animation/animation.component').then(_ => _.AnimationComponent)},
  {path: 'graphicsDesign', loadComponent: () => import('./features/courses/graphic-design/graphic-design.component').then(_ => _.GraphicDesignComponent)},
  {path: 'webDesign', loadComponent: () => import('./features/courses/web-design/web-design.component').then(_ => _.WebDesignComponent)},
  {path: 'videoEditing', loadComponent: () => import('./features/courses/video-editing/video-editing.component').then(_ => _.VideoEditingComponent)},



  {path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(_ => _.NotFoundComponent)},

];
