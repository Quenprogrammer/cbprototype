import {Component} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-home-carousal',
    standalone: true,
  imports: [NgbCarouselModule],
    templateUrl: './home-carousal.component.html',
    styleUrl: './home-carousal.component.scss'
})
export class HomeCarousalComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
