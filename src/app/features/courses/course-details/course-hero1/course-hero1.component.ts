import {Component, Input} from '@angular/core';
import {Course} from "../../courses";

@Component({
  selector: 'app-course-hero1',
  standalone: true,
  imports: [],
  templateUrl: './course-hero1.component.html',
  styleUrl: './course-hero1.component.scss'
})
export class CourseHero1Component {

  @Input() course: Course|undefined;
}
