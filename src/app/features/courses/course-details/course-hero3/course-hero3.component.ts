import {Component, Input} from '@angular/core';
import {Course} from "../../courses";

@Component({
  selector: 'app-course-hero3',
  standalone: true,
  imports: [],
  templateUrl: './course-hero3.component.html',
  styleUrl: './course-hero3.component.scss'
})
export class CourseHero3Component {
  @Input() course: Course|undefined;
}
