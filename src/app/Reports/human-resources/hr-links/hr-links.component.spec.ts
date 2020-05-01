import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLinksComponent } from './hr-links.component';

describe('HrLinksComponent', () => {
  let component: HrLinksComponent;
  let fixture: ComponentFixture<HrLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
