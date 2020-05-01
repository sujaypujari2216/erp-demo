import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivisualComponent } from './indivisual.component';

describe('IndivisualComponent', () => {
  let component: IndivisualComponent;
  let fixture: ComponentFixture<IndivisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
