import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceFeesComponent } from './balance-fees.component';

describe('BalanceFeesComponent', () => {
  let component: BalanceFeesComponent;
  let fixture: ComponentFixture<BalanceFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
