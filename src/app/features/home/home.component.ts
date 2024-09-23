import { Component } from '@angular/core';
import {HomeCarousalComponent} from "./home-carousal/home-carousal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeCarousalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
