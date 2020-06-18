import { TestBed } from '@angular/core/testing';

import { TokService } from './tok.service';

describe('TokService', () => {
  let service: TokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
