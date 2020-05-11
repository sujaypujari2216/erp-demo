import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersRatingComponent } from './teachers-rating.component';

describe('TeachersRatingComponent', () => {
  let component: TeachersRatingComponent;
  let fixture: ComponentFixture<TeachersRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
