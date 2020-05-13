import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignMarksheetComponent } from './design-marksheet.component';

describe('DesignMarksheetComponent', () => {
  let component: DesignMarksheetComponent;
  let fixture: ComponentFixture<DesignMarksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignMarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
