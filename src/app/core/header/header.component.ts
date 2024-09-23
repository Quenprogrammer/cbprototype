import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {  NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router= inject(Router);
  isFullScreen: boolean= true;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }

  private checkRoute(url: string) {
    const fullScreenRoutes = ['/home', '/courses'];
    this.isFullScreen = fullScreenRoutes.includes(url);
  }

}
