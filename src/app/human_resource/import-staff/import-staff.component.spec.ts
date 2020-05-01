import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStaffComponent } from './import-staff.component';

describe('ImportStaffComponent', () => {
  let component: ImportStaffComponent;
  let fixture: ComponentFixture<ImportStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
