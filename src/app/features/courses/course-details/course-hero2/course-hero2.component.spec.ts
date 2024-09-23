import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHero2Component } from './course-hero2.component';

describe('CourseHero2Component', () => {
  let component: CourseHero2Component;
  let fixture: ComponentFixture<CourseHero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHero2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
