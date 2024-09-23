import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHero1Component } from './course-hero1.component';

describe('CourseHero1Component', () => {
  let component: CourseHero1Component;
  let fixture: ComponentFixture<CourseHero1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHero1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHero1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
