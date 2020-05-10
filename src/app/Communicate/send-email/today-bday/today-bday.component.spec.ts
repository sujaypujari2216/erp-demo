import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBdayComponent } from './today-bday.component';

describe('TodayBdayComponent', () => {
  let component: TodayBdayComponent;
  let fixture: ComponentFixture<TodayBdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayBdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
