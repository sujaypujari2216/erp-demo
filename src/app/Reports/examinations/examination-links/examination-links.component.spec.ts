import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationLinksComponent } from './examination-links.component';

describe('ExaminationLinksComponent', () => {
  let component: ExaminationLinksComponent;
  let fixture: ComponentFixture<ExaminationLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
