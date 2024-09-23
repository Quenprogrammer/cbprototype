import {Component, Input} from '@angular/core';
import {Course} from "../../courses";

@Component({
  selector: 'app-course-hero2',
  standalone: true,
  imports: [],
  templateUrl: './course-hero2.component.html',
  styleUrl: './course-hero2.component.scss'
})
export class CourseHero2Component {
  @Input() course: Course|undefined;
}
