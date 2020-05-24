import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainttypeComponent } from './complainttype.component';

describe('ComplainttypeComponent', () => {
  let component: ComplainttypeComponent;
  let fixture: ComponentFixture<ComplainttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
