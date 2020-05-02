import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFeesCollectionComponent } from './online-fees-collection.component';

describe('OnlineFeesCollectionComponent', () => {
  let component: OnlineFeesCollectionComponent;
  let fixture: ComponentFixture<OnlineFeesCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFeesCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFeesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
