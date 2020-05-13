import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksGradeComponent } from './marks-grade.component';

describe('MarksGradeComponent', () => {
  let component: MarksGradeComponent;
  let fixture: ComponentFixture<MarksGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
