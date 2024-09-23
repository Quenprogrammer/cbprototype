import {Component, Input} from '@angular/core';
import {Course} from "../../courses";

@Component({
  selector: 'app-course-hero4',
  standalone: true,
  imports: [],
  templateUrl: './course-hero4.component.html',
  styleUrl: './course-hero4.component.scss'
})
export class CourseHero4Component {
  @Input() course: Course|undefined;
}
