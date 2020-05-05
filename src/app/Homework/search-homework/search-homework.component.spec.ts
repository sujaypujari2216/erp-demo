import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHomeworkComponent } from './search-homework.component';

describe('SearchHomeworkComponent', () => {
  let component: SearchHomeworkComponent;
  let fixture: ComponentFixture<SearchHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
