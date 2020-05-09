import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesHeadComponent } from './expenses-head.component';

describe('ExpensesHeadComponent', () => {
  let component: ExpensesHeadComponent;
  let fixture: ComponentFixture<ExpensesHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
