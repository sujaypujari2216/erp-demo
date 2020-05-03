import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiClassStudentComponent } from './multi-class-student.component';

describe('MultiClassStudentComponent', () => {
  let component: MultiClassStudentComponent;
  let fixture: ComponentFixture<MultiClassStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiClassStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiClassStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
