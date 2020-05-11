import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExaminationLinksComponent } from './online-examination-links.component';

describe('OnlineExaminationLinksComponent', () => {
  let component: OnlineExaminationLinksComponent;
  let fixture: ComponentFixture<OnlineExaminationLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineExaminationLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExaminationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
