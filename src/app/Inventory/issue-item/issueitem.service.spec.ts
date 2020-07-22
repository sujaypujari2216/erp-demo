import { TestBed } from '@angular/core/testing';

import { IssueitemService } from './issueitem.service';

describe('IssueitemService', () => {
  let service: IssueitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
