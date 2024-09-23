import {Component, inject, Input} from '@angular/core';
import {Course, findCourseById} from "../courses";
import {Router} from "@angular/router";
import {CourseHero1Component} from "./course-hero1/course-hero1.component";
import {CourseHero3Component} from "./course-hero3/course-hero3.component";
import {CourseHero2Component} from "./course-hero2/course-hero2.component";
import {CourseHero4Component} from "./course-hero4/course-hero4.component";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    CourseHero1Component,
    CourseHero3Component,
    CourseHero2Component,
    CourseHero4Component
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  course: Course | undefined;
  isLoading:boolean=true;
router=inject(Router);
  @Input()
  set id(courseId: string) {
    const course = findCourseById(courseId);
    if (course) {
      this.course = course;
      this.isLoading=false;
    } else {
    this.router.navigateByUrl('/notfount')
    }
  }
}
