import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHero4Component } from './course-hero4.component';

describe('CourseHero4Component', () => {
  let component: CourseHero4Component;
  let fixture: ComponentFixture<CourseHero4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHero4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHero4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
