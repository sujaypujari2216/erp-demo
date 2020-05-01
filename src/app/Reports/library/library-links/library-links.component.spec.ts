import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryLinksComponent } from './library-links.component';

describe('LibraryLinksComponent', () => {
  let component: LibraryLinksComponent;
  let fixture: ComponentFixture<LibraryLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
