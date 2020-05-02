import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsdetailsComponent } from './studentsdetails.component';

describe('StudentsdetailsComponent', () => {
  let component: StudentsdetailsComponent;
  let fixture: ComponentFixture<StudentsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
