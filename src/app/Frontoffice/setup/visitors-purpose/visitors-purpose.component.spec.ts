import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsPurposeComponent } from './visitors-purpose.component';

describe('VisitorsPurposeComponent', () => {
  let component: VisitorsPurposeComponent;
  let fixture: ComponentFixture<VisitorsPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
