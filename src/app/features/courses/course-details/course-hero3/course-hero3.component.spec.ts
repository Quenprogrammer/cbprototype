import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHero3Component } from './course-hero3.component';

describe('CourseHero3Component', () => {
  let component: CourseHero3Component;
  let fixture: ComponentFixture<CourseHero3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHero3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHero3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
