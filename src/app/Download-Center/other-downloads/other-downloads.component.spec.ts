import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDownloadsComponent } from './other-downloads.component';

describe('OtherDownloadsComponent', () => {
  let component: OtherDownloadsComponent;
  let fixture: ComponentFixture<OtherDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
