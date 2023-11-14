import { TestBed } from '@angular/core/testing';

import { FormerService } from './former.service';

describe('FormerService', () => {
  let service: FormerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
