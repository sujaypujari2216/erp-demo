import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersTimetableComponent } from './teachers-timetable.component';

describe('TeachersTimetableComponent', () => {
  let component: TeachersTimetableComponent;
  let fixture: ComponentFixture<TeachersTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
