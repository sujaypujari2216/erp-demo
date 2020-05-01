import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceLinksComponent } from './attendance-links.component';

describe('AttendanceLinksComponent', () => {
  let component: AttendanceLinksComponent;
  let fixture: ComponentFixture<AttendanceLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
