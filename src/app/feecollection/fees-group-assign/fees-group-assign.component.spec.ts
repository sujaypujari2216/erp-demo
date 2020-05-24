import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesGroupAssignComponent } from './fees-group-assign.component';

describe('FeesGroupAssignComponent', () => {
  let component: FeesGroupAssignComponent;
  let fixture: ComponentFixture<FeesGroupAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesGroupAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesGroupAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
