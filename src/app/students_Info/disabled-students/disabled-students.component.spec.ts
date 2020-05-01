import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledStudentsComponent } from './disabled-students.component';

describe('DisabledStudentsComponent', () => {
  let component: DisabledStudentsComponent;
  let fixture: ComponentFixture<DisabledStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
