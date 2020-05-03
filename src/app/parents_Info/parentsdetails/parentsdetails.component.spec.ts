import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsdetailsComponent } from './parentsdetails.component';

describe('ParentsdetailsComponent', () => {
  let component: ParentsdetailsComponent;
  let fixture: ComponentFixture<ParentsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
